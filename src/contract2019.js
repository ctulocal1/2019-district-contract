init();
function init () {
	var main=document.getElementsByTagName("main")[0];
	data.forEach ( function (thisArt) {
		const article=appendArticle(thisArt);
		main.appendChild(article)} )
}
function appendArticle (thisArt) {
	const article=document.createElement("article");
	const heading=document.createElement("h2");
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
	content.innerHTML=thisArt.content;
	content.setAttribute("class","content");
	article.appendChild(heading);
	article.appendChild(content);
	return article;
}

