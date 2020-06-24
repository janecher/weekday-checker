export function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

export function checkDay(day, month, year) {
  if (day < 1 || day > 31) {
    return false;
  } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    return false;
  } else if (month === 2 && isLeapYear(year) && day > 29) {
    return false;
  } else if (month === 2 && !isLeapYear(year) && day > 28) {
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

