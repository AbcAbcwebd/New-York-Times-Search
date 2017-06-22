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

		$('#articlePanel').empty();

		// ADD AJAX CALL HERE
		/* var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "3baa8cba285e47bbb0176e1e7702df66",
		  'q': "isis",
		  'begin_date': "19950101",
		  'end_date': "20170101"
		}); */
		//console.log(url)
		var term = $('#searchTerm').val();
		var startY = $('#startYear').val();
		var endY = $('#endYear').val();

		// This should be unnecesary, but it's a work around for more complicated coding. (See above commented out part.)
		if (startY.length < 4){
			startY = 1800;
		}
		if (endY.length < 4){
			endY = 2017;
		}

		//console.log(term)
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3baa8cba285e47bbb0176e1e7702df66&q=" + term + "&begin_date=" + startY + "0101&end_date=" + endY + "1231";
		//var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3baa8cba285e47bbb0176e1e7702df66&q=" + term + "&begin_date=19950101&end_date=20170101"

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(response) {

			// This for loop then generates the correct number of article thumbnails
			for (var i = 0; i < resultsRequested; i++){

				var articleTitle = response.response.docs[i].headline.main; 
				// Not all NY Times articles include a by line. This if statement helps avoid an error.
				if (response.response.docs[i].byline != null){
			    	var articleAuthor = response.response.docs[i].byline.original;
			    };
			    var articleSection = response.response.docs[i].section_name;
			    var articleTimePublished = response.response.docs[i].pub_date;
			    var articleLink = response.response.docs[i].source;

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

				// ADD CODE HERE TO APPEND articleThumbnail TO CHRIS'S HOLDER DIV
				$('#articlePanel').append(articleThumbnail);

				
			};
		}).fail(function(err) {
		  throw err;
		});
	});


});



