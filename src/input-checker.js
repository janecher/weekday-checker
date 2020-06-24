export function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

export function checkDay(day, month, year, answer) {
  if (day < 1 || day > 31) {
    answer = "Incorrect day input: input must be interger number between 1-31";
    return false;
  } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    answer = "Incorrect day input: the day for April, June, September, November must be interger number between 1-30";
    return false;
  } else if (month === 2 && isLeapYear(year) && day > 29) {
    answer ="Incorrect day input: the day for February in a leap year must be interger number between 1-29";
    return false;
  } else if (month === 2 && !isLeapYear(year) && day > 28) {
    answer = "Incorrect day input: the day for February in a regular year must be interger number between 1-28";
    return false;
  } 
  return true;
}

export function checkMonth(month) {
  if (month < 1 || month > 12) {
    return false;
  } else {
    return true;
  }
}

export function checkYear(year) {
  if (year > 0) {
    return true;
  } else {
    return false;
  }
}