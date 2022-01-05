var last_position_of_x, last_position_of_y;
var mouseEvent= "empty";
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
    width_of_line = 2;
    var width= screen.width;
    new_width= screen.width-70;
    new_height= screen.height-300;

    if(width<992){
        document.getElementById("myCanvas").width= new_width;
        document.getElementById("myCanvas").height= new_height;
        document.body.style.overflow="hidden";
    }

var color= "red";
var lineWidth= 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color").value;
    lineWidth= document.getElementById("lineWidth").value;
    mouseEvent= "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouse_x= e.clientX -canvas.offsetLeft;
    mouse_y= e.clientY -canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= lineWidth;
        console.log("last position of x and y");
        console.log("X - "+ last_position_of_x+ ", Y - " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y");
        console.log("X - "+ mouse_x+ ", Y - " + mouse_y);
        ctx.lineTo(mouse_x, mouse_y);
        ctx.stroke();
    }
    last_position_of_x= mouse_x;
    last_position_of_y= mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseUP";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseLEAVE";
    
}

canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("LineWidth").value;

        last_position_of_x= e.touches[0].clientX- canvas.offsetLeft;
        last_position_of_y= e.touches[0].clientY- canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }


function clearingSpace(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}