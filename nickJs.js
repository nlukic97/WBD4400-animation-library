
/*https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/*/

// animation 4 js
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