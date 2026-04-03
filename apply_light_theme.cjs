
const fs = require('fs');
const files = ['src/pages/index.jsx', 'src/pages/AdditionalPages.jsx', 'src/components/Shared.jsx', 'src/components/Layout.jsx'];
files.forEach(f => {
  if (f.includes('pages')) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/color: "#fff"/g, 'color: "var(--text-primary)"');
    content = content.replace(/rgba\(255,255,255,/g, 'rgba(0,0,0,');
    content = content.replace(/background: "rgba\(0,0,0,0.3\)"/g, 'background: "#ffffff"'); // Fix Contact page inputs
    fs.writeFileSync(f, content);
  }
});

