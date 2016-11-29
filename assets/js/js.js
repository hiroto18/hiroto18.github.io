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
		$("#mainarrow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#mainarrowshadow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#mainarrowshadow").attr("display", "block");
	})
	
	// Arrow scroll
	
	$("#mainarrow").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#summary").offset().top}, 1500);});
	$("#summaryarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#intro").offset().top}, 1000);});
	$("#summaryarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyoverview").offset().top}, 1500);});
	
	// Summary page
	
		//Logos moves in
		$("#mainarrow").click(function(){
			$("#clintonlogo").delay(500).attr("left", "200px")});
			$("#trumplogo").delay(500).attr("right", "-350px");
	
	
});