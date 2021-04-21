let sceduler = [
    {
        time: 9,
        task: ""
    },{
        time: 10,
        task: "dfdf"
    },{
        time: 11,
        task: ""
    },{
        time: 12,
        task: "dfdf"
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
        task: "ewer"
    }
]

function getToday() {
    var currentDate = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(currentDate);
    console.log(currentDate)
}

function getTasks(){
    var myTasks = JSON.parse(localStorage.getItem("Tasks"))
    if (myTasks == null){
        myTasks = sceduler;
        console.log(myTasks)
    }
}

function renderTasks(){
    $( "li" ).each( function(index){
         $(this).find("input").val(sceduler[index].task);

    });
}

getToday();
getTasks()
renderTasks()
 



