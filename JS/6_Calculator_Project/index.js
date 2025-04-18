const numbers = Array.from(document.querySelectorAll(".numbers>.cell"));
const operators = Array.from(document.querySelectorAll(".operators>.cell"));
const display = document.getElementById("display");

let a = 0, b = 0, op = "", res = 0;
numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if(res !== 0){
            res = 0;
            display.value = "";
        }
        if(op !== "" && num.innerText === "=") checkNumbers(num);
        if(num.innerText === '=') return;
        display.value += num.innerText;
    });
});

operators.forEach((oper) => {
    oper.addEventListener("click", () => {     
        if(oper.innerText === 'C'){
            display.value = "";
            return;
        }
        if(oper.innerText === 'Del'){
            let a = display.value;
            display.value = a.slice(0,a.length-1)
            return;
        }
        a = display.value;
        display.value = "";
        op = oper.innerText;
    });
})

function checkNumbers(num) {
    b = display.value;
    switch (op) {
        case "+":
            display.value = Number(a) + Number(b);
            res = Number(a) + Number(b);
            op = ""
            break;
        case "-":
            display.value = Number(a) - Number(b);
            res = Number(a) - Number(b);
            op = ""
            break;
        case "x":
            display.value = Number(a) * Number(b);
            res = Number(a) * Number(b);
            op = ""
            break;
        case "÷":
            display.value = Number(a) / Number(b);
            res = Number(a) / Number(b);
            op = ""
            break;
        case "%":
            display.value = Number(a) % Number(b);
            res = Number(a) % Number(b);
            op = ""
            break;
        case "Exp":
            display.value = Number(a) ** Number(b);
            res = Number(a) ** Number(b);
            op = ""
            break;
        default:
            op = ""
            break;
    }
}