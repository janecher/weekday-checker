import { isLeapYear, checkDay, checkMonth, checkYear } from './../src/input-checker.js';
import { calculateWeekday } from './../src/date.js';

describe('check the input date', () => {

  test('checking if year is leap year', () => {
    expect(isLeapYear(1983)).toEqual(false);
    expect(isLeapYear(2020)).toEqual(true);
  });

  test('check if input day is correct depends on month and year', () => {
    //Day is less than 0
    expect(checkDay(-2, 12, 2000)).toEqual(false);
    //Day is greater than 31
    expect(checkDay(45, 11, 1919)).toEqual(false);
    // Day is more than 30 for April 
    expect(checkDay(31, 4, 1000)).toEqual(false);
    //Day is greater than 28 on !LeapYear
    expect(checkDay(29, 2, 2019)).toEqual(false);
    //Day is greater than 28 on LeapYear
    expect(checkDay(29, 2, 2020)).toEqual(true);
    //Day is correct
    expect(checkDay(31, 5, 300)).toEqual(true);
    //Day is correct
    expect(checkDay(16, 7, 1986)).toEqual(true);
  });
  test('Checking if month is between 1 and 12', () => {
    //0 0r less
    expect(checkMonth(0)).toEqual(false);
    //13 or greater
    expect(checkMonth(13)).toEqual(false);
    //Within 1-12
    expect(checkMonth(9)).toEqual(true);
  })
  
  test('checking if year input is correct, a positive number', () => {
    expect(checkYear(-8)).toEqual(false);
    expect(checkYear(2020)).toEqual(true);
  });
});

describe('calculate the day of the week', () => {
  test('get the name of the date', () => {
    const date1 = new Date(2010, 2, 10);
    const date2 = new Date(2020, 5, 23);
    const date3 = new Date(2020, 6, 4);
    expect(calculateWeekday(date1)).toEqual("Wednesday");
    expect(calculateWeekday(date2)).toEqual("Tuesday");
    expect(calculateWeekday(date3)).toEqual("Saturday");
  });
});