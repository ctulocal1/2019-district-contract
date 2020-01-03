const fs=require('fs');
const yaml = require('js-yaml');
const { Remarkable } = require('remarkable');
var md = new Remarkable();

export default makeJSON(YAMLfilename) {
  const YAMLdata=fs.readFileSync(YAMLfilename);
  const dataObject=convert(YAMLdata);
  return dataObject;
}

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
