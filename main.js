window.addEventListener("load", () => {
    var mouseEvent = "empty";
    

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    color = "black";
    line_width = 1;
    radius = 10;

    canvas.addEventListener("mousedown", my_mouse_down);
    function my_mouse_down(e) {
        color = document.getElementById("color").value;
        line_width = document.getElementById("width").value;
        radius = document.getElementById("radius").value;
        if (radius == "") {
            radius = 10;
        }

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mouse_move);
    function my_mouse_move(e) {
        currentPosX = e.clientX - canvas.offsetLeft;
        currentPosY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = line_width;
           
            
            console.log("Current position of x and y:");
            console.log("x- " + currentPosX + " y- " + currentPosY);
            ctx.arc(currentPosX , currentPosY , radius , 0 , 2*Math.PI);
            ctx.stroke();
        }

        

    }

    canvas.addEventListener("mouseleave", my_mouse_leave);
    function my_mouse_leave(e) {
        mouseEvent = "mouseLeave";
    }

    canvas.addEventListener("mouseup", my_mouse_leave);
    function my_mouse_up(e) {
        mouseEvent = "mouseUp";
    }

    function clear() {
        canvas.clearRect(0, 0, canvas.width, canvas.height);
    }
});



