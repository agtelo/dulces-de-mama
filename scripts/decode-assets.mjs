#!/usr/bin/env node
/**
 * Downloads brand images into public/ before build/dev.
 * Never fails the whole process — missing assets are non-fatal.
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const urlsFile = join(root, 'assets-urls.json');

if (!existsSync(urlsFile)) {
  console.log('No assets-urls.json, skipping image download');
  process.exit(0);
}

const urls = JSON.parse(readFileSync(urlsFile, 'utf8'));

async function download(relPath, url) {
  try {
    const dest = join(publicDir, relPath);
    mkdirSync(dirname(dest), { recursive: true });
    const res = await fetch(url);
    if (!res.ok) {
      console.warn('skip', relPath, res.status);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    console.log('downloaded', relPath, buf.length, 'bytes');
  } catch (err) {
    console.warn('skip', relPath, err?.message || err);
  }
}

await Promise.all(Object.entries(urls).map(([path, url]) => download(path, url)));
console.log('assets ready');
process.exit(0);
