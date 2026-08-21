#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const assetsDir = join(root, 'assets-b64');
const publicImg = join(root, 'public', 'img');
const publicRoot = join(root, 'public');

mkdirSync(publicImg, { recursive: true });

if (!existsSync(assetsDir)) {
  console.log('No assets-b64/ folder, skipping decode');
  process.exit(0);
}

for (const file of readdirSync(assetsDir)) {
  if (!file.endsWith('.b64')) continue;
  const name = file.slice(0, -4);
  const b64 = readFileSync(join(assetsDir, file), 'utf8').trim();
  const buf = Buffer.from(b64, 'base64');
  const dest = name === 'favicon.jpg' ? join(publicRoot, name) : join(publicImg, name);
  writeFileSync(dest, buf);
  console.log('decoded', name, buf.length, 'bytes');
}
