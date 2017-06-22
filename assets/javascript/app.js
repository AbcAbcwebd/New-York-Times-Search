//Place this functionality inside search button click event. 

	// Set this variable equal to the number of results requested.
	var resultsRequested;

	// This for loop then generates the correct number of article thumbnails
	for (var i = 0; i < resultsRequested; i++){

		// Set these variables equal to the different values found in Curtis's AJAX call. 
		var articleTitle;
		var articleAuthor;
		var articleSection;
		var articleTimePublished;
		var articleLink;

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

		
	};