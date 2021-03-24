
// made the timeblocks an object array to iterate through
var today = [
    {
        index: "0",
        hour: "8",
        nightOrDay: "am",
        userNote:""
    },

    {
        index: "1",
        hour: "9",
        nightOrDay: "am",
        userNote:""
    },

    {
        index: "2",
        hour: "10",
        nightOrDay: "am",
        userNote:""
    },

    {
        index: "3",
        hour: "11",
        nightOrDay: "am",
        userNote:""
    },

    {
        index: "4",
        hour: "12",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "5",
        hour: "1",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "6",
        hour: "2",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "7",
        hour: "3",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "8",
        hour: "4",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "9",
        hour: "5",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "10",
        hour: "6",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "11",
        hour: "7",
        nightOrDay: "pm",
        userNote:""
    },

    {
        index: "12",
        hour: "8",
        nightOrDay: "pm",
        userNote:""
    },
]

// function that gets current information for the current date
function getTime() {
    var currentDate = moment().format('dddd, MMMM Do')
    // display the date
    $("#currentDay").text(currentDate);
}

getTime();