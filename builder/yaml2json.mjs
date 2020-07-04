import * as fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

// Takes YAMLfilename as an argument
export function readYAML (YAMLfilename) {
  const YAMLdata=fs.readFileSync(YAMLfilename);
  const dataObject=yaml.load(YAMLdata);
  return dataObject;
}
export function contractName (YAMLfilename) {
  const YAMLfileNameParts=YAMLfilename.split('.');
  YAMLfileNameParts.pop();
  const pathName=YAMLfileNameParts.pop();
  const rootName=pathName.split('/').pop();
  return rootName;
}
export function jsonWrite (contractDir, contract, data) {
  let jsonString=JSON.stringify(data);
  let jsonName = contractDir+"/"+contract+".json";
  fs.writeFileSync(jsonName, jsonString);
}
export function writeEntryFiles (contractDir, entries) {
  console.log('called');
  for (let entry of entries) {
    let typeDir=entry.type.toLowerCase();
    let pathName=`${contractDir}/${typeDir}`;
    fs.mkdirSync(pathName, {recursive:true});
    let fileName=`${pathName}/${entry.id.toString()}`;
    let title='Untitled';
    if (entry.heading) title=entry.heading;
    console.log (fileName, title);
    let content="No Content";
    if (entry.content) content=entry.content;
  /*  fs.writeFileSync(fileName, title); */
    fs.writeFileSync(fileName, content, (err) => {
      if (err) {console.log(err); throw(err);};
      console.log (fileName, "saved");
    });
  }
}
