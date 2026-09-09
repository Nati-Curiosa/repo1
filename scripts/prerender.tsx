import React, {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import {readFile, writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import App from '../src/App';

// Render the same component used by the browser, so prices and copy cannot drift.
const html = await readFile('dist/index.html', 'utf8');
assert(html.includes('<div id="root"></div>'), 'Missing HTML mount point');
const content = renderToString(<StrictMode><App /></StrictMode>);
assert.equal((content.match(/<h1\b/g) || []).length, 1, 'Expected one main heading');
for (const text of ['Full Research', 'Full Cycle 360°', '€200', '€500', '€1,000', 'Tech Packs']) {
  assert(content.replace(/<!--.*?-->/g, "").includes(text), `Missing pre-rendered content: ${text}`);
}
assert(!content.includes('opacity:0'), 'Content must be visible before JavaScript loads');
const result = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
await writeFile('dist/index.html', result);
console.log('Pre-rendered homepage: headings, services and prices verified.');
