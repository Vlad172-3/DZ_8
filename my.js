let display = document.getElementById("display")
let display_preview = document.getElementById("display_preview")
let num1 = 0
let num2 = 0
let sign = ""

function addNum(num){
    display.value += num
    display_preview.value += num
}

function plus(){
    num1 = parseInt(display.value)
    sign = "+"
    display_preview.value += " + "
    display.value = ""
}

function minus(){
    num1 = parseInt(display.value)
    sign = "-"
    display_preview.value += " - "
    display.value = ""
}

function multiply(){
    num1 = parseInt(display.value)
    sign = "*"
    display_preview.value += " * "
    display.value = ""
}

function divide(){
    num1 = parseInt(display.value)
    sign = "/"
    display_preview.value += " / "
    display.value = ""
}

function percent(){
    num1 = parseInt(display.value)
    sign = "%"
    display_preview.value += " % "
    display.value = ""
}

function clearDisplay() {
    num1 = 0
    num2 = 0
    sign = ""
    display.value = ""
    display_preview.value = ""
}

function clearNum() {
    display.value = display.value.slice(0, -1)
    if (display_preview.value.slice(-1) != " "){
        display_preview.value = display_preview.value.slice(0, -1)
    }
}

function equal() {
    num2 = parseInt(display.value)

    switch (sign) {
        case "+":
            display.value = num1 + num2
            display_preview.value += " = "+display.value
            break;
        case "-":
            display.value = num1 - num2
            display_preview.value += " = "+display.value
            break;
        case "*":
            display.value = num1 * num2
            display_preview.value += " = "+display.value
            break;
        case "/":
            display.value = num1 / num2
            display_preview.value += " = "+display.value
            break;
        case "%":
            display.value = num1 / 100 * num2
            display_preview.value += " = "+display.value
            break;
    
        default:
            break;
    }
}