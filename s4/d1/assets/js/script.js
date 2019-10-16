// let buttons = document.querySelectorAll('.btn')


// buttons.forEach(function(button){
// 	button.addEventListener('click', function(){
// 		alert("hi")
// 	})
// })


// jquery basic syntax
// document.querySelector/All >> $()
// document.querySelector.action >> $().action()
// this >> #(this)
// document.querySelector.value >> $().val()
// .style >> .css()
// .style.fontWeight= 'bold' >> .css('font-weight', 'bold')
// .innerHTML >> .html
// .style.display = 'none' >> .hide


$('.btn').click(function(){
	// alert('hi')

	// this will refer to the element that trigger it
	console.log($(this))

	// this returns value of the element that triggered the event		
	console.log($(this).val())

	//
	$(this).css('border', '2px solid black')
	$(this).css('font-weight', 'bold')

	$(this).html('clicked')
})

// $('#btn3').click(function(){
// 	$('h1').hide()
// })

// $('#btn3').dblclick(function(){
// 	$('h1').show()
// })

$('#btn3').click(function(){
	$('h1').toggle(2000)
})

$('li').mouseenter(function(){
	$(this).css('font-weight', 'bold')
})

$('li').mouseleave(function(){
	$(this).css('font-weight', 'normal')
})

$('.hello').click(function(){
	$(this).animate({
		left : '100px',
		bottom : '100px',
		fontSize : '24px'
	})
})

// selector.classList.add('classname') >> selector.addClass('classname')
// $('li').click(function(){
// 	$(this).addClass('done')
// })

// $('li').dblclick(function(){
// 	$(this).removeClass('done')
// })

$('li').click(function(){
	$(this).toggleClass('done')
})

