
// gets current information for the current date and time from moment.js
var currentDate = moment().format('dddd') + ", " + moment().format("MMM Do YYYY") + " -";
var currentHour = moment().format('h:mm:ss a')

// time interval variables
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");
var six = $("#6pm");
var seven = $("#7pm");


var hour = moment().hours();
var userInput;
var hourSpan;

// displays the date and time
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);


// function that assigns all timeslot values to their respective IDs and produce them from localStorage
function getPage() {

console.log("Current Hour " + hour);

var get9 = JSON.parse(localStorage.getItem("09:00 am"))
nine.val(get9);

var get10 = JSON.parse(localStorage.getItem("10:00 am"))
ten.val(get10);

var get11 = JSON.parse(localStorage.getItem("11:00 am"))
eleven.val(get11);

var get12 = JSON.parse(localStorage.getItem("12:00 pm"))
twelve.val(get12);

var get1 = JSON.parse(localStorage.getItem("01:00 pm"))
one.val(get1);

var get2 = JSON.parse(localStorage.getItem("02:00 pm"))
two.val(get2);

var get3 = JSON.parse(localStorage.getItem("03:00 pm"))
three.val(get3);

var get4 = JSON.parse(localStorage.getItem("04:00 pm"))
four.val(get4);

var get5 = JSON.parse(localStorage.getItem("05:00 pm"))
five.val(get5);

var get6 = JSON.parse(localStorage.getItem("06:00 pm"))
six.val(get6);

var get7 = JSON.parse(localStorage.getItem("07:00 pm"))
seven.val(get7);

} 

function currentTimeIndex () {
    
$(".form-control").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    
//      console.log(this);
    if (hour > timeTest) {
        $(this).addClass("past");
    } else if (hour < timeTest) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});
}

$(document).ready(function(){
    getPage()
    currentTimeIndex()
  
    // Buttons (save to Local Storage)
    $(".saveBtn").on("click", function(){
      userInput = $(this).siblings(".form-control").val().trim();
      console.log(userInput);
      hourSpan = $(this).siblings(".input-group-prepend").text().trim();

      localStorage.setItem(hourSpan, JSON.stringify(userInput));
  
    })
    // Button for clear the day
    // $("#clearDay").on("click", function(){
    //   localStorage.clear();
    //   getPage()
    // }) 
  
  });