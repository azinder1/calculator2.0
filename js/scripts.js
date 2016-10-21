//Business Logic:

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {

	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var calculate = function(number1, number2, operation) {
		switch (operation) {
			case add:
				return number1 + number2;
			case subtract:
				return number1 - number2;
			case multiply:
				return number1 * number2;
			case divide:
				return number1 / number2;
			default:
				break
		}
}
//User interface logic:


$(document).ready(function(){
	$("form#calculator").submit(function(event){
		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		console.log("1st number:" + number1);  // for debugging
	  console.log("2nd number:" + number2);  // for debugging
	  console.log("operator:" + operator);  // for debugging
		var result;
		if (operator === "add"){
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result =  divide(number1, number2);
		}
		event.preventDefault();
		$("#output").text(result);
	});
});
