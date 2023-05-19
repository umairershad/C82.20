var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "";
var width = "";
var radius = "";
var mouseEvent = "empty";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}