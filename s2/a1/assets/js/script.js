let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let button5 = document.querySelector("#button5")
let value1 = document.querySelector("#input1")
let value2 = document.querySelector("#input2")
let value3 = document.querySelector("#input3")
let value4 = document.querySelector("#input4")
let value5 = document.querySelector("#input5")
let list1 = document.querySelector("#li1")
let list2 = document.querySelector("#li2")
let list3 = document.querySelector("#li3")
let list4 = document.querySelector("#li4")
let list5 = document.querySelector("#li5")

// Add

button1.addEventListener("click", function() {
	list1.innerHTML = value1.value
	value1.value = ""
})

button2.addEventListener("click", function() {
	list2.innerHTML = value2.value
	value2.value = ""
})

button3.addEventListener("click", function() {
	list3.innerHTML = value3.value
	value3.value = ""
})

button4.addEventListener("click", function() {
	list4.innerHTML = value4.value
	value4.value = ""
})

button5.addEventListener("click", function() {
	list5.innerHTML = value5.value
	value5.value = ""
})

// Delete

list1.addEventListener("dblclick", function(){
	list1.innerHTML = ""
})

list2.addEventListener("dblclick", function(){
	list2.innerHTML = ""
})

list3.addEventListener("dblclick", function(){
	list3.innerHTML = ""
})

list4.addEventListener("dblclick", function(){
	list4.innerHTML = ""
})

list5.addEventListener("dblclick", function(){
	list5.innerHTML = ""
})