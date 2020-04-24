//animation 3 and 5 code - item and tilt

$(window).scroll(function(){
	//-- for item animation
	var item = $('.nickStyle.item');
	$(item).each(function(index, theElement){

		var bounding = theElement.getBoundingClientRect().y;
		var height = window.innerHeight;
		if(bounding < height * 0.60){ //poradi na ovim brojkama eventualno da samo jednom se funkcija pozove
				$(theElement)
				.css('marginTop','0px')
				.css('opacity', '100%')
				.css('transition','1s all')
			}
		})

	// -- for tilt animation
	var tilt = $('.nickStyle.addTilt');
	$(tilt).each(function(index, theElement){

		var bounding = theElement.getBoundingClientRect().y;
		var height = window.innerHeight;
		if(bounding < height * 0.60){
				$(theElement).addClass('tilt')
			}
		})

	
})

