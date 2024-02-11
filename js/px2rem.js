let pixel = document.getElementById("px");
let rem = document.getElementById("rem");
function px2rem() {
    let x = pixel.value;
    y = x / 16;
    rem.value = y;
}

function rem2px() {
    let x = rem.value;
    y = x * 16;
    pixel.value = y;
}