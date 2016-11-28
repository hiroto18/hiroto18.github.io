$(document).ready(function(){
	
	$("#splashcontents").hide().fadeIn(1000);
	
	// Splash button events
	
	$("#splashbutton").hover(function() {
        $(this)
    });
	
	$("#splashbutton").click(function(){
		
		$("#splash").fadeOut(400, "swing");
	
		// Fade in and slide up	main page
		$(".profileimg").delay(300).fadeIn(100);
    	$(".info").delay(550).animate(
			{opacity: "1", top:"20%"}, {duration: "slow"}, "swing");
		$("#arrow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#arrowshadow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#arrowshadow").attr("display", "block");
	})
	
	
	
	
});