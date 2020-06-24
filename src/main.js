import { checkDay, checkMonth, checkYear } from './input-checker.js';
import $ from 'jquery';

$(document).ready(function(){
  $("form#dateCalulation").submit(function(event){
    event.preventDefault();
    const yearInput = parseInt($("#year").val());
    const monthInput = parseInt($("#month").val());
    const dayInput = parseInt($("#day").val());
    if(!checkYear(yearInput)) {
      $(".answer").text("Year must be a positive number");
      return;
    }
    if(!checkMonth(monthInput)) {
      $(".answer").text("Month must be a number between 1 and 12");
      return;
    }
    if(!checkDay(dayInput, monthInput, yearInput)) {
      $(".answer").text("Incorrect day input");
      return;     
    }
    let date = new Date(yearInput, monthInput-1, dayInput);   
    $(".answer").text(calculateWeekday(date));
  });
});