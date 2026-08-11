const ts = require("typescript");
const fs = require("fs");
const path = "src/components/ServiceSchema.tsx";
const src = fs.readFileSync(path, "utf8");
const compiled = ts.transpileModule(src, { compilerOptions: { module: "commonjs", target: "es2020" } }).outputText;
// Strip "export " prefix from declarations (avoid touching regex / strings)
const wrapped = compiled.replace(/^export\s+(const|function)\s+/gm, "");
const m = { exports: {} };
new Function("module", "exports", "require", wrapped)(m, m.exports, require);
try {
  const json = JSON.stringify(m.exports.servicesSchema);
  JSON.parse(json);
  console.log("servicesSchema: VALID JSON, length:", json.length);
} catch(e) {
  console.log("servicesSchema ERROR:", e.message);
}
try {
  const fjson = JSON.stringify(m.exports.faqSchema);
  JSON.parse(fjson);
  console.log("faqSchema: VALID JSON");
} catch(e) {
  console.log("faqSchema ERROR:", e.message);
}
