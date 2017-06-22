// Set this variable equal to the number of results requested.
var resultsRequested;

// Click events for search number
$( document ).ready(function() {
    $( "#searchOne" ).click(function() {
  		resultsRequested = 1;
	});

	$( "#searchFive" ).click(function() {
  		resultsRequested = 5;
	});

	$( "#searchTen" ).click(function() {
  		resultsRequested = 10;
	});

	$( "#searchFifteen" ).click(function() {
  		resultsRequested = 15;
	});

	// This click event should contain the AJAX call. 
	$( "#searchBtn" ).click(function() {

		// ADD AJAX CALL HERE
		$(function(){
		    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
			url += '?' + $.param({
		   'api-key': "80570bce76134579ab6dc9b124a2a80e"
		});
		  
		$.ajax({
		      url: url,
		      method: "GET"
		}).done(function(response) {

			console.log(response)


			//Place this functionality inside search button click event. 

			// This for loop then generates the correct number of article thumbnails
			for (var i = 0; i < resultsRequested; i++){
				$('#articlePanel').append('<p>articleThumbnail</p>');

				var articleTitle = response.response.docs[i].headline.main;   
			    var articleAuthor = response.response.docs[i].byline.original;
			    /*description*/ // console.log(response.response.docs[i].snippet);

			    var articleSection = response.response.docs[i].section_name;
			    var articleTimePublished = response.response.docs[i].pub_date;
			    var articleLink = response.response.docs[i].source;

				// This part then generates the necesary HTML elements. 
				var articleThumbnail = $('div');
				var thumbnailTitle = $('h2').text(articleTitle);
				articleThumbnail.append(thumbnailTitle);
				var thumbnailAuthor = $('p').text(articleAuthor);
				articleThumbnail.append(thumbnailAuthor);
				var thumbnailSection = $('p').text(articleSection);
				articleThumbnail.append(thumbnailSection);
				var thumbnailTimePublished = $('p').text(articleTimePublished);
				articleThumbnail.append(thumbnailTimePublished);
				var thumbnailLink = $('link').text(articleLink);
				thumbnailLink.attr('href', articleLink);
				articleThumbnail.append(thumbnailLink);

				// ADD CODE HERE TO APPEND articleThumbnail TO CHRIS'S HOLDER DIV
				$('#articlePanel').append('<p>articleThumbnail</p>');

				
			};
		});
	});

});

	});