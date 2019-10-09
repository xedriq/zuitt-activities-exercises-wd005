function computeGrade(firstGrading, secondGrading, thirdGrading, fourthGrading){
	let average = (
		Number(firstGrading) + 
		Number(secondGrading) + 
		Number(thirdGrading) + 
		Number(fourthGrading)) / 4

	if (!isNaN(average) && (typeof average == "number")) {
		let qpi;
		let status;

		if (average < 0 || average >100) {
			return alert("out of bounds")
			
		} else if (average >= 93) {
			qpi = 1.0
			status = "Pass"
		} else if (average >=90) {
			qpi = 1.25
			status = "Pass"
		} else if (average >=87) {
			qpi = 1.5
			status = "Pass"
		} else if (average >=84) {
			qpi = 1.75
			status = "Pass"
		} else if (average >=80) {
			qpi = 2.0
			status = "Pass"
		} else if (average >=75) {
			qpi = 2.25
			status = "Pass"
		} else if (average >=70) {
			qpi = 2.5
			status = "Pass"
		} else if (average >=65) {
			qpi = 2.75
			status = "Pass"
		} else if (average >=60) {
			qpi = 3.0
			status = "Pass"
		} else if (average >=55) {
			qpi = 4.0
			status = "Failed"
		} else {
			qpi = 5.0
			status = "Failed"
		}

		return {
			average,
			qpi,
			status
		}

	}  else	 {
		return alert("Please input grades in number.")
	}
}

document.querySelector('#compute').addEventListener('click', function(){
	let firstGrading = document.querySelector('#input1').value
	let secondGrading = document.querySelector('#input2').value
	let thirdGrading = document.querySelector('#input3').value
	let fourthGrading = document.querySelector('#input4').value
	
	let result = computeGrade(firstGrading, secondGrading, thirdGrading, fourthGrading)

	document.querySelector('#average').innerHTML = result.average
	document.querySelector('#pof').innerHTML = result.status
	document.querySelector('#qpi').innerHTML = result.qpi
})
