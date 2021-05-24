function Complete_Sentence()    {      //concatenate method
    var part_1 = "This is a "
    var part_2 = "complete "
    var part_3 = "sentence."
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function Slice_Method() {        //slice method
    var Sentence = "Huskies are the best kind of dog.";
    var Section = Sentence.slice(0,7);
    document.getElementById("Slice").innerHTML = Section;
}

function String_Method()    {       //string method
    var X =25;
    document.getElementById("String").innerHTML = X.toString();
}

function Precision_Method()    {       //precision method
    var X =25.123546789;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}