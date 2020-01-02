const fs=require('fs');
const yaml = require('js-yaml');
import makeJSON from './convertyaml.js';

const args=process.argv;

// MAIN ROUTINE
// Read file with list of filenames/paths for contract yamlMDs.
const sourceFileContent=fs.readFileSync(args[2],"utf8");
const sourceFileNames=yaml.load(sourceFileContent);

// Run through filenames and for each call single-contract build.
sourceFileNames.forEach( (YAMLfilename) => {

  // SINGLE CONTRACT BUILD
  // Convert and write yamlMD to jsonHTML and save in subfolder.
  const newData=makeJSON(YAMLfileName);
  

  // Create subfolder of public based on contract name
  // Read through articles and call templating subroutine on each object
});

// TEMPLATING SUBROUTINE
// Load shell HTML.
// Add Object to main innerHTML.
// Add in feeds and generic extras (e.g. contact forms)
// Write result code to appropriate filename/directory.

fs.writeFile(JSONfilename, JSONstring, "utf8", (err)=>{
  if (err) throw err;
  console.log("YAML file '" + YAMLfilename + "' successfully converted to JSON file '" + JSONfilename + "'.");
}
);
