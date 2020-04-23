
/*https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/*/

// animation 3 js
$(window).scroll(function(){
	var item = $('.nickStyle.item');
	$(item).each(function(index, theSection){

		var bounding = theSection.getBoundingClientRect().y; //distance of top of section from top of page
		var height = window.innerHeight;
		if(bounding < height * 0.60 || bounding < height * 0.90){
				$(theSection).attr('id','show');
			}
		})
})

//adding tilt effect when element is in screen. To use, add classes ='nickStyle addTilt.
//    when element reaches half the window height, it will have a cool animation
$(window).scroll(function(){
	var item = $('.nickStyle.addTilt');
	$(item).each(function(index, theElement){

		var bounding = theElement.getBoundingClientRect().y; //distance of top of section from top of page
		var height = window.innerHeight;
		if(bounding < height * 0.60 || bounding < height * 0.50){
				$(theElement).addClass('tilt')
			}
		})
})