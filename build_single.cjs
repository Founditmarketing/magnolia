const fs = require("fs");
const css = fs.readFileSync("src/index.css", "utf8");
const utils = fs.readFileSync("src/utils.jsx", "utf8");
const shared = fs.readFileSync("src/components/Shared.jsx", "utf8");
const layout = fs.readFileSync("src/components/Layout.jsx", "utf8");
const pagesAdd = fs.readFileSync("src/pages/AdditionalPages.jsx", "utf8");
const pagesIdx = fs.readFileSync("src/pages/index.jsx", "utf8");
const app = fs.readFileSync("src/App.jsx", "utf8");

// Combine everything
let out = "import React, { useState, useEffect, useRef } from \"react\";\n\n";

out += `const styles = \`${css.replace(/`/g, "\\`")}\`;\n\n`;

// Clean up imports/exports from files
function clean(str) {
  return str.replace(/import\s+.*?;?\n/g, "")
            .replace(/export\s+function/g, "function")
            .replace(/export\s+const/g, "const");
}

out += clean(utils) + "\n\n";
out += clean(shared) + "\n\n";
out += clean(layout) + "\n\n";
out += clean(pagesAdd) + "\n\n";
out += clean(pagesIdx) + "\n\n";
out += app.replace(/import\s+.*?;?\n/g, "").replace(/export\s+default\s+function\s+App/, "export default function App") + "\n\n";

// Add the style injector to App
out = out.replace("return (\n    <>", "return (\n    <>\n      <style>{styles}</style>");

fs.writeFileSync("C:/Users/trevo/OneDrive/Desktop/AI Websites/magnolia-state-v2.jsx", out);
console.log("Built successfully!");
