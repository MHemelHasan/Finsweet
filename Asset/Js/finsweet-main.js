(function ($) {
    // Pre Loader
    window.onload = function () {
        setTimeout(function () {
            document.getElementById("fadein").remove();
        }, 1000);
    };

    $(window).on("load", function () {
        $("#loader-wrapper").fadeOut(700);
    });

    //GWD Noties
    $("#i-accept").on("click", function () {
        if (localStorage.hidecookiebar !== "1") {
            $("#cookie-notice").hide();
            localStorage.hidecookiebar = "1";
        }
    });
    if (localStorage.hidecookiebar == "1") {
        $("#cookie-notice").hide();
    }
})(jQuery);