function load2D_bg() {
    var background = document.getElementById("background");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);


                background.style.backgroundPositionX = xValue * 1 - 200 + "px ";
                background.style.backgroundPositionY = (-yValue * 0.75 - 50) + "px";
            })
        }, false);

}

function load2D_bg2() {
    var background = document.getElementById("background2");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);

                background.style.backgroundPositionX = xValue * 1 - 200 + "px ";
                background.style.backgroundPositionY = (-yValue * 0.75 - 50) + "px";
            })
        }, false);

}

function load2D_bg2_2() {
    var background = document.getElementById("background2");
    document.onmousemove = function () {
        console.log(window.outerHeight);
        background.style.opacity = 1 - (getMousePos() / window.outerHeight * 1.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}

function load2D_lihui() {
    var background = document.getElementById("lihui-0");
    var range = 50;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var xValue = calcValue(x, window.innerWidth);

                background.style.left = xValue * 0.7 - 100 + "px";

            })
        }, false);

}

var background = document.getElementById("lihui-1");
var range = 50;
var calcValue = function calcValue(a, b) {
    return (a / b * range - range / 2).toFixed(1);
};
var timeout = void 0;
document.addEventListener('mousemove',
    function (_ref) {
        var x = _ref.x,
            y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function () {
            var xValue = calcValue(x, window.innerWidth);

            background.style.right = xValue * 0.7 - 100 + "px";

        })
    }, false);


