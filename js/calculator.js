let calcBtn = document.querySelectorAll(".calc-btn");
let input = document.getElementById("calc-output");
let string = "";

calcBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let val = e.target.textContent;
        if (val == "=") {
            string = eval(string);
            input.value = string;
        } else if (val == "AC") {
            string = "";
            input.value = 0;
        } else if (val == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += val;
            input.value = string;
        }
    })
})