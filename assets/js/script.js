var callback = function () {
    var button = document.getElementById("tm-button-lang");
    button.addEventListener("click", () => {
        var div = document.getElementById("tm-button-lang_hidden");
        if (div.style.display === "block") {
            button.setAttribute('aria-expanded', false);
            div.style.display = "none";
        } else {
            button.setAttribute('aria-expanded', true);
            div.style.display = "block";
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