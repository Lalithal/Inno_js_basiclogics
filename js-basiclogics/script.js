
function task1() {

    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var n3 = Number(document.getElementById("num3").value);

    var average = (n1 + n2 + n3) / 3;

    document.getElementById("res1").innerText =
        "Average = " + average;
}




function task2() {

    var n1 = Number(document.getElementById("num11").value);
    var n2 = Number(document.getElementById("num21").value);
    var n3 = Number(document.getElementById("num31").value);

    var average = (n1 + n2 + n3) / 3;

    document.getElementById("res2").innerText =
        "Average = " + average;
}



function task3() {

    var n = Number(document.getElementById("n").value);

    var sum = (n * (n + 1)) / 2;

    document.getElementById("res3").innerText =
        "Sum = " + sum;
}



function task4() {

    var n = Number(document.getElementById("x").value);

    var average = (n + 1) / 2;

    document.getElementById("res4").innerText =
        "Average = " + average;
}


function task5() {

    var cp = Number(document.getElementById("cp").value);
    var sp = Number(document.getElementById("sp").value);

    var profit = sp - cp;

    var percentage = (profit / cp) * 100;

    document.getElementById("res5").innerText =
        "Profit Percentage = " + percentage.toFixed(2) + "%";
}




function task6() {

    var pa = Number(document.getElementById("pa").value);
    var p = Number(document.getElementById("p").value);
    var I = Number(document.getElementById("I").value);

    var si = (pa * p * I) / 100;

    document.getElementById("res6").innerText =
        "Simple Interest = " + si + " Rs";
}




function task7() {

    var A1 = Number(document.getElementById("A1").value);
    var A2 = Number(document.getElementById("A2").value);

    var A3 = 180 - (A1 + A2);

    document.getElementById("res7").innerText =
        "Missing Angle = " + A3 + "°";
}



function task8() {

    var n = Number(document.getElementById("y").value);

    var lastDigit = n % 10;

    document.getElementById("res8").innerText =
        "Last Digit = " + lastDigit;
}



function task9() {

    var n = Number(document.getElementById("z").value);

    var result = Math.trunc(n / 10);

    document.getElementById("res9").innerText =
        "Result = " + result;
}




function task10() {

    var n = Number(document.getElementById("a").value);

    var firstDigit = Math.trunc(n / 100);

    document.getElementById("res10").innerText =
        "First Digit = " + firstDigit;
}




function task11() {

    var n = Number(document.getElementById("b").value);

    var firstDigit = Math.trunc(n / 10000);

    document.getElementById("res11").innerText =
        "First Digit = " + firstDigit;
}




function task12() {

    var c = Number(document.getElementById("c").value);

    var f = (c * 9 / 5) + 32;

    document.getElementById("res12").innerText =
        "Fahrenheit = " + f + " °F";
}




function task13() {

    var f = Number(document.getElementById("d").value);

    var c = ((f - 32) * 5) / 9;

    document.getElementById("res13").innerText =
        "Celsius = " + c.toFixed(2) + " °C";
}




function task14() {

    var bs = Number(document.getElementById("bs").value);
    var h = Number(document.getElementById("h").value);
    var da = Number(document.getElementById("da").value);

    var salary = bs + h + da;

    document.getElementById("res14").innerText =
        "Gross Salary = " + salary + " Rs";
}




function task15() {

    var b1 = Number(document.getElementById("b1").value);
    var b2 = Number(document.getElementById("b2").value);

    var temp = b1;

    b1 = b2;

    b2 = temp;

    document.getElementById("res15").innerText =
        "After Swap : A = " + b1 + " , B = " + b2;
}


function task16() {

    var c1 = Number(document.getElementById("c1").value);
    var c2 = Number(document.getElementById("c2").value);

    c1 = c1 + c2;

    c2 = c1 - c2;

    c1 = c1 - c2;

    document.getElementById("res16").innerText =
        "After Swap : A = " + c1 + " , B = " + c2;
}