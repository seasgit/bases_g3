const cube = document.querySelector('.cube');
let ry = 0;
let rx = 0;

cube.addEventListener('click', (e) => {


    if (e.offsetX > e.target.offsetWidth - 100) {
        ry -= 90;
        cube.style.transform = "rotatey(" + ry + "deg) rotatex(0deg)";
    } else if (e.offsetX < 100) {
        ry += 90;
        cube.style.transform = "rotatey(" + ry + "deg) rotatex(0deg)";
    } else if (e.offsetY < 100 && (e.offsetX > 150 && e.offsetX < e.target.offsetWidth - 100)) {
        if (rx >= 0) rx -= 90;
        cube.style.transform = "rotatex(" + rx + "deg)";
    } else if (e.offsetY > e.target.offsetHeight - 100 && (e.offsetX > 150 && e.offsetX < e.target.offsetHeight - 100)) {
        if (rx <= 0) rx += 90
        cube.style.transform = "rotatex(" + rx + "deg)";
    }

    console.log(ry, rx)

})