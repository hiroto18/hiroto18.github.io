$(document).ready(function(){
	
	$(window).scrollTop(0);
	
	$("#splashcontents").hide().fadeIn(1000);
	
	
	
	// Splash button events
	
	$("#splashbutton").click(function(){
		
		$("#splash").fadeOut(400, "swing");
	
	
		// Fade in and slide up	main page
		$(".profileimg").delay(300).fadeIn(100);
    	$(".info").delay(550).animate(
			{opacity: "1", top:"20%"}, {duration: "slow"}, "swing");
		$("#mainproceed").delay(700).animate(
			{opacity: "1", bottom:"15%"}, {duration: "slow"},"swing");
		$("#mainarrow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#mainarrowshadow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#mainarrowshadow").attr("display", "block");
	})
	
	
	
	// Navmenu
	
	var clicks = 0;
	
	$("#navicon").click(function() {
		
		if ($(".navmenu").attr("height") == "0px") 
			{
				$(".navmenu").css("height", "310px") ;
			} else {
				$(".navmenu").css("height", "0px");
			}
	});
	
		//Scroll
		$("#navmenuhome").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#intro").offset().top}, 1000);
			$("#navicon").delay(1250).animate(
			{left: "0%", right: "0%"}, "slow");
			$(".navmenu").css("height", "0px");});
		$("#navmenusummary").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#summary").offset().top}, 1000);
			$("#navicon").delay(1250).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#navicon").delay(1500).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#clintonlogo").delay(1750).attr("left", "200px");
			$("#trumplogo").delay(1750).attr("right", "-350px");
			$("#summaryarrowdown").delay(2000).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
			$("#summaryarrowup").delay(2000).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
			$(".navmenu").css("height", "0px");});
			
		$("#navmenupolicy").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#policytitle").offset().top}, 1000);
			$("#navicon").delay(1250).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#policyarrowup").delay(2000).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing")
		$("#policytexttitle").delay(1750).fadeIn(100);
		$("#policysub").delay(1875).fadeIn(100);
		$("#policyoverview").delay(1950).fadeIn(100);
		$(".navmenu").css("height", "0px");});
		
		$("#navmenuenvironment").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#policyenvironment").offset().top}, 1000);
			$("#navicon").delay(1250).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#environmentarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
			$("#environmentproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");
			});
			
		$("#navmenueconomy").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);
			$("#navicon").delay(1250).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#economyarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
			$("#economyarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
			$("#economyreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");
			$("#economyproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");});
			
		$("#navmenusocial").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#policysocial").offset().top}, 1000);
			$("#navicon").delay(1250).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#socialarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
			$("#socialreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");});
		
	
	
	// Arrow scroll

	$("#summaryarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#intro").offset().top}, 1000);
		$("#navicon").delay(1500).animate(
			{left: "0%", right: "0%"}, "slow");});
	$("#summaryarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policytitle").offset().top}, 1500);});
	$("#policyarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#summary").offset().top}, 1000);});
	
	
	
	// To summary page
	
	
	
		//Logos and arrows move in
		$("#mainarrow").click(function(){
			$('html, body').animate({
        	scrollTop: $("#summary").offset().top}, 1500);
			$("#navicon").delay(1500).animate(
			{left: "3%", right: "97%"}, "slow");
			$("#clintonlogo").delay(1750).attr("left", "200px");
			$("#trumplogo").delay(1750).attr("right", "-350px");
			$("#summaryarrowdown").delay(2000).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
			$("#summaryarrowup").delay(2000).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing")});
			
			
			
			
	// To policy overview page
	$("#summaryarrowdown").click(function(){
		$("#policyarrowup").delay(2000).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing")
		$("#policytexttitle").delay(1750).fadeIn(100);
		$("#policysub").delay(1875).fadeIn(100);
		$("#policyoverview").delay(1950).fadeIn(100);});
		
		
		
	// Policy page links
	
	$("#environmentclick").click(function() {
		$('html, body').animate({
        	scrollTop: $("#policyenvironment").offset().top}, 1000);
		$("#environmentarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#environmentproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");});
			
	$("#economyclick").click(function() {
		$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);
			$("#economyarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
			$("#economyarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
			$("#economyreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");
			$("#economyproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");});
			
	$("#socialclick").click(function() {
		$('html, body').animate({
        	scrollTop: $("#policysocial").offset().top}, 1000);
			$("#socialarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
			$("#socialreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");});
			
			
			
	// Policy arrows
	
	$("#environmentarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);
		$("#economyarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
		$("#economyarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#economyreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");
			$("#economyproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");});
			
	$("#economyarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyenvironment").offset().top}, 1000);
		$("#environmentarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#environmentproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");});
			
	$("#economyarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policysocial").offset().top}, 1000);
		$("#socialarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
		$("#socialreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");});
			
	$("#socialarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);
		$("#economyarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
		$("#economyarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#economyreturn").delay(1250).animate(
			{opacity: "1", top:"12%"}, {duration: "slow"},"swing");
			$("#economyproceed").delay(1250).animate(
			{opacity: "1", bottom:"12%"}, {duration: "slow"},"swing");});
		
	
	
});