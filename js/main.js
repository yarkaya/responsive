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
//     if (screen.width > 991.98) {
//     document.getElementById("nav-fixed").navbar += "sticky";
//     }
// }

// navIsFixed();

// window.onscroll = function() {
//     menuFunction();
// };

// var navbar = document.getElementById("navbarNav");
// var sticky = navbar.offsetTop;

// function menuFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }