# Translations converter

This is a utility to convert translations CSV to JSON and back. CSV is used by our translators.

## Params
`to-json`

## Example usage

### To convert CSV to JSON 
```bash
npm i
node src/index.js to-json < example-source-files/sample-translations_es-LA.csv > example-source-files/sample-translations_es-LA.csv.json
```

### To convert JSON to CSV 
```bash
npm i
node src/index.js to-csv < example-source-files/sample-translations_es-LA.csv.json > example-source-files/sample-translations_es-LA.csv
```

### Note

To avoid line break in last JSON field value end, delete trailing line in CVS before parsing.
