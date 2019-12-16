// init sequence
var articles=articles();
console.log(articles);
// Functions to create data image of the HTML for search

function articles () {
  let articles={level1:[],level2:[],level3:[],level4:[],level5:[], level6:[]};
  let $article=$('article');
  $article.each (function() {
    let article=extract(this);
    if ( article.type=="Section" ) {
      articles.level2.push(article); }
    else if ( article.type=="Home") {
      articles.level1.push(article);
    }
    else if ( article.type=="Side Letter") {
      articles.level3.push(article);
    }
    else if ( article.num.includes("-") ) {
      articles.level4.push(article);
    }
    else articles.level3.push(article);

  });
  let $level5s=$('section.level4');
    $level5s.each ( function() {
      const level5=extract(this);
      articles.level5.push(level5);
    });
  let $level6s=$('section.level5');
    $level6s.each ( function() {
      const level6=extract(this);
      articles.level6.push(level5);
    });
  return articles;
}

function extract (section) {
  let article={};
  article.id=section.id;
  article.parents=$(section).find(".breadcrumb").first().text().trim().toUpperCase();
  article.num=$(section).find(".artNum").first().text().trim();
  if (article.num.endsWith("\.")) {
    article.num=article.num.slice(0,-1);
  } 
  if ( article.id.includes("sec") ) {article.type="Section"}
  else if ( article.id.includes("art") ) {article.type="Article"}
  else if ( article.id.includes("app") ) {article.type="Appendix"}
  else if ( article.id.includes("home") ) 
    {article.type="Home"; article.num="Page"}
  else {article.type="Side Letter"};
  article.title=$(section).find(".artTitle").first().text().trim();
  $content=$(section).find(".content");
  if ( $content.length > 0 ) {
    article.content=$(section).find(".content").first().html().trim();
  }
  return (article);
}

