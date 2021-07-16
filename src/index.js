const fs = require("fs");
const Papa = require("papaparse");
const { unflatten } = require("flat");
const flatten = require("flat");
const stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0

if (process.argv[2] === "to-json") {
    console.log(
        JSON.stringify(
            unflatten(
                Object.fromEntries(
                    Papa.parse(stdinBuffer.toString(), {skipEmptyLines: true, greedy: false}).data
                )
            ), null, 2)
    );
} else if (process.argv[2] === "to-csv") {
    console.log(
      Papa.unparse(Object.entries(flatten(JSON.parse(stdinBuffer.toString()))))
    );
}
