// init sequence
var articles=articles();
console.log(articles);
// Functions to create data image of the HTML for search

function articles () {
  let articles={level1:[],level2:[],level3:[],level4:[],level5:[]};
  let $article=$('article');
  $article.each (function() {
    let article=extract(this);
    if ( article.id.indexOf('sec') != -1) {
      articles.level1.push(article); }
    else if ( article.id.indexOf('-') == -1) {
      articles.level2.push(article); }
    else articles.level3.push(article);
    $(this).children('.level5').each (function() {
      let subheading=extract(this);
      subheading.parents=article.parents+' » '+article.num+' '+article.title.toUpperCase();
      articles.level4.push(subheading);
      $(this).children('.level6').each (function() {
        let subparagraph=extract(this);
        subparagraph.parents=subheading.parents+' » '+subheading.num+' '+subheading.title.toUpperCase();
        articles.level5.push(subparagraph);
      });
    });
  })
  return articles;
}

function extract (section) {
  let article={};
  article.id=section.id;
  article.parents=$(section).find(".breadcrumb").first().text().trim().toUpperCase();
  article.num=$(section).find(".artNum").first().text().trim();
  article.title=$(section).find(".artTitle").first().text().trim();
  $content=$(section).find(".content");
  if ( $content.length > 0 ) {
    article.content=$(section).find(".content").first().html().trim();
  }
  return (article);
}

