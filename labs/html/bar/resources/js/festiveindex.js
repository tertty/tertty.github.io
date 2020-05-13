var today, dd, mm, hh, mmm;

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
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth()+1; 
    hh = today.getHours();
    mmm = today.getMinutes();

    console.log("fired updatebar()");

    var calculation;

    if(mm == 12){
        calculation = (4*dd);

        $("#yes").css('width', calculation + '%');
        $("#ohyes").replaceWith('<span>' + 'Festive Percentage: ' + calculation + '%' + '</span>');
    }else{
        calculation = (8*mm);

        $("#yes").css('width', calculation + '%');
        $("#ohyes").replaceWith('<span>' + 'Festive Percentage: ' + calculation + '%' + '</span>');
    }
}

function the_return_countdown(){
    var countdown_text = document.getElementById("return_countdown");

    days_in_month = new Date(today.getFullYear(), mm, 0).getDate();

    var countdown_days = days_in_month-dd;
    var countdown_months = 11-mm;        
    var countdown_hours = 23-hh;
    var countdown_minutes = 59-mmm;
    var countdown_seconds = 59-today.getSeconds();

    countdown_text.innerText = `or ${countdown_months} months, ${countdown_days} days, ${countdown_hours} hours, ${countdown_minutes} minutes, and ${countdown_seconds} seconds...`;
    countdown_text.style.fontSize = "16px"; //I rlly just don't want to make two divs with the same exact properties minux the font size lol
}

function spotify_notify(){
    var spotify_notify_block = document.getElementById("spotify_notify_box");

    if(spotify_notify_block.hidden){
        spotify_notify_block.hidden = false;
    }else{
        spotify_notify_block.hidden = true;
    }
}

function spotify_widget(){
    var spotify_widget = document.getElementById("spotify_widget");

    if(spotify_widget.hidden){
        spotify_widget.hidden = false;
    }else{
        spotify_widget.hidden = true;
    }
}

$(window).on("load", function() {

    updatebar()

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

    //Cookie shortcut Info Bar
    var isfirsttime = readCookie("firsttimecaller");
    console.log(isfirsttime);
    if((isfirsttime != 0) && (isfirsttime != 1)){
        document.cookie = "firsttimecaller=0";
    }
    if(isfirsttime == 0){
        document.cookie = "firsttimecaller=1";
        $(".alert").show();
    }

    //Hotkeys
    $("body").css("overflow", "hidden");

    //Time specific events
    setInterval(updatebar, 1000);
    setInterval(the_return_countdown, 1000);

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

    var calculation;

    if(mm == 12){
        calculation = (4*dd)

        $("#yes").css('width', calculation + '%');
        $("#ohyes").replaceWith('<span>' + 'Festive Percentage: ' + calculation + '%' + '</span>');
    }else{
        calculation = (8*mm)

        $("#yes").css('width', calculation + '%');
        $("#ohyes").replaceWith('<span>' + 'Festive Percentage: ' + calculation + '%' + '</span>');
        
        setTimeout(function(){$("#return_message").fadeIn("slow");}, 2500);
        setTimeout(function(){$("#return_countdown").fadeIn("slow");}, 4500);
            
        snowStorm.stop();
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