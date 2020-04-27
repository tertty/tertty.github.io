// CREATIVE COMMONS LICENSE

// God Rest Ye Merry Gentlemen
// Exzel Music Publishing (freemusicpublicdomain.com)
// Licensed under Creative Commons: By Attribution 3.0
// http://creativecommons.org/licenses/by/3.0/

var audioName = 'resources/music/godrest.mp3'; 

$(document).ready(function(){
	myAudio = new Audio(audioName);
	myAudio.play();
	
	$("#introtext").hide();
	$("#outrotext").hide();
	$("#promotionaltexts").hide();
	setTimeout(
		function() 
		{
			$("#introtext").fadeIn("slow");
		}, 3000);
	$("#introtext").fadeOut("slow");
	setTimeout(
		function() 
		{
			$("#outrotext").fadeIn("slow");
		}, 6000);
	setTimeout(
		function() 
		{
			$("#promotionaltexts").fadeIn("slow");
		}, 55000);
	setTimeout(
		function() 
		{
			location.href = ("FestiveIndex.html");
		}, 138000);

});