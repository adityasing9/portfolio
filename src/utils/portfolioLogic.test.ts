import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS, TECHNICAL_SKILLS } from '../data/projects';
import {
  filterProjects,
  filterSkills,
  validateContactForm,
  generateResumeDocument,
} from './portfolioLogic';

test('filterProjects returns all 5 featured projects when category is All', () => {
  const all = filterProjects(PROJECTS, 'All', '');
  assert.equal(all.length, 5);
  assert.deepEqual(
    all.map((p) => p.name),
    ['StudyAI', 'IntentLock Commerce', 'SettleHub', 'HackPass', 'Decrypto']
  );
});

test('filterProjects accurately filters by AI/ML, FinTech, Blockchain, and Automation', () => {
  const aiml = filterProjects(PROJECTS, 'AI/ML', '');
  assert.equal(aiml.length, 2);
  assert.deepEqual(
    aiml.map((p) => p.name),
    ['StudyAI', 'IntentLock Commerce']
  );

  const blockchain = filterProjects(PROJECTS, 'Blockchain', '');
  assert.equal(blockchain.length, 1);
  assert.equal(blockchain[0].name, 'Decrypto');

  const fintech = filterProjects(PROJECTS, 'FinTech', '');
  assert.equal(fintech.length, 3);
});

test('filterProjects filters by search query across stack and description', () => {
  const chroma = filterProjects(PROJECTS, 'All', 'ChromaDB');
  assert.equal(chroma.length, 1);
  assert.equal(chroma[0].name, 'StudyAI');

  const supabase = filterProjects(PROJECTS, 'All', 'Supabase');
  assert.equal(supabase.length, 1);
  assert.equal(supabase[0].name, 'HackPass');
});

test('filterSkills filters accurately across all 8 technical skill categories', () => {
  const allSkills = filterSkills(TECHNICAL_SKILLS, 'All');
  assert.equal(allSkills.length, TECHNICAL_SKILLS.length);

  const aiSkills = filterSkills(TECHNICAL_SKILLS, 'AI and Machine Learning');
  assert.equal(aiSkills.length, 8);
  assert.equal(
    aiSkills.some((s) => s.name.includes('Retrieval-Augmented Generation')),
    true
  );

  const blockchainSkills = filterSkills(TECHNICAL_SKILLS, 'Blockchain');
  assert.equal(blockchainSkills.length, 4);
});

test('validateContactForm enforces required fields and accepts valid input', () => {
  const invalid = validateContactForm({
    name: '',
    email: 'not-an-email',
    subject: '',
    message: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Rohan Mehta',
    email: 'rohan@example.com',
    subject: 'AI/ML Project Collaboration',
    message: 'Would love to connect regarding your RAG and FastAPI work.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('generateResumeDocument includes Aaditya Singh education, skills, and all 5 projects', () => {
  const doc = generateResumeDocument();
  assert.ok(doc.includes('Aaditya Singh'));
  assert.ok(doc.includes('BMS Institute of Technology and Management (BMSIT)'));
  assert.ok(doc.includes('StudyAI'));
  assert.ok(doc.includes('IntentLock Commerce'));
  assert.ok(doc.includes('Decrypto'));
});
