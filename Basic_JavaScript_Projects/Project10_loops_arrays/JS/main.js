function Call_Loop()  {                       //while loop
    var Digit = "";
    var X = 1;
    while (X < 11)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {                                                         //for loop
    for (Y = 0; Y < Instruments.length; Y++)    {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function(){               //array and objects 
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {                         //constant function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1000";
    Musical_Instrument.size = "3ft";                  //added size
    document.getElementById("Constant").innerHTML = "The size of the " + Musical_Instrument.type + " was " + Musical_Instrument.size;
}


var X = 25;
document.write(X);              //let keyword
{
    let X = 7;
    document.write("<br>" + X);
}
document.write("<br>" + X);


let car = {
    make: "Dodge ",                //object with the use of let keyword
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
