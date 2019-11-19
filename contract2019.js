init();
function init () {
	var main=document.getElementsByTagName("main")[0];
	data.forEach ( function (thisArt) {
		let article=appendArticle(thisArt);
		main.appendChild(article)} )
}
function appendArticle (thisArt) {
	let article=document.createElement("article");
	article.id=thisArt.num;
	let heading=document.createElement("h2");
	let numHeader=document.createElement("span");
	let regex= /\d/g
	let index=thisArt.num.search(regex);
	let number=document.createTextNode(thisArt.num.slice(index).concat(". "));
	numHeader.setAttribute("class","number");
	numHeader.appendChild(number);
	let titleHeader=document.createElement("span");
	titleHeader.setAttribute("class","title");
	titleHeader.innerHTML=thisArt.title;
	heading.appendChild(numHeader);
	heading.appendChild(titleHeader);
	let contentSec=document.createElement("section");
	contentSec.innerHTML=thisArt.content;
	contentSec.setAttribute("class","content");
	article.appendChild(heading);
	article.appendChild(contentSec);
	return article;
}

