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

// -------------- Getting Todays Date --------------
function getToday() {
    var currentDate = moment().format('dddd MMMM Do YYYY');
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

// -------------- Check the time and color scheduler  --------------
function checkIfPassed() {
  var currentTime = moment().format('HH') ;
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

getToday();
getTasks();
checkIfPassed();



