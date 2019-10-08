// the DOM (Document Object Model) treats HTML elements, which are
// basically words, as objects.
// This means that it has properties and methods that we can SELECT
// and use to MANIPULATE the elements.

// DOM SELECTORS
// getElementsByTagName()
// getElementsByClass()
// getElementById()
// querySelector()

// Basic syntax
// document - will refer to the HTML file that this js file is linked to
// selector - the element you want to select inside the document
// event listener/action - the trigger that executes the manipulation you want to execute

// .innerHTML - to change the inner content of the elements
// .style - to apply CSS chaneges

//console.log(document)

// console.log(document.getElementById("firstTag"))
// document.getElementById("firstTag").innerHTML = "Cedrick"

// or you can assign it to an event so that it won't execute on load
// document.getElementById("firstTag").onclick = function(){
//     document.getElementById("firstTag").innerHTML = "Cedrick"
// }

// js can also change styles

// hide all el inside #all
document.getElementById("btnHide").onclick = function(){
    document.getElementById("all").style.display = "none"
}

document.getElementById("btnShow").onclick = function(){
    document.getElementById("all").style.display = "block"
    document.getElementById("all").style.backgroundColor = "#f4f4f4"
    document.querySelector("#all").style.color = "blue"

}

const headingSelector = document.getElementById("firstTag")

headingSelector.onclick = function(){
    headingSelector.innerHTML = "Cedrick"
    headingSelector.style.backgroundColor = "indianred"
    alert("alert on click")
    console.log("console log on click")
}

document.getElementById("btnHeight").onclick = function(){
    console.log("changing image height")
    document.getElementById("attr").height = "500"
}

document.getElementById("btnImage").onclick = function(){
    document.getElementById("attr").src = "https://lorempixel.com/400/200"
}

// js can get and manipulate values
document.getElementById("btnSum").onclick = function(){
    let v1 = document.getElementById("input1").value
    let v2 = document.getElementById("input2").value
    let sum = Number(v1) + Number(v2)
    document.getElementById("sum").innerHTML = sum
}