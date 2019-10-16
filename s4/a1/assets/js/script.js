// player object
let player = {
	character: $('#player'),
	postion: 0,
	name: 'Player'
}


// ai object
let ai = {
	character: $('#ai'),
	position: 0,
	name: 'AI'
}

let difficulty = 800
let playerPosition = 0
let aiPosition = 0


// difficulty
$('#easy').click(function(){
	
	$(this).siblings().attr('disabled', 'disabled')
	$('#start').attr('disabled', null)

	return difficulty = 1000
})

$('#normal').click(function(){
	$(this).siblings().attr('disabled', 'disabled')
	$('#start').attr('disabled', null)

	return difficulty = 700
})

$('#hard').click(function(){
	$(this).siblings().attr('disabled', 'disabled')
	$('#start').attr('disabled', null)

	return difficulty = 400
})


// move player fnction
player.character.click(function(){
	$(this).stop().animate({
		left: (playerPosition += (Math.random()*100) + 30) +'px'
	})

	player.position = playerPosition

	result(player)
})


// ai move function
const aiMove = () => {
	

	setInterval(function(){
		ai.character.animate({
			left: (aiPosition += (Math.random()*100) + 30) +'px'
		})

		ai.position = aiPosition

		result(ai)

	}, difficulty)

}



// result
const result = (char) => {
	if (char.position > 1000) {
		console.log(char.character)
		$('#winner').html(char.name + ' won!')

		setTimeout(function(){
			alert('Race again!')
			location.reload(true)	
		}, 1000)
		return true
	}

	// if (ai.position > 1000) {
	// 	alert('AI won!')
	// 	return true	
	// }
}

$('#start').click(function(){
	aiMove()
})