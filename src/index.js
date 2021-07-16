const fs = require("fs");
const csvParser = require("csv-parser");
const Papa = require("papaparse");
const { unflatten } = require("flat");
const stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
// console.log(`process.argv`, process.execArgv, process.argv0,);
if (process.argv[2] === "to-json") {
    console.log(JSON.stringify(unflatten(Object.fromEntries(Papa.parse(stdinBuffer.toString()).data)), null, 2));
}

// console.log(stdinBuffer.toString());
