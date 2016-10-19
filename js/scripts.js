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
	$("form#calculator").submit(function(event) {
		var number1 = parseInt($("input#number1").val());
		var number2 = parseInt($("input#number2").val());
		var operation;
		if

		$("#output").text(result);
		event.preventDefault();
	});
});
