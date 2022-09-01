document.addEventListener("DOMContentLoaded", function(e) {
    var container = document.querySelector(".container");
    var mask = document.querySelector(".mask");
    var detail = document.querySelector(".detail");
    var img = document.querySelector(".detail img");
    container.addEventListener("mouseover", function(e) {
        this.style.cursor = "move";
        mask.style.display = "block";
        detail.style.display = "block";
    })
    container.addEventListener("mouseout", function(e) {
    container.style.cursor = "";
    mask.style.display = "none";
    detail.style.display = "none";
        })
    container.addEventListener("mousemove", function(e) {
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;
        maskx = x-mask.offsetHeight/2;
        masky = y-mask.offsetHeight/2;
        if (maskx <= 0) {
            maskx = 0;
        } else if (maskx >= 200) {
            maskx = 200;
        }
        if (masky <= 0) {
            masky = 0;
        } else if (masky >= 100) {
            masky = 100;
        }
        mask.style.left = maskx+ "px";
        mask.style.top = masky+ "px";
        img.style.left = -maskx*221/300 + "px";
        img.style.top = -masky*45/300 + "px";
    })

})
