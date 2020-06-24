import { checkDay, checkMonth, checkYear } from './input-checker.js';
import { calculateWeekday } from './date.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function incorrectCheckInput(message) {
  $(".incorrect-input").show();
  $(".answer").hide();
  $(".incorrect-input").text(message);
}

$(document).ready(function(){
  $("form#dateCalulation").submit(function(event){
    event.preventDefault();
    const yearInput = parseInt($("#year").val());
    const monthInput = parseInt($("#month").val());
    const dayInput = parseInt($("#day").val());
    if (!checkYear(yearInput)) {
      incorrectCheckInput("Year must be a positive number");
      return;
    }
    if (!checkMonth(monthInput)) {
      incorrectCheckInput("Month must be a number between 1 and 12");
      return;
    }
    if (!checkDay(dayInput, monthInput, yearInput)) {
      incorrectCheckInput("Incorrect day input (day must be a number between 1-31, or 28, 29, 30 depends on month and year)");
      return;     
    }
    $(".incorrect-input").hide();
    let date = new Date(yearInput, monthInput-1, dayInput);   
    $(".answer").text(calculateWeekday(date));
    $(".answer").show();
  });
});