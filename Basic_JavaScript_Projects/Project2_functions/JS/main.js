function Function1()   {
    var str = "This text is red";         //settings variable
    var result = str.fontcolor("red");    //changing the color of the variable to red
    document.getElementById("Red_Text").innerHTML = result;           //linking this to the id

function myFunction()   {
    var sentence = "I am learning";           //settings variable
    sentence += " a lot from this book!";     //combining the 2 strings together
    document.getElementById("Concatenate").innerHTML = sentence;     //linking this to the id
}