let scheduler = [
    {
        time: 9,
        task: ""
    },{
        time: 10,
        task: ""
    },{
        time: 11,
        task: ""
    },{
        time: 12,
        task: ""
    },{
        time: 13,
        task: ""
    },{
        time: 14,
        task: ""
    },{
        time: 15,
        task: ""
    },{
        time: 16,
        task: ""
    },{
        time: 17,
        task: ""
    }
]

let myTasks;
let storageArray=[];

function createBlocks() {
    let container = $(".container")
    let amPm
    $.each(scheduler, function(i)
    {
         if (scheduler[i].time >= 12){
            amPm = ":00pm"
             } else {
                amPm = ":00am"
             }
        let li = $('<li/>')
            .addClass('list-group-item list-group-item-primary')
            .appendTo(container);
        let div1 = $('<div>')
            .addClass('input-group mb-3')
            .appendTo(li);
            $("<span>")
            .addClass("time-span")
            .text(scheduler[i].time + amPm)
            .appendTo(div1);
            $("<input>")
            .addClass("form-control")
            .attr("type", "text")
            .appendTo(div1)
        let  div2 = $("<div>")
            .addClass('input-group-append').appendTo(div1)
            $("<button>")
            .addClass("btn btn-outline-secondary saveBtn")
            .text("Save")
            .appendTo(div2)
    });

}

// -------------- Getting Todays Date --------------
function getToday() {
    let currentDate = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(currentDate);
}

// -------------- Getting tasks from local storage when we load the page--------------
function getTasks(){
    myTasks = JSON.parse(localStorage.getItem("Tasks"))
    if (myTasks == null){
        myTasks = scheduler;   
    } else {
         renderTasks();
    } 
}

// -------------- Rendering tasks to each input when we load the page --------------
function renderTasks(){
    $("li").each(function(index) {
         $(this).find("input").val(myTasks[index].task);
    });
}

// -------------- Setting Tasks to local storage --------------
function setTasks(){
    localStorage.setItem("Tasks", JSON.stringify(scheduler));
}

// -------------- Button click event --------------
$(document).ready(function() {
    $(".btn").on("click", function(event){
    event.preventDefault();
    $("li").each(function(index) {
        storageArray[index] = $(this).find("input").val();
   });
   console.log("storageArray: ",storageArray) 
    for (i=0; i < scheduler.length; i++){
        scheduler[i].task = storageArray[i];
    }
    setTasks();
})
})

// -------------- Check the time and color scheduler  --------------
function checkIfPassed() {
  let currentTime = moment().format('HH') ;
  $("li").each(function(index) {
    if (scheduler[index].time > currentTime) {
        $(this).find("input").css("background-color", "green");
    }
    if (scheduler[index].time < currentTime){
    $(this).find("input").css("background-color", "gray");
    }
    if (scheduler[index].time == currentTime){
        $(this).find("input").css("background-color", "	red");
        }
});
}



createBlocks();
getToday();
getTasks();
checkIfPassed();



