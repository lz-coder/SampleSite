const search_field = document.querySelector("#id_search_field");

function animateSearch(dir) {
    search_field.animate([
        {transform: "scale(1)"},
        {transform: "scale(1.2)"}
    ],
    {
        duration: 200,
        direction: dir
    });
}

search_field.addEventListener('focusin', function () {
    animateSearch("normal");
    this.style.transform = "scale(1.2)";
});
search_field.addEventListener('focusout', function () {
    animateSearch("reverse");
    this.style.transform = "scale(1)";
});
