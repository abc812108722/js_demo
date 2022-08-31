document.addEventListener("DOMContentLoaded", function(e) {
    var log = document.querySelector(".login");
    log.addEventListener("click", function(e) {
        var login = document.querySelector(".loginbox");
        login.style.display = "block";
        login.style.filter = "blur(0.2px)";
        document.body.style.backgroundColor = "grey";
        login.addEventListener("mousedown", function(e) {
            this.style.cursor = "move";
            var x = e.pageX;
            var y = e.pageY;
            var c_x = x - this.offsetLeft;
            var c_y = y - this.offsetTop;
            console.log(c_x + " " + c_y)
            document.addEventListener("mousemove", move);
            function move(ev) {
                login.style.left = ev.pageX - c_x + "px";
                login.style.top = ev.pageY - c_y + "px";
            }

            document.addEventListener("mouseup", function(e) {
                login.style.cursor = "";
                document.removeEventListener("mousemove",move);
        })
        })
    })
    x = document.querySelector(".close");
    x.addEventListener("click", function(e) {
        var login = document.querySelector(".loginbox");
        login.style.display = "none";
        document.body.style.backgroundColor = "";
    })
    })
