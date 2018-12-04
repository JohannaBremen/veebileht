function tabid(haaaa, nubin) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(nubin).style.display = "block";
    haaaa.currentTarget.className += " active";
}


var countDownDate = new Date("Dec 24, 2018 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " päeva " + hours + " tundi "
  + minutes + " minutit " + seconds + " sekundit ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Häid jõule!";
  }
}, 1000);

var healaps = [
    "Muidugi oled!",
    "Looda sa!",
    "Jõuluvana nägi su otsinguajalugu, mis sa ise arvad.",
     "Miski ei ole veel kindel!",
     "Võibolla tõesti...",
     "Ei loodaks selle peale.",
     "Sorri, list on juba täis, ehk järgmisel aastal.",
     "Jõuluvana teab, mida sa eile tegid.",
     ];

function randomItem() {
    var suvaline = healaps[Math.floor(Math.random()*healaps.length)];
    E_randomItem.innerHTML = suvaline;
}

document.addEventListener("DOMContentLoaded", function () {
    E_randomItem = document.getElementById("randomItem");
    randomItem();
});

