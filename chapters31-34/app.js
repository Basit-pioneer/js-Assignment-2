// CHAPTERS 31-34
//(DATE METHODS)

// Task1.
var a = new Date();
document.write(a);

//Task2.
var b = a.getMonth();
if(b == 0){
document.write("<br><br>currnt month: january")
}
if(b == 1){
    document.write("<br><br>currnt month: febuary")
    }
else if(b == 2){
    document.write("<br><br>currnt month: march")
}
else if(b == 3){
    document.write("<br><br>currnt month: April")
}
else if(b == 4){
    document.write("<br><br>currnt month: may")
}
else if(b == 5){
    document.write("<br><br>currnt month: june")
}
else if(b == 6){
    document.write("<br><br>currnt month: july")
}
else if(b == 7){
    document.write("<br><br>currnt month: august")
}
else if(b == 8){
    document.write("<br><br>currnt month: september")
}
else if(b == 9){
    document.write("<br><br>currnt month: october")
}
else if(b == 10){
    document.write("<br><br>currnt month: november")
}
else if(b == 11){
    document.write("<br><br>currnt month: december")
}

//Task3.
var atNow = new Date();
var Stringe =  atNow.toString();
var slicing = Stringe.slice(0,3);
document.write("<br>Today is "+slicing);

// Task4.
if(slicing == "Sat" || slicing == "Sun" ){
    document.write("<br><br>"+"It's fun day")

}
else{
    document.write("<br><br>it's not fun day")
}

// Task5.
var Slicing = Stringe.slice(8,10);
if(Slicing<16){
    document.write("First fifteen days of the month")
}
else{
    document.write("<br><br>Last days of  the month")
}

// Task6.
var time = new Date();
var Time = time.getTime(); 
var calcMint = Time/60;
document.write("<br><br>current Date: "+time);
document.write("<br>Elapsed milliseconds since january 1,1970: "+Time);
document.write("<br>Elapsed minutes since january 1 1970: "+calcMint);

// Task7.
var rightNow = new Date();
 Tostring = rightNow.toString();
 var Slice = Tostring.slice(16,18)
if(Slice>=15){
    alert("it's AM");
}
else{
    alert("it's PM") 
}

// Task8.
var lastYear = new Date("Dec 31,2020");
document.write("<br>"+lastYear);

// Task9.
var firstRamdan = new Date("May 2,2020");
var milli = firstRamdan.getTime()
var days = milli/1000/60/60/24

var Now = new Date();
var Milli = Now.getTime();
var Days = Milli/1000/60/60/24
var daysPast = Days - days;
document.write("<br>"+daysPast+" days have passed since 1st Ramadan,2020");

// Task10.
var referenceDate = new Date("Sat,Dec 05,2015");
var Calcmili = referenceDate.getTime();
var calcseconds = referenceDate/1000
document.write("<br><br>On reference date at "+referenceDate+",<br>")
document.write(calcseconds+" seconds had passed since beginning of 2015.")

// Task11.
var Now = new Date();
var sTring = Now.toString();
var slice1 = sTring.slice(0,15);
var slice2 = sTring.slice(19,)
var sLice = sTring.slice(15,18);
var subs = sLice -1
document.write("<br><br>current date: "+Now+"<br>1 hour ago, "+slice1+" "+subs+" "+slice2)

// Task12.
var Now = new Date();
var back100Years = new Date("Sun,Jun 21,1920")
document.write("<br><br>current date: "+Now+"<br>"+"100  years back,.It was "+back100Years)

// Task12.
var userAge = +prompt("Enter your age");
var Now = new Date();
var GetTime = Now.getTime();
var CalC = new Date(userAge)
var TimeGet = CalC.getTime();

var calculate  = GetTime - TimeGet
var calculates = calculate/1000/60/60/24/365 
document.write(calculates);
