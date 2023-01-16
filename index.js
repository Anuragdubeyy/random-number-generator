let btn1El = document.getElementById("btn1");
let btn2El = document.getElementById( "btn2");
let btn3El = document.getElementById("btn3");



function generate1() {
    let result1 = 0
    result1 += Math.floor(Math.random() * 50)
    btn1El.textContent = "Random number -> " + result1
}

function generate2() {
    let result2 = 0
    result2 += Math.floor(Math.random() * 50) + 50
    btn2El.textContent = "Random number -> " + result2
}

function generate3() {
    let result3 = 0
    result3 += Math.floor(Math.random() * 100) + 50
    btn3El.textContent = "Random number -> " + result3
}