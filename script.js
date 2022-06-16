const saveBtn = $(".saveBtn");

$(document).ready(function() {
    let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(date);

function currentTime () {
    const current = moment().hours()
    const time = $(".time-block");
    time.each(function() {
        let hourId = parseInt($(this).attr("id"))
        if (hourId === current) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        } else if (current > hourId) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } else {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }      
    })
};
currentTime();

saveBtn.on("click", function(event) {
    event.preventDefault();
    let parentElement = $(this).parent().attr("id");
    let description = $(this).siblings(".col-sm-10").val().replace(parentElement);
    
    localStorage.setItem(parentElement, JSON.stringify(description));
});

$("#9 textarea").val(JSON.parse(localStorage.getItem("9")));

})