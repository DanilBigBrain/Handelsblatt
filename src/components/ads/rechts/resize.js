$(window).resize(function() {
    resize();
});

$(document).ready(function() {
    resize();
});

function resize() {
    fillDiv($("#ad"), true);
}

function fillDiv(div, proportional, gradient) {
    var currentWidth = div.outerWidth();
    var currentHeight = div.outerHeight();

    var availableHeight = window.innerHeight;
    var availableWidth = window.innerWidth;

    var scaleX = availableWidth / currentWidth;
    var scaleY = availableHeight / currentHeight;

    if (proportional) {
        scaleX = Math.min(scaleX, scaleY);
        scaleX = Math.min(scaleX, 2);
        scaleY = scaleX;
    }

    var translationX = 0;
    var translationY = 0;
    if (scaleX > .5) {
        div.css({
            "right": "0px",
            "top": "0px",
            "min-width": "300px",
            "min-height": "600px",
            "max-width": "600px",
            "max-height": "1200px",
            "transform": "translate(" + translationX + "px, " +
                translationY + "px) scale(" +
                scaleX + ", " + scaleY + ")",
            "transform-origin": "100% 0%"
        });
    }
}