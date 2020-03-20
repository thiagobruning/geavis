window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace("w3-card-2 w3-animate-top w3-white", "");
    }
}
