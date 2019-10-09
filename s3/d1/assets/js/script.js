document.querySelector('#checker').addEventListener('blur', function(){
	let num = Number(document.querySelector('#checker').value)

	console.log(num)
	

	if (!isNaN(num) && num !== 0){
		
		if (num % 2 == 0) {
			document.querySelector('#result').innerHTML = `<div class="alert alert-success w-25 mx-auto">
															  <strong class="display-4">${num} is Even</strong>
															</div>`
		} else {
			document.querySelector('#result').innerHTML = `<div class="alert alert-success w-25 mx-auto">
															  <strong class="display-4">${num} is Odd</strong>
															</div>`
		}
		
	} else  {
		document.querySelector('#result').innerHTML = `<div class="alert alert-danger mx-80 mx-auto">
														  <strong class="display-4">Please input a number greater than 0!</strong>
														</div>`
	}
})



// let num=NaN



