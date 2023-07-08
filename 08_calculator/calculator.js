const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return (a - b)
};

const sum = function(sumThese) {
  let runningTotal = Number(0);
  sumThese.forEach((number)=>{runningTotal += number})
  return runningTotal;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
