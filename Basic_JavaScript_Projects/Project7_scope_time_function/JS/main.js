var X = 25;
function Add_numbers_1()    {
    document.write(5 + X + "<br>");
}
function Add_numbers_2()    {
    document.write(25 + X + "<br>");         //global variable
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3()    {       //local variable
var Y = 5;
    document.write(5 + Y + "<br>");
}
Add_numbers_3();


function Add_numbers_4()    {
    console.log(2 + Z + "<br>");    //function with error, cosole log to debug
}
Add_numbers_4();

function get_Date() {       //if function
    if (new Date().getHours() < 12) {
        document.getElementById("Notice").innerHTML = "You are on time";
    }
}

function Drive() {       //self if function
    Age = 15
    if (Age < 16) {
        document.getElementById("Age_Requirement").innerHTML = "You are too young";
    }
}

function Drive_2() {       //self if/else function
    Age2 = document.getElementById("Age2").value;
    if (Age2 >= 16) {
        Driving = "You are old enough to drive";
    }
    else  {
        Driving = "You are not old enough to drive";
    }
    document.getElementById("Driving_age").innerHTML = Driving;
}



function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)   {
        Reply = "It is afternoon.";
    }
    else    {
        Repy = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}