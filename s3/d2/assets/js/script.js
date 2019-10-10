const buttons = document.getElementsByClassName("btn")

// ideally this should work but it does not.
// buttons.addEventListener('click', function(){
// 	alert('hi')
// })

// console.log(buttons)

// for (let x = 0; x < buttons.length ; x++) {
// 	buttons[x].addEventListener('click', function(){
// 		alert('hi')
// 	})
// }


// const boxes = document.getElementsByClassName('box')
const boxes = document.querySelectorAll(".box")
// nodeList and HTML collections are both collection of nodes. HTML collection
// is more specific since JS is sure that you are selecting elements via
// a tag, attrib, etc

// console.log(boxes)

// boxes.style.backgroundColor = 'red' // ideally this should work but it does not

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// boxes[0].style.backgroundColor = 'red'
// boxes[1].style.backgroundColor = 'orange'
// boxes[2].style.backgroundColor = 'blue'

// for(let i = 0; i<boxes.length;i++){
// 	boxes[i].style.backgroundColor = colors[i]
// 	boxes[i].innerHTML = boxes[i].style.backgroundColor
// }

// reversed colors 
// for(let i = 0; i<boxes.length;i++){
// 	boxes[i].style.backgroundColor = colors[colors.length-1-i]
// 	boxes[i].innerHTML = boxes[i].style.backgroundColor
// 	boxes[i].style.width = 50 + (10*i) + "px"
// 	boxes[i].style.height = 50 + (10*i) + "px"
// }

let i = 0
boxes.forEach(function(box){
	box.style.backgroundColor = colors[colors.length-1-i]
	box.innerHTML = boxes[i].style.backgroundColor
	box.style.width = 50 + (10*i) + "px"
	box.style.height = 50 + (10*i) + "px"
	i++
})