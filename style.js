document.addEventListener("mousemove", function (e) {
    var pointer = document.getElementsByClassName("pointer");
    for (pt of pointer) {
        var x = e.offsetX;
        var y = e.offsetY;
        pt.style.left = x + 'px';
        pt.style.top = y + 'px';
    }

})