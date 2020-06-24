import { isLeapYear, checkDay } from './../src/input-checker.js';


describe('check the day', () => {

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
});