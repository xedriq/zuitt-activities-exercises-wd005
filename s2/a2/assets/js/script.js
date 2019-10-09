function remove(num) {
	document.querySelector('#box'+num).classList.remove("col-md-1", "col-md-2","col-md-6", "col-md-4", "col-md-3", "col-md-12")
}

function changeCol(col){
	remove(1)
	remove(2)
	remove(3)
	remove(4)
	remove(5)
	remove(6)
	remove(7)
	remove(8)
	remove(9)
	remove(10)
	remove(11)
	remove(12)
	document.querySelector('#box1').classList.add(col)
	document.querySelector('#box2').classList.add(col)
	document.querySelector('#box3').classList.add(col)
	document.querySelector('#box4').classList.add(col)
	document.querySelector('#box5').classList.add(col)
	document.querySelector('#box6').classList.add(col)
	document.querySelector('#box7').classList.add(col)
	document.querySelector('#box8').classList.add(col)
	document.querySelector('#box9').classList.add(col)
	document.querySelector('#box10').classList.add(col)
	document.querySelector('#box11').classList.add(col)
	document.querySelector('#box12').classList.add(col)
}

// btn1
document.querySelector("#btn1").addEventListener('click', function(){
	changeCol("col-md-12")
})

// btn2
document.querySelector("#btn2").addEventListener('click', function(){
	changeCol("col-md-6")
})

//btn3
document.querySelector("#btn3").addEventListener('click', function(){
	changeCol("col-md-4")
})

//btn4
document.querySelector("#btn4").addEventListener('click', function(){
	changeCol("col-md-3")
})	

//btn6
document.querySelector("#btn6").addEventListener('click', function(){
	changeCol("col-md-2")
})

//btn 12
document.querySelector("#btn12").addEventListener('click', function(){
	changeCol("col-md-1")
})