console.log("hello");
//alert("WELCOME TO THE PAGE");

//operations
//ARTHEMATIC 
let number1=6;
let number2=4;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

//assignment operators
let number3=5;
number3+=3;
console.log(number1);
number3-=5;
console.log(number3);
number3*=5;
console.log(number3);
number3/=3;
console.log(number3);

//comparision operators
let numbera=5;
let numberb=6;
console.log(numbera==numberb);
console.log(numbera===numberb);
console.log(numbera<numberb);
console.log(numbera>numberb);
console.log(numbera!=numberb);

//logical operators
let num1=8;
if(num1<9 && num1>5){
    console.log("true");
} 
if(num1==8 || num1<6){
    console.log("false");
}
console.log(!(num1));

//functions
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to GeeksforGeeks");
 
}
let nameVal = "Admin";
console.log(welcomeMsg(nameVal));

//loops
let zero=9;
while(zero<=10){
    console.log(zero);
    zero++;
}

for(i=0;i<=10;i++){
    console.log(i);
}

//strings
string="hello world";
console.log(string[0])
//methods
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len=length.text;
console.log(len);

const message = "ball bat";
let result = message.replace('b', 'c');
console.log(result);

const message = "JavaScript is not Java";
const index = message.indexOf("va");
console.log('index: ' + index);

const message = "javascript is fun";
const upperMessage = message.toUpperCase();
console.log(upperMessage);

const message = "JAVASCRIPT IS FUN";
const lowerMessage = message.toLowerCase();
console.log(lowerMessage);

const message = "JavaScript is fun";
let result = message.includes("Java");
console.log(result);

const holiday = "Happy holiday!";
const result = holiday.repeat(3);
console.log(result);

const message = "JavaScript is fun.";
let result = message.substring(0, 10);
console.log(result);

const message = "ball bat";
let result = message.replaceAll('b', 'c');
console.log(result);

const message = "JavaScript::is::fun";
let result = message.split("::");
console.log(result);






