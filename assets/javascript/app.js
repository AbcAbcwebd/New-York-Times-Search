// Set this variable equal to the number of results requested.
var resultsRequested = 1;



// Click events for search number
$( document ).ready( function() {
		$( "#searchOne" ).on("click", function()  {
				resultsRequested = 1;
				$("#searchNumTop").html( "1" );
			} );

		$( "#searchFive" ).on("click", function()  {
				resultsRequested = 5;
				$( "#searchNumTop" ).html( "5" );
			} );

		$( "#searchTen" ).on("click", function()  {
				resultsRequested = 10;
				$( "#searchNumTop" ).html( "10" );
			} );

		$( "#searchFifteen" ).on("click", function() {
				resultsRequested = 15;
				$( "#searchNumTop" )
					.html( "15" );
			} );
	

	// This click event should contain the AJAX call. 
	$( "#searchBtn" ).click(function() {

		// ADD AJAX CALL HERE
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "3baa8cba285e47bbb0176e1e7702df66",
		  'q': "isis",
		  'begin_date': "19950101",
		  'end_date': "20170101"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(response) {

			console.log(response)


			console.log(resultsRequested)

			// This for loop then generates the correct number of article thumbnails
			for (var i = 0; i < resultsRequested; i++){
				console.log(response)
				console.log("Iteration: " + i)

				var articleTitle = response.response.docs[i].headline.main; 
				console.log(articleTitle)
				if (response.response.docs[i].byline != null){
			    	var articleAuthor = response.response.docs[i].byline.original;
			    };
			    var articleSection = response.response.docs[i].section_name;
			    console.log("Article section: " + articleSection)
			    var articleTimePublished = response.response.docs[i].pub_date;
			    var articleLink = response.response.docs[i].source;
			    console.log("Article link: " + articleLink)

				// This part then generates the necesary HTML elements. 
				var articleThumbnail = $('<div>');
				var thumbnailTitle = $('<h2>').text(articleTitle);
				articleThumbnail.append(thumbnailTitle);
				var thumbnailAuthor = $('<p>').text(articleAuthor);
				articleThumbnail.append(thumbnailAuthor);
				var thumbnailSection = $('<p>').text(articleSection);
				articleThumbnail.append(thumbnailSection);
				var thumbnailTimePublished = $('<p>').text(articleTimePublished);
				articleThumbnail.append(thumbnailTimePublished);
				var thumbnailLink = $('<link>').text(articleLink);
			//	thumbnailLink.attr('href', articleLink);
				articleThumbnail.append(thumbnailLink);
				console.log(articleThumbnail)

				// ADD CODE HERE TO APPEND articleThumbnail TO CHRIS'S HOLDER DIV
				$('#articlePanel').append(articleThumbnail);

				
			};
		}).fail(function(err) {
		  throw err;
		});
	});


});



