// CHAPTERS26-30
// MATH METHODS

// Task1.
var userInput = +prompt("Enter your number");
var Round = Math.round(userInput);
var Floor = Math.floor(userInput);
var Ceil = Math.ceil(userInput);
document.write("number: " + userInput);
document.write("<br>round off value: "+Round);
document.write("<br>floor value: "+Floor);
document.write("<br>ceil value: "+Ceil);

// Task2.
var userInput = +prompt("Enter your number");
var Round_number = Math.round(userInput);
var Floor_number = Math.floor(userInput);
var Ceil_number = Math.ceil(userInput);
document.write("<br><br>number: " + userInput);
document.write("<br>round off value: "+Round_number);
document.write("<br>floor value: "+Floor_number);
document.write("<br>ceil value: "+Ceil_number);

// Task4.
var Random = Math.random()*7
document.write("<br>random dice value: " + Random);
var Raddom = Math.random()*7
document.write("<br>random dice value: " + Raddom);

//Task5.
var A = prompt("Enter heads user: ");
var B = prompt("Emter tails user: ");
var random = Math.random()*2
var Floor = Math.floor(random);

if(Floor===0){
    alert(A+" heads user wins")
}
else{
    alert(B+" tails user wins")
}

//Task6.
var Random_number = Math.random()*100
if(Random_number<100){
    document.write("<br><br>randm number between 1 and 100: " + Random_number)
}

// Task7.
var weight = prompt("Enter your weight");
var Parse = parseInt(weight);
document.write("<br><br>The weight of user is   " + weight  )



// Task8.
var random_number = prompt("Enter a number between 1 and 10:");
if(random_number<10){
    alert("congratulation! you input the right number")
}
else{
    alert("try again")
}