$(document).ready(function(){
	
	// Splash button events
	
	$("#splashbutton").hover(function() {
        $(this)
    });
	
	$("#splashbutton").click(function(){
		
		$("#splash").fadeOut(400, "swing");
	
		// Fade in and slide up	main page
		$(".profileimg").delay(200).fadeIn(100);
    	$(".hidden.info").delay(300).animate(
			{opacity: "1", top:"10%"}, {duration: "slow"}, "swing");
		$(".hidden#arrow").delay(500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
	
	})
	
	// Pulse
	
	
	
	
});