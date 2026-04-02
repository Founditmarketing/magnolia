
const fs = require('fs');
const files = ['src/pages/index.jsx', 'src/pages/AdditionalPages.jsx'];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/padding: "120px 24px"/g, 'padding: "clamp(60px, 10vh, 120px) 24px"');
  fs.writeFileSync(f, content);
});

