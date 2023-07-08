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

const multiply = function(...multiplyThese) {
  return multiplyThese.reduce((accumulator, currentValue)=>accumulator*currentValue);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
  let runningTotal = 1;
  if (number === 0){ return 1;}
  for (let i = 1; i<=number; i++)
    runningTotal = runningTotal*i;
  return runningTotal;
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
