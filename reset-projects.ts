import Database from 'better-sqlite3';
import { PROJECTS } from './src/constants';

const db = new Database('portfolio.db');
db.pragma('journal_mode = WAL');

console.log('Clearing old projects...');
db.exec('DELETE FROM projects');

console.log('Inserting new projects from constants.ts...');
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
console.log('Projects updated successfully!');
