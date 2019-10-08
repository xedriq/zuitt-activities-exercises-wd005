let selectorRed = document.getElementById("red")
let selectorOrange = document.getElementById("orange")
let selectorYellow = document.getElementById("yellow")
let selectorGreen = document.getElementById("green")
let selectorBlue = document.getElementById("blue")
let selectorIndigo = document.getElementById("indigo")
let selectorViolet = document.getElementById("violet")
let redBox = document.getElementById("red-box")
let orangeBox = document.getElementById("orange-box")
let yellowBox = document.getElementById("yellow-box")
let greenBox = document.getElementById("green-box")
let blueBox = document.getElementById("blue-box")
let indigoBox = document.getElementById("indigo-box")
let violetDiv = document.getElementById("violet-div")

selectorRed.onclick = function(){
    redBox.style.backgroundColor = "red"
}

selectorOrange.onclick = function(){
    orangeBox.style.backgroundColor = "orange"
}

selectorYellow.onclick = function(){
    yellowBox.style.backgroundColor = "yellow"
}

selectorGreen.onclick = function(){
    greenBox.style.backgroundColor = "green"
}

selectorBlue.onclick = function(){
    blueBox.style.backgroundColor = "blue"
}

selectorIndigo.onclick = function(){
    indigoBox.style.backgroundColor = "indigo"
}

selectorViolet.onclick = function(){
    violetDiv.style.backgroundColor = "violet"
}