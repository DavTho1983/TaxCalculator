var grossIncome = 150000;

var rates = [
  { start: 11500, end: 45000, rate: 0.2 },
  { start: 45000, end: 150000, rate: 0.4 },
  { start: 150000, end: +Infinity, rate: 0.45 },
];

var calculation = () => {
  var incomeLeftToBeTaxed = grossIncome;
  var totalTax = 0;
  var netIncome = 0;
  for (var i = rates.length - 1; i >= 0; i--) {
    var rate = rates[i];
    var taxableIncomeinThisBracket = 0;
    if (incomeLeftToBeTaxed > rate.start && incomeLeftToBeTaxed <= rate.end) {
      taxableIncomeinThisBracket = incomeLeftToBeTaxed - rate.start;
      totalTax += taxableIncomeinThisBracket * rate.rate;
      incomeLeftToBeTaxed -= taxableIncomeinThisBracket;
    }
  }

  console.log(totalTax);
  netIncome = grossIncome - totalTax;
  return netIncome;
};

console.log(calculation(grossIncome, rates));
