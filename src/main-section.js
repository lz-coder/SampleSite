const figures = document.getElementsByClassName("card");

function animateFigure(dir, fig) {
    fig.animate([
        {transform: "scale(1)"},
        {transform: "scale(1.1)"}
    ],
    {
        duration: 150,
        direction: dir
    });
    const card_desc = fig.querySelector(".card-desc");
    const card_desc_height = card_desc.clientHeight + "px";

    function animateDesc() {
        card_desc.animate([
            {transform: `translateY(-${card_desc_height})`},
            {transform: "translateY(0)"}
        ],
        {
            duration: 150,
            direction: dir
        });
    }

    if (dir == "normal") {
        fig.style.transform = "scale(1.1)";
        fig.style.zIndex = "1";
        fig.style.boxShadow = "0 0 8px #000";
        setTimeout(function() {
            animateDesc();
            card_desc.style.visibility = "visible";
        }, 100)
    } else {
        fig.style.transform = "scale(1)";
        fig.style.zIndex = "0";
        animateDesc();
        setTimeout(function() {card_desc.style.visibility = "hidden";}, 150);
    }
}


for (let i = 0; i < figures.length; i++) {
    figures[i].addEventListener('mouseenter', function () {
        animateFigure("normal", this);
    });
    figures[i].addEventListener('mouseleave', function () {
        animateFigure("reverse", this);
    });
}
