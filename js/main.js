function myFunction() {
    if (screen.width < 991.97) {
        return document.getElementById("p1").innerHTML = 'Join our team and become one<br>of us';
    }
}
myFunction();


function changeTeam() {
    if (screen.width < 991.97) {
        return document.getElementById("team-collapse").style.display = "none";
    }
}

changeTeam();

function changeCollapseTeam() {
    if (screen.width > 991.98) {
        return document.getElementById("team-title-sec").style.display = "none";
    }
}

changeCollapseTeam();

function teamChange() {
    if (screen.width > 991.98) {
        return document.getElementById("team-block").style.display = "none";
    }
}

teamChange();

// function navIsFixed() {
//      if (screen.width > 991.98) {
//     document.getElementById("nav-fixed").navbar += "sticky";
//      }
//  }

//  navIsFixed();
//  window.onscroll = function() {
//      menuFunction();
//  };

//  var navbar = document.getElementById("navbarNav");
//  var sticky = navbar.offsetTop;

//  function menuFunction() {
//   if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//   } else {
//      navbar.classList.remove("sticky");
//   }
//  }



function initMap() {
    var uluru = { lat: 49.833514, lng: 24.012306 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

initMap();


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topFunction();

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
