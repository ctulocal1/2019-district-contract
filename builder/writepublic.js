import * as fs from 'fs';
import {
  jsonWrite, 
  contractName, 
  readYAML
} from './yaml2json.mjs';
import {
  md2html,
  searchableContract,
  contractPages,
  contractTOC
} from 'convertContractData.mjs'
import {writeEntryFiles} from './writeContract.mjs' 

const args=process.argv;
const YAMLfilepath = args[2];
const targetDir = args[3];
let contract = contractName (YAMLfilepath);
let contractDir = targetDir+"/"+contract;
fs.mkdirSync( contractDir,{ recursive: true });
let data = readYAML (YAMLfilepath);
jsonWrite (contractDir, contract, data);
writeEntryFiles (contractDir, contract, data);
// console.log(dataObject);
