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

const files = readdirSync(assetsDir);

// Group multi-part files: name.jpg.b64.part00, part01, ...
const partsMap = {};
const singles = [];

for (const file of files) {
  const partMatch = file.match(/^(.+\.b64)\.part(\d+)$/);
  if (partMatch) {
    const [, base, idx] = partMatch;
    if (!partsMap[base]) partsMap[base] = [];
    partsMap[base].push({ idx: parseInt(idx, 10), file });
  } else if (file.endsWith('.b64')) {
    singles.push(file);
  }
}

function writeAsset(name, b64) {
  const buf = Buffer.from(b64.trim(), 'base64');
  const dest = name === 'favicon.jpg' ? join(publicRoot, name) : join(publicImg, name);
  writeFileSync(dest, buf);
  console.log('decoded', name, buf.length, 'bytes');
}

// Singles
for (const file of singles) {
  const name = file.slice(0, -4); // remove .b64
  const b64 = readFileSync(join(assetsDir, file), 'utf8');
  writeAsset(name, b64);
}

// Multi-part
for (const [base, parts] of Object.entries(partsMap)) {
  parts.sort((a, b) => a.idx - b.idx);
  const b64 = parts.map((p) => readFileSync(join(assetsDir, p.file), 'utf8').trim()).join('');
  const name = base.slice(0, -4); // remove .b64
  writeAsset(name, b64);
}
