width();
initialCode();

$(".Panel").on({
    click: function () {
        $(this).toggleClass("active");
        $(this).removeClass("selected");
    },
click: function () {
        $(this).toggleClass("active");
        $(this).removeClass("selected");
    },

    mouseover: function () {
        $(this).addClass("selected");
    },

    mouseleave: function () {
        $(this).removeClass("selected");
    },

});


$(".htmlPanel").on("click", function () {
    $(".htmlContainer").toggleClass("none");
    width();
});

$(".cssPanel").on("click", function () {
    $(".cssContainer").toggleClass("none");
    width();
});

$(".javascriptPanel").on("click", function () {
    $(".javascriptContainer").toggleClass("none");
    width();
});

$(".outputPanel").on("click", function () {
    $(".outputContainer").toggleClass("none");
    width();
});


$('.htmlData').on("keyup change paste", function () {
    initialCode();
});

$('.cssData').on("keyup change paste", function () {
    initialCode();
});

$('.javascriptData').on("keyup change paste", function () {
    initialCode();
});

function width() {
    var numItems = $('.none').length;
    // console.log(numItems);

    $(".height").css("height", ($(window).height() - 104) + 'px');
    $(".width").css("width", (($(window).width() / (4 - numItems) - 2) + 'px'));
}

function initialCode() {
    $('iframe').contents().find("html").html("<html><head><style type='text/css'>" + $(".cssData").val() + "</style></head><body>" + $(".htmlData").val() + "</body></html>");
    document.getElementById("outputData").contentWindow.eval($(".javascriptData").val());

}
