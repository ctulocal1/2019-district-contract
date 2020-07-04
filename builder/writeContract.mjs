import * as fs from 'fs';

export function writeEntryFiles (dir, name, entries) {
  for (let entry of entries) {
    let typeDir=entry.type.toLowerCase();
    let pathName=`${dir}/${typeDir}`;
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

