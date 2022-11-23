//input string array
var input = [];
//variable to hold joined input array
var output = "";

//numbers onclick

//zero
document.getElementById("zero").onclick = function(){
    var zero = parseInt(document.getElementById("zero").innerText);

    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + zero;
    }
    else {
        input.push(zero);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//one
document.getElementById("one").onclick = function(){
    var one = parseInt(document.getElementById("one").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + one;
    }
    else {
        input.push(one);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//two
document.getElementById("two").onclick = function(){
    var two = parseInt(document.getElementById("two").innerText);

    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + two;
    }
    else {
        input.push(two);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//three
document.getElementById("three").onclick = function(){
    var three = parseInt(document.getElementById("three").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + three;
    }
    else {
        input.push(three);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//four
document.getElementById("four").onclick = function(){
    var four = parseInt(document.getElementById("four").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + four;
    }
    else {
        input.push(four);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//five
document.getElementById("five").onclick = function(){
    var five = parseInt(document.getElementById("five").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + five;
    }
    else {
        input.push(five);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//six
document.getElementById("six").onclick = function(){
    var six = parseInt(document.getElementById("six").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + six;
    }
    else {
        input.push(six);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//seven
document.getElementById("seven").onclick = function(){
    var seven = parseInt(document.getElementById("seven").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + seven;
    }
    else {
        input.push(seven);
    }
    output = input.join(" ");


    document.getElementById("ioDisplay").innerHTML = output;
}
//eight
document.getElementById("eight").onclick = function(){
    var eight = parseInt(document.getElementById("eight").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + eight;
    }
    else {
        input.push(eight);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}
//nine
document.getElementById("nine").onclick = function(){
    var nine = parseInt(document.getElementById("nine").innerText);
    
    //checking if the last array element is a number of a decimal
    if(!isNaN(input[input.length-1]) || input[input.length-1] == "."){
        input[input.length-1] += "" + nine;
    }
    else {
        input.push(nine);
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}

//dot onclick
document.getElementById("decimal").onclick = function(){
    var decimal = document.getElementById("decimal").innerText;
    //lastElement string created added to solve includes is not a function error
    let lastElement = ""+input[input.length-1];
    console.log("dot 0");

    //checking whether anything has been input and added to the array
    /*
        the point of adding this if else is to solve the problem with the program
        not displaying the decimal if it is the first input to the program.
    */
    if(input.length == 0){
        input.push(decimal);
    }
    else {
        if(!lastElement.includes(".")){
            console.log("dot 1");
            //checking if the last array element is a number
            if(!isNaN(input[input.length-1])){
                console.log("dot 2.if");
                input[input.length-1] += "" + decimal;
            }
            else {
                console.log("dot 2.else");
                input.push(decimal);
            }
        }
    }
    output = input.join(" ");

    document.getElementById("ioDisplay").innerHTML = output;
}

//inputs onclick
//addition
document.getElementById("addition").onclick = function(){
    //checks if last array element is a number or if array is empty
    //this ensures the user uses the addition sign correctly
    if(!isNaN(input[input.length-1]) || input.length == 0){
        // numString += "+";
        // calcString+= "+";
        input.push("+");
        output = input.join(" ");
    }

    document.getElementById("ioDisplay").innerHTML = output;
}
//subtraction
document.getElementById("subtraction").onclick = function(){
    //checks is the last array element is anything but "-" and "."
    //this ensures that the user uses the subtraction sign correctly
    if(input[input.length-1] != "-" && input[input.length-1] != "."){
        input.push("-");
        output = input.join(" ");
    }

    document.getElementById("ioDisplay").innerHTML = output;
}
//multiplication
document.getElementById("multiplication").onclick = function(){
    //checks if the last array element is a number
    //if it isn't the user cannot input the multiplication symbol. This prevents invalid input scenarios
    if(!isNaN(input[input.length-1])){
        input.push("\u00d7");
        output = input.join(" ");
    }

    document.getElementById("ioDisplay").innerHTML = output;
}
//division
document.getElementById("division").onclick = function(){
    //checks if the last array element is a number
    //if it isn't the user cannot input the division symbol. This prevents invalid input scenarios
    if(!isNaN(input[input.length-1])){
        input.push("\u00f7");
        output = input.join(" ");
    }

    document.getElementById("ioDisplay").innerHTML = output;
}

//answer onclick
document.getElementById("answer").onclick = function(){
    //converting the multiply and division signs to their arithmetic operators
    //the array is turned to a string because replace only works on strings.
    //the alternative using indexOf and splice would require more code.
    output = input.join("");
    output = output.replace("\u00f7", "/");
    output = output.replace("\u00d7", "*");
    
    //checks whether numString is calculable
    try{
        var ans = eval(output);
        document.getElementById("ioDisplay").innerHTML = ans;
    }
    catch(e){
        if(e instanceof SyntaxError){
            document.getElementById("ioDisplay").innerHTML = "Invalid input";
        }
    }

    input = [];
    output = "";
}

//cancel onclick
document.getElementById("cancel").onclick = function(){
    input = [];
    output = "";

    document.getElementById("ioDisplay").innerHTML = "";
}
