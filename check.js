const fs = require("fs");

const bundle = fs.readFileSync("./dist/main.js", "utf8");
const message = bundle.includes("Batching was applied")
    ? "Bundle contains the observerBatching module"
    : "Bundle doesn't contain the observerBatching module";

console.log("-".repeat(message.length));
console.log(message)
console.log("-".repeat(message.length));
