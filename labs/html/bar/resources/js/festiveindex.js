var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var hh = today.getHours();
var mmm = today.getMinutes();
var audioName = ''; 

var songTitle = 'SONG TITLE';
var songAuthor = 'ARTIST';

//This is not mine, found it on the Internet yikes!
function readCookie(name) {
  name += '=';
  for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
      if (!ca[i].indexOf(name))
          return ca[i].replace(name, '');
}

function updatebar() {
  var reallytoday = new Date();
  var ddd = reallytoday.getDate();
  if(hh == 0){
      var reallytoday = new Date();
      var ddd = reallytoday.getDate();
      
      console.log("fired updatebar()");
      $("#yes").css('width',4 * ddd + '%');
      $("#ohyes").replaceWith('<span>' + 'Festive Percentage: ' + 4 * ddd + '%' + '</span>');
  }
}

$(window).on("load", function() {

  //HOT KEYS
  var songinfoIn = false;
  
  $(document).on("keypress", function (e) {
      switch(e.keyCode){
          case 109:
              var mutedOpp = (myAudio.muted);
              myAudio.muted = !mutedOpp;
          break;
          case 115:
              if(songinfoIn == false){
                  $("#songinfo").text(songTitle);
                  $(".progress").animate({bottom: "-=50px"});
                  $("#songinfo").fadeIn("slow");
                  songinfoIn = true;
              }else{
                  $(".progress").animate({bottom: "+=50px"});
                  $("#songinfo").fadeOut("fast");
                  songinfoIn = false;
              }
          break;
          case 99:
              
          break;
          case 96:
              alert("~SECRET DEV INFORMATION~\n\nNice going kid\nVersion: 1.6\nShortcut Keys Used: c(67) s(115) m(109)\nCookie Values: " + document.cookie);
          break;
      }
  });
  
  //Shortcut Info Bar
  var isfirsttime = readCookie("firsttimecaller");
  console.log(isfirsttime);
  if((isfirsttime != 0) && (isfirsttime != 1)){
      document.cookie = "firsttimecaller=0";
  }
  if(isfirsttime == 0){
      document.cookie = "firsttimecaller=1";
  }else{
      $(".alert").hide();
  }
  //REST OF STUFF
  var elem = document.getElementById('mutebtn');
  $(elem).hide();
  $("body").css("overflow", "hidden");
  $("#songinfo").hide();
  
  setInterval(updatebar, 60000);
  
  if((dd == 24) && (mm == 12) && (hh > 18)){
      myAudio = new Audio('resources/music/twasthenight.mp3');
      myAudio.play();
  }else{
      if((dd == 25) && (mm == 12)){
          var ibeenherebefore = readCookie("beenherebefore");
          if(((ibeenherebefore) == 1) || (ibeenherebefore) == 2){
              document.cookie ="beenherebefore=2"
          }else{
              document.cookie = "beenherebefore=1"
              location.href = ("ChristmasFestiveIndex.html");
          }
      }else{
      }
  }
  
  if(mm == 12){
      $("#yes").css('width',4 * dd + '%');
      $("#youdoofeduptext").hide();
      $("#ohyes").replaceWith('<span>' + 'Festive Percentage: ' + 4 * dd + '%' + '</span>');
  }else{
      $("#yes").css('width',100 + '%');
      $("#youdoofeduptext").hide();
      
      setTimeout(
          function() 
          {
          $("#youdoofeduptext").fadeIn("slow");
          }, 2500);
          
      snowStorm.stop();
      
      var difference = (12 - mm);
      var monthsText;
      if(difference == 1){
          monthsText = ' month!';
      }else{
          monthsText = ' months!';
      }
      
      $("#ohyes").replaceWith('<span>' + 'It&#39s not December you doof! Come back in ' + difference + monthsText + '</span>');
  }
  
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) {
      } else {
          $(elem).show();
      }
  }

});

  function muteBtn(){
      //audioRand();
  }