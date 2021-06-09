
// made the timeblocks an object array to iterate through


// function that gets current information for the current date
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    var currentHour = moment().format('h:mm:a')
    // display the date
    $("#currentDay").text(currentDate);
    $("#currentHour").text(currentHour);
}

getDate();

// Iterate through every item in 'today'
today.forEach(function(currentHour) {
    // creates a row for every item in the object array 'today'
    var timeSlot = $("<form>").attr({
        "class":"row"
    });
    // adds a row for every item in the object array 'today' in the window
    $(".container").append(timeSlot);

    // appends a sapce for the time of day on the schedular for each row
    var timeOfDay = $("<div>").text(currentHour)
})