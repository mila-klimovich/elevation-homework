
$("body").append("<div class='box'></div>");
$("body").append("<div class='box'></div>");

$(".box").hover(function() {
    $(this).removeClass("hover");
}, function() {
    $(this).addClass("hover");
})