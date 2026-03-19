import Database from 'better-sqlite3';
import { PROJECTS, SKILLS, TEMPLATES } from '../constants';

const db = new Database('portfolio.db');

// Enable foreign keys
db.pragma('journal_mode = WAL');

export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      features TEXT NOT NULL, -- JSON array
      tech TEXT NOT NULL, -- JSON array
      images TEXT NOT NULL, -- JSON array
      case_study_problem TEXT,
      case_study_solution TEXT,
      case_study_result TEXT
    );

    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      items TEXT NOT NULL -- JSON array
    );

    CREATE TABLE IF NOT EXISTS templates (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      previewUrl TEXT NOT NULL,
      tags TEXT NOT NULL, -- JSON array
      featured BOOLEAN DEFAULT 0,
      downloadUrl TEXT,
      gallery TEXT -- JSON array
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed Data if tables are empty
  const projectCount = db.prepare('SELECT count(*) as count FROM projects').get();
  if (projectCount.count === 0) {
    console.log('Seeding projects...');
    const insertProject = db.prepare(`
      INSERT INTO projects (id, title, description, category, features, tech, images, case_study_problem, case_study_solution, case_study_result)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    db.transaction(() => {
      for (const project of PROJECTS) {
        insertProject.run(
          project.id,
          project.title,
          project.description,
          project.category,
          JSON.stringify(project.features),
          JSON.stringify(project.tech),
          JSON.stringify(project.images),
          project.caseStudy?.problem || null,
          project.caseStudy?.solution || null,
          project.caseStudy?.result || null
        );
      }
    })();
  }

  const skillCount = db.prepare('SELECT count(*) as count FROM skills').get();
  if (skillCount.count === 0) {
    console.log('Seeding skills...');
    const insertSkill = db.prepare(`INSERT INTO skills (category, items) VALUES (?, ?)`);
    db.transaction(() => {
      for (const skill of SKILLS) {
        insertSkill.run(skill.category, JSON.stringify(skill.items));
      }
    })();
  }

  const templateCount = db.prepare('SELECT count(*) as count FROM templates').get();
  if (templateCount.count === 0) {
    console.log('Seeding templates...');
    const insertTemplate = db.prepare(`
      INSERT INTO templates (id, title, description, image, previewUrl, tags, featured, downloadUrl, gallery)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    db.transaction(() => {
      for (const tpl of TEMPLATES) {
        insertTemplate.run(
          tpl.id,
          tpl.title,
          tpl.description,
          tpl.image,
          tpl.previewUrl,
          JSON.stringify(tpl.tags),
          tpl.featured ? 1 : 0,
          tpl.downloadUrl || null,
          tpl.gallery ? JSON.stringify(tpl.gallery) : null
        );
      }
    })();
  }
}

export { db };
