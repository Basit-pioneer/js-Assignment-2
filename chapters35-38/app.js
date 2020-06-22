// CHAPTERS 35-38
// (FUNCTIONS)

// Task1.
function add() {
    var Now = new Date();
    document.write(Now);
}
add();

// Task2.
function Input() {
    var firstName = prompt("Enter your first name");
    var secondName = prompt("Enter your second name")
    document.write("<br><br><h2>Welcome "+firstName+" "+secondName+"</h2>")
}
Input();
 
// Task3.
function Sum(num1,num2) {  
    alert(num1+num2);
}
Sum(+prompt("Enter your first number"),
+prompt("Enter your second number"))

// Task4.
function Calculater(numOne,oprater,numTwo) {
    if(oprater == "+"){
        alert(numOne + numTwo)
    }
    else if (oprater == "-"){
        alert(numOne - numTwo)
    }
    else if(oprater == "*"){
        alert(numOne * numTwo)
    }
    else if(oprater == "/"){
        alert(numOne/numTwo)
    }
    else{
        alert("Please! write correct operater")
    }
  
}
Calculater(
    +prompt("Enter your first number"),
     prompt("Enter your desired Operater"),
    +prompt("Enter your second number")
)


//Task5.
function square(a) {
    var c = a*a
    alert(c)
}
square(+prompt("enter your number"));

//Task7.
function counting(x,y) {
    for(var i=x;i<y;i++){
        document.write("<br>"+i)
    }
}

counting(+prompt("Enter your first number"),+prompt("Enter second num number"))

// Task8.
function nestedSquare(Base,perpendicular) {
    var hypotenuse =document.write(Base*Base+perpendicular*perpendicular)
    
}

function Calc(Base,perpendicular) {
   
    nestedSquare(Base,perpendicular)
}
Calc(+prompt("Enter Base"),+prompt("Enter perpendicular"));

// Task9.
function area(_width,_height) {
    A = _width * _height
    document.write("The total area is: "+A)
}
area(+prompt("Enter width"),+prompt("Enter height"))

// Task10.
function palindrome(pld) { 
    for(var i=pld.length;i<=pld.length ;i--){
        if(i <0){
            break
        }
        var doc = document.write(pld.charAt(i))
    }

    if(doc == pld){
    alert(pld + " is palindrome word")
    }
    else{
        alert(pld+" is not a palindrome word")
    }
}
palindrome(prompt("Enter your word"));

