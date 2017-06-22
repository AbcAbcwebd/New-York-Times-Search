$(function(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "80570bce76134579ab6dc9b124a2a80e"
});
  

$.ajax({
      url: url,
      method: "GET"
    }).done(function(response) {
     

    /*title*/ console.log(response.response.docs[0].headline.main);    
    /*author*/ console.log(response.response.docs[0].byline.original);
    /*description*/  console.log(response.response.docs[0].snippet);

    /*section*/   console.log(response.response.docs[0].section_name);
    /*date*/    console.log(response.response.docs[0].pub_date);
    /*link*/ console.log(response.response.docs[0].source);
      