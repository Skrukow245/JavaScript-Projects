document.write(typeof 3);
document.write("<br>");
document.write("10" + 5);
document.write("<br>");
document.write(-5E510);
document.write("<br>");
document.write(5E510);
document.write("<br>");
document.write(5 > 2);
document.write("<br>");
document.write(2 > 5);
console.log(2 + 2);
document.write("<br>");
console.log(5 < 2);
document.write(2 == 2);
document.write("<br>");
document.write(2 == 5);
document.write("<br>");
X = 50;
Y = 50;
document.write(X===Y);   //same value and same data type
document.write("<br>");
A = 50;
B = "51";
document.write(A===B);    //diff value and diff data type
document.write("<br>");
C = 40;
D = "40";
document.write(C===D);   //same value and diff data type
document.write("<br>");
E = 40;
F = 41;
document.write(E===F);   //diff value and same data type
document.write("<br>");
document.write(2 > 1 && 5 > 2);   //and functions
document.write("<br>");
document.write(1 > 2 && 5 > 2);
document.write("<br>");
document.write(2 > 1 || 2 > 5);   //or functions
document.write("<br>");
document.write(1 > 2 || 2 > 5);
function not_Function() {
    document.getElementById("Not").innerHTML = ! (5 > 2);
}
function not_Function2() {
    document.getElementById("Not2").innerHTML = ! (5 < 2);   //double negative
}
