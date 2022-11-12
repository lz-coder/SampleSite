const nav_button = document.querySelector("#id_nav_button");
const nav_screen = document.querySelector("#id_nav_screen");
const navbar = document.querySelector("#id_navbar");
const close_nav_button = document.querySelector("#id_close_nav_button");

function animateNav(dir) {
    navbar.animate([
        {transform: "translateX(0)"},
        {transform: "translateX(200px)"}
    ],
    {
        duration: 200,
        direction: dir
    });
}

function showNav(show) {
    if (show == true) {
        animateNav("reverse");
        nav_screen.style.display = "block";
    } else {
        animateNav("normal");
        setTimeout(function () {nav_screen.style.display = "none"}, 200);
    }
}

function animateButton(button, dir) {
     button.animate([
        {transform: "scale(1)"},
        {transform: "scale(1.2)"}
    ],
    {
        duration: 100,
        direction: dir
    });
    if (dir == "normal") {
        button.style.transform = "scale(1.2)";
    } else {
        button.style.transform = "scale(1)";
    }   
}

nav_button.addEventListener('mouseover', function () {
    animateButton(this, "normal");
});
nav_button.addEventListener('mouseout', function () {
    animateButton(this, "reverse");
});
close_nav_button.addEventListener('mouseover', function () {
    animateButton(this, "normal");
});
close_nav_button.addEventListener('mouseout', function () {
    animateButton(this, "reverse");
});

close_nav_button.addEventListener('click', function () {
    showNav(false);
});
nav_button.addEventListener('click', function () {
    showNav(true);
});
/*
nav_screen.addEventListener('click', function () {
    showNav(false);
});
*/