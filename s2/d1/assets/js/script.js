// document.getElementById("btnContent").onclick = function() {
// 	document.getElementById("headingText").innerHTML = "bagong laman"
// }

// document.querySelector("#btnContent").onclick = function() {
// 	document.querySelector("#headingText").innerHTML = "mas bagong laman"
// }

// addEventListener
// we attach the addEventListener method to a selector(querySelector, getElementById)
// so that it can execute/run the manipulation upon the trigger event indicated
// syntax:
// document.selector.addEventListener("event", function(){
// 		function to run upon trigger of the indicated event
// })

document.querySelector("#btnContent").addEventListener("click", function(){
	document.querySelector("#headingText").innerHTML = "event listener on click"
})

// add/remove class
// classList property returns the list of classes for that selected element
console.log(document.querySelector("#headingText").classList)

// the add method adds the class indicated in its parameter
// ex we want to add class called newClass

document.querySelector("#btnStyle").addEventListener("click", function(){
	document.querySelector("#headingText").classList.add("newClass")
	console.log(document.querySelector("#headingText").classList)
})

// remove method removes the class indicated in its parameter
document.querySelector("#btnStyle").addEventListener("dblclick", function(){
	console.log("double clicked the btnStyle button")
	document.querySelector("#headingText").classList.remove("newClass")
	console.log(document.querySelector("#headingText").classList)
	
})