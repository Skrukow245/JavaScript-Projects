function addition_Function()    {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;    //add function
}

function subtraction_Function()    {
    var Subtraction = 5 - 3;
    document.getElementById("Math2").innerHTML = "5 - 3 = " + Subtraction;   //sub function
}

function multiplication_Function()    {
    var Multiplication = 4 * 5;
    document.getElementById("Math3").innerHTML = "4 * 5 = " + Multiplication;   //mult function
}

function division_Function()    {
    var Division = 10 / 2;
    document.getElementById("Math4").innerHTML = "10 / 2 = " + Division;   //div function
}

function multi_Function()    {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "(1 + 2) * 10 / 2 -5 = " + simple_Math;   //multi function
}

function modulus_Operator()    {
    var simple_Math = 10 / 3
    document.getElementById("Math6").innerHTML = "25 / 6 has a remainder of: " + simple_Math;   //remainder/modulus operator
}

function negation_Operator()    {
    var x = 10
    document.getElementById("Math7").innerHTML = -x;     //negation operator
}

    var X = 10
    X++;
    document.write(X)     //++ operator

    var Y = 45
    Y--;
    document.write(Y)     //--operator

    window.alert(Math.random() * 100);   //random number 