import Database from 'better-sqlite3';
import { TEMPLATES } from './src/constants';

const db = new Database('portfolio.db');
db.pragma('journal_mode = WAL');

console.log('Clearing old templates...');
db.exec('DELETE FROM templates');

console.log('Inserting new templates from constants.ts...');
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
console.log('Templates updated successfully!');
