
const fs = require('fs');
const files = ['src/pages/index.jsx', 'src/pages/AdditionalPages.jsx'];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/background: "var\(--bg-surface\)"/g, 'background: "var(--bg-dark)"');
  fs.writeFileSync(f, content);
});

