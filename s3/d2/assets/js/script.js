const buttons = document.getElementsByClassName("btn")

// ideally this should work but it does not.
// buttons.addEventListener('click', function(){
// 	alert('hi')
// })

console.log(buttons)

// buttons[0]buttons[0].addEventListener('click', function(){
// 	alert('hi')
// })

// buttons[1].addEventListener('click', function(){
// 	alert('button 2 clicked')
// })

// buttons[2].addEventListener('dblclick', function(){
// 	alert('button 3 double clicked')
// })

for (let x = 0; x < buttons.length ; x++) {
	buttons[x].addEventListener('click', function(){
		alert('hi')
	})
}