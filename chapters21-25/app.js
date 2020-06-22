// CCHAPTERS#21-25
// (STRING METHOD)

// Task1.
var first_Name  = prompt("Enter your first name");
var last_Name = prompt("Enter your last name");
var full_Name = alert("welcome "+ first_Name+" "+last_Name);

// Task2.
var favourite_mobile = prompt("Enter your favourite mobile model");
var string_length =  favourite_mobile.length;
document.write("My favourite mobile is: "+favourite_mobile+" length of string: "+string_length)

// Task3.
var country = "pakistani";
var indxNum = country.indexOf("n");
document.write("string: "+country);
document.write("<br>index of 'n': "+ indxNum);

// Task4.
var word = "Hello world";
index_Num = word.indexOf("l")
document.write("string: "+word);
document.write("<brr>Last index  of 'l': "+index_Num);

//Task5.
var name =  "pakistani";
document.write("<br>srting pakistani: "+"<br>"+"character at index 3: "+ name.charAt(3))

// Task7.
var city = "hyderabad";
var replace = city.replace("hyderabad","islamabad");
document.write("city: Hyderabad<br>After replacement: "+replace);

//Task8.
var message = "Ali and sami are best friends. they play cricket and football together.;"
var message1 = message.replace(/and/g,"&");
document.write(message1)

//Task9.
var value = "472";
var  num = Number(value);
document.write("<br>value: "+value+"<br>Type: "+typeof(value)+"<br>value: "+num+"<br>Type: "+typeof(num))

//Task10.
var user_Input = prompt("Enter your word");
var upper = user_Input.toUpperCase();
document.write("User input: "+user_Input);
document.write("<br>Upper case: "+upper);

//Task11.
var input = prompt("Enter your word");
var firstChar = input.slice(0,1);
var othersChar = input.slice(1);
var upper = firstChar.toUpperCase();
var lower = othersChar.toLowerCase();
document.write("<br>User input: "+input+"<br>Title case: "+upper+lower)

//Task12.
var num = 35.36;
var stringe = num.toString()
document.write("<br>Number: "+num+"<br>Result: "+stringe);

//Task13.
var UserName = prompt("Enter your User name:");
var variables = []
for(var i=0;i<UserName.length;i++){
    for(var j=0;j<UserName.length;j++){
      if(variables[j]==UserName[i]){
          alert("please enter valid user name")
      }
    }
}

//Task14.
var A = ["cake","apple pie","cookie","chips","patties"];
var B = prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");
var Lower = B.toLowerCase();

for(var i=0;i<A.length;i++){
    for(var j=0;j<A.length;j++){
        if(A[j]==Lower){
         alert(B+" is available at "+j+" in our bakery")
        }
    }
        alert("we are sorry "+B+" is not available in our bakery")
}

//Task17.
var Userinput =  prompt("Enter your  word");
var Spliting = Userinput.split("");
document.write(lastWord);
var lastWord = Spliting.pop();
document.write("<br><br>User input: "+Userinput+"<br>"+"Last character of input: "+lastWord);

//Task18.(not complete)
var sentence = "The quick brown fox jumps over the lazy dog."
var loweer = sentence.toLowerCase();
var splits = loweer.split("");
document.write(splits);
document.write(splits.indexOf());