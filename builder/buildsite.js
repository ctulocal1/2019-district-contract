const fs=require('fs');
const yaml = require('js-yaml');
const convertYAML = require('./convertyaml.js');

const args=process.argv;

// MAIN ROUTINE
// Read file with list of filenames/paths for contract yamlMDs.
const sourceFileContent=fs.readFileSync(args[2],"utf8");
const sourceFileNames=yaml.load(sourceFileContent);

// Run through filenames and for each call single-contract build.
sourceFileNames.forEach( (YAMLfileName) => {

  // SINGLE CONTRACT BUILD
  // Convert and write yamlMD to jsonHTML and save in subfolder.
  const newData=convertYAML.makeJSON(YAMLfileName);
  // Create subfolder of public based on contract name
  const YAMLfileNameParts=YAMLfileName.split('.');
  console.log(YAMLfileNameParts);
  const pathName=YAMLfileNameParts.shift();
  const rootName=pathName.split('/').pop();
  console.log(rootName);
  fs.mkdirSync('../public/' + rootName);
  // Make JSON file based on filename
  fs.writeFileSync(rootName.concat('.json'), newData);
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
