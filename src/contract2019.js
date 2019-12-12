render("B");
function render(articleNum) {
  const articles=contract.filter(article => article.num.startsWith(articleNum));
  const main=document.getElementsByTagName("main").item(0);
  if ( articleNum.includes("-") ) { console.log("subarticle");
    articles.forEach( (article) => {
      const result=renderSubArticle(article);
      main.appendChild(result);
    });
  } else if (articles.length>0) {
      const article=articles.shift();
      const result=renderArticle(article);
      main.appendChild(result);
    const table=renderTable(articles);
      main.appendChild(table);
  }
}
function renderArticle (thisArt) {
	const article=document.createElement("article");
	const heading=document.createElement("h1");
        const lowType=thisArt.type.toLowerCase();
	article.id=lowType.concat(thisArt.num);
        const type=document.createElement("span");
        type.setAttribute("class", "type");
        type.innerText=thisArt.type;
	const num=document.createElement("span");
	num.setAttribute("class","number");
	num.innerText=thisArt.num;
	const title=document.createElement("span");
	title.setAttribute("class","title");
	title.innerHTML=thisArt.title;
	heading.appendChild(type);
        heading.innerHTML+=" "
	heading.appendChild(num);
        heading.innerHTML+="<br>"
	heading.appendChild(title);
  const content=document.createElement("section");
  if (thisArt.content) {
    content.innerHTML=thisArt.content;
  } else { content.innerHTML=''; }
	content.setAttribute("class","content");
	article.appendChild(heading);
	article.appendChild(content);
	return article;
}

function renderSubArticle (thisArt) {
	const article=document.createElement("article");
  let headingLevel="h1";
  if (thisArt.num.includes(".") ) {headingLevel="h2"};
  if (thisArt.num.includes("(") ) {headingLevel="h3"};
	const heading=document.createElement(headingLevel);
        const lowType=thisArt.type.toLowerCase();
	article.id=lowType.concat(thisArt.num);
        const type=document.createElement("span");
        type.setAttribute("class", "type");
        type.innerText=thisArt.type;
	const num=document.createElement("span");
	num.setAttribute("class","number");
	num.innerText=thisArt.num;
	const title=document.createElement("span");
	title.setAttribute("class","title");
	title.innerHTML=thisArt.title;
	heading.appendChild(type);
        heading.innerHTML+=" "
	heading.appendChild(num);
        heading.innerHTML+=". "
	heading.appendChild(title);
  const content=document.createElement("section");
  if (thisArt.content) {
    content.innerHTML=thisArt.content;
  } else { content.innerHTML=''; }
	content.setAttribute("class","content");
	article.appendChild(heading);
	article.appendChild(content);
	return article;
}

function renderTable (articles) {
  const table=document.createElement("p")
  table.innerText="This would be a table."
	return table;
}

