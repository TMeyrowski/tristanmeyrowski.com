var callback = function () {
    var buttonLang = document.getElementById("tm-button-lang");
    buttonLang.addEventListener("click", () => {
        var divLang = document.getElementById("tm-button-lang_hidden");
        if (divLang.style.display === "block") {
            buttonLang.setAttribute('aria-expanded', false);
            divLang.style.display = "none";
        } else {
            buttonLang.setAttribute('aria-expanded', true);
            divLang.style.display = "block";
        }
    });

    var burgerMenu = document.getElementById("tm-navbar-burger");
    burgerMenu.addEventListener("click", () => {
        var divMenu = document.getElementById("tm-navbar-menu");
        if (divMenu.style.display === "block") {
            burgerMenu.classList.remove("tm-navbar-burger_active");
            burgerMenu.setAttribute('aria-expanded', false);
            divMenu.style.display = "none";
        } else {
            burgerMenu.classList.add("tm-navbar-burger_active");
            burgerMenu.setAttribute('aria-expanded', true);
            divMenu.style.display = "block";
        }
    });
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}