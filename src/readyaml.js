const fs=require('fs');
const yaml = require('js-yaml');
const { Remarkable } = require('remarkable');
var md = new Remarkable();

const args=process.argv;
const YAMLfilename = args[2];
const fileNameParts=YAMLfilename.split('.');
const filename=fileNameParts[0];
const JSONfilename=filename.concat('.json');
const YAMLdata=fs.readFileSync(YAMLfilename);
const dataObject=convert(YAMLdata);
const JSONstring=JSON.stringify(dataObject);
fs.writeFile(JSONfilename, JSONstring, "utf8", (err)=>{
  if (err) throw err;
  console.log("YAML file '" + YAMLfilename + "' successfully converted to JSON file '" + JSONfilename + "'.");
}
);

function convert (yamlString) {
  let data=yaml.load(yamlString);
  data=unmark(data);
  return data;
}

function unmark(clauses) {
  clauses.forEach( (clause) => {
    clause.content=md.render(clause.content);
  });
  return clauses;
}
