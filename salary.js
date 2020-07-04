let currentData=salaryData;
formList(currentData);

function formList (data) {
  let picklist=getSelect(data);
  let formData=appendForm(picklist);
}

function getSelect (data) {
  let hasArray=false;
  const options=[];
  let label="";
  data.forEach( selection => {
    for (let [key, value] of Object.entries(selection)) {
      if (Array.isArray(value)) {hasArray=true;}
      else {
        label=key;
        options.push(value);
      }
    }
  });
  const result={
    "label":label, 
    "options":options, 
    "hasArray":hasArray };
  return result;
}

function appendForm (picklist) {
  const label=document.createElement('label');
  label.for=picklist.label;
  label.innerText=picklist.label;
  const select=document.createElement("select");
  select.id=picklist.label;
  picklist.options.forEach( choice => {
    const option=document.createElement("option");
    option.value=choice;
    option.innerText=choice;
    select.appendChild(option);
  });
  const submit=document.createElement("button");
  submit.innerText="Send";
  submit.type="submit";
  const form=document.createElement("form");
  form.name="selector";
  form.appendChild(label);
  form.appendChild(select);
  form.appendChild(submit);
  form.addEventListener("submit",selectSubset);
  document.getElementsByTagName("main")[0].appendChild(form);
}

function selectSubset (event) {
  console.log(currentData);
  // let select=document.getElementById(selection);
  let field=event.target.elements[0].id;
  let val=event.target.elements[0].value;
  if ( Array.isArray(currentData) ) {
    currentData.forEach( datum => {
      for (let [key, value] of Object.entries(datum)) {
        if (value == val) {
          let arrayFound=false;
          for (let [key, value] of Object.entries(datum)) {
            if (Array.isArray(value) ) {currentData=value; arrayFound=true;}
          }
          if (arrayFound==false) {currentData=value}
        } 
      }
    });
  } else {console.log(currentData)};
  console.log(currentData);
  event.preventDefault();
  let selected=currentData;
  formList(currentData);
  return selected;
}
