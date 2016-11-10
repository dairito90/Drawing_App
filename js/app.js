//When clicking on a color

var color = $(".selected").css("background-color");


$(".controls li").click(function() {

    $(this).siblings().removeClass("selected");

    $(this).addClass("selected");



    color = $(this).css("background-color");


});


$("#revealColorSelect").click(function() {
    changeColor();
    $("#colorSelect").toggle();

});




function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newcolor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}


$("input[type=range]").change(changeColor);
//Remove white ring from other colors
//Make selected color have the white ring
//Set selected color to current color

//When "New Color" button is pressed
//hide/unhide the color select div

//When color sliders changes
//update the new color box

//When "Add Color" button is pressed
//append the new color to the controls ul
//select the new color

//on mouse events on the canvas
//draw lines
