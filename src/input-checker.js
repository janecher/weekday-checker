//const arrayMonth30 = [4, 6, 9, 11]//April, June, September, November

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

function checkDay(day, month, year) {
  if (day < 1 || day > 31) {
    return "Incorrect day input: input must be interger number between 1-31";
  } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    return "Incorrect day input: the day for April, June, September, November must be interger number between 1-30";
  } else if (month === 2 && isLeapYear(year) && day > 29) {
    return "Incorrect day input: the day for February in a leap year must be interger number between 1-29";
  } else if (month === 2 && !isLeapYear(year) && day > 28) {
    return "Incorrect day input: the day for February in a regular year must be interger number between 1-28";
  } 
}
