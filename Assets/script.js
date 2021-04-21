let sceduler = [
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
let myTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
let arrr=[];

getTasks();
getToday();
// -------------- Getting Todays Date --------------
function getToday() {
    var currentDate = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(currentDate);
    console.log(currentDate)
}
// -------------- Getting tasks from local storage when we load the page--------------
function getTasks(){
    myTasks = JSON.parse(localStorage.getItem("Tasks"))
    if (myTasks == null){
        myTasks = sceduler;   
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
    localStorage.setItem("Tasks", JSON.stringify(sceduler));
}
// -------------- Button click event --------------
$(".btn").on("click", function(event){
    event.preventDefault();
    $("li").each(function(index) {
        arrr[index] = $(this).find("input").val();
   });
   console.log("arr: ",arrr) 
    for (i=0; i < sceduler.length; i++){
        sceduler[i].task = arrr[i];
    }
    setTasks();
  
})


 



