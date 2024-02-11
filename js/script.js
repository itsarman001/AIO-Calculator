let buttons = document.querySelectorAll("button");
let input = document.getElementById("output-value");
let string = "";

buttons.forEach((button) => {
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