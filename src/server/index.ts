import express from 'express';
import cors from 'cors';
import { db, initDb } from './db.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize Database
try {
  initDb();
  console.log('Database initialized successfully');
} catch (error) {
  console.error('Failed to initialize database:', error);
}

// Helper to parse JSON arrays from DB
const parseJSONFields = (obj: any, fields: string[]) => {
  const result = { ...obj };
  fields.forEach(field => {
    if (result[field]) {
      try {
        result[field] = JSON.parse(result[field]);
      } catch (e) {
        result[field] = [];
      }
    }
  });
  return result;
};

// API Endpoints
app.get('/api/projects', (req, res) => {
  try {
    const projectsRaw = db.prepare('SELECT * FROM projects').all();
    const projects = projectsRaw.map(p => {
      const parsed = parseJSONFields(p, ['features', 'tech', 'images']);
      
      // Reconstruct caseStudy object if problem exists
      if (parsed.case_study_problem) {
        parsed.caseStudy = {
          problem: parsed.case_study_problem,
          solution: parsed.case_study_solution,
          result: parsed.case_study_result
        };
      }
      
      delete parsed.case_study_problem;
      delete parsed.case_study_solution;
      delete parsed.case_study_result;

      return parsed;
    });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/skills', (req, res) => {
  try {
    const skillsRaw = db.prepare('SELECT * FROM skills').all();
    const skills = skillsRaw.map(s => parseJSONFields(s, ['items']));
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/templates', (req, res) => {
  try {
    const templatesRaw = db.prepare('SELECT * FROM templates').all();
    const templates = templatesRaw.map(t => {
       const parsed = parseJSONFields(t, ['tags', 'gallery']);
       parsed.featured = Boolean(parsed.featured);
       return parsed;
    });
    res.json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const insert = db.prepare(`
      INSERT INTO messages (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `);

    const result = insert.run(name, email, subject || '', message);
    res.status(201).json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
