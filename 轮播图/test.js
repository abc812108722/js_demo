document.addEventListener("DOMContentLoaded", function(e) {
    //移动函数
    function moveAction(obj, target,callback) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
            left = obj.offsetLeft;
            if (left == target) {
                clearInterval(obj.timer);
            }
            step = (target - left) / 10;
            step= step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = left + step + "px";

        },20)
    }
    var n = 0;
    var obj = document.querySelector('.a');
    var box = document.querySelector('.box');
    var arr = document.querySelectorAll('.ar');
    var circle = document.querySelector('.circle');
    var pic = document.querySelector('.pic');
    var arrL = document.querySelector('.l');
    var arrR = document.querySelector('.r');
    var picNumber = document.querySelectorAll('.pic li').length;
    box.addEventListener('mouseover', function(e) {
        arr[0].style.display = 'block';
        arr[1].style.display = 'block';
        clearInterval(timer);
    })
    box.addEventListener('mouseout', function(e) {
        arr[0].style.display = 'none';
        arr[1].style.display = 'none';
        timer = setInterval(function() {
        arrR.click();
    }, 2000);
    })
    for (let i = 0; i < picNumber; i++) {
        var x = document.createElement('li');
        x.addEventListener('click', function(e) {
            var li = document.querySelectorAll('.circle li');
            for (let j = 0; j < li.length; j++) {
                li[j].className = '';
            }
            this.className = 'current';
            this.setAttribute('index', i);
            moveAction(pic, -(i*300));
            index = document.querySelector('.current').getAttribute('index');
            n = index;
        })
        circle.appendChild(x);

    }
    circle.children[0].className = 'current';
    // 图片循环
    var f = pic.children[0];
    pic.appendChild(f.cloneNode(true));
    arrR.addEventListener('click', function(e) {

        if (n == picNumber) {
            pic.style.left = 0 + "px";
            n = 0;
        }
        n++;
        console.log(n,picNumber);
        var d = document.querySelectorAll('.circle li');
        for (let i = 0; i < d.length; i++) {
            d[i].className = '';
        }
        if (d[n]) {
            d[n].className = 'current';
        } else {
            d[0].className = 'current';
        }
        moveAction(pic, -(n*300));


    })

    arrL.addEventListener('click', function(e) {
        var u = document.querySelectorAll('.pic li');

        if (n ==0) {
            pic.style.left = -(u.length-1)*300 + "px";
            n = 5;
        }
        n--;
        moveAction(pic, -(n*300));
        var d = document.querySelectorAll('.circle li');
        for (let i = 0; i < d.length; i++) {
            d[i].className = '';
        }
        d[n].className = 'current';
    })
    var timer = setInterval(function() {
        arrR.click();
    }, 2000);

})
