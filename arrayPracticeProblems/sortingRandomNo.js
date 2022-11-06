let threeDigitNoArr= new Array();
for(i=1;i<=10;i++){
var x= Math.floor(Math.random()*1000); // generte 3 digit random no.    
threeDigitNoArr.push(x);  // storing 3 digit ranon no in an array

}

threeDigitNoArr.sort();
    
console.log("SECOND LARGEST : "+threeDigitNoArr[8]+"SECOND SMALLEST : "+threeDigitNoArr[1]);

for(var x of threeDigitNoArr)
console.log(x);

//----
let twiceArray= new Array();
//const num1= prompt("Enter a lower limit for a range of number");
//const num2= prompt("Enter a upper limit for a range of number");
num1=29;
num2=85;
for(i=num1; i<=num2;i++){
    if(i%11==0)
twiceArray.push(i);
}
for(var x of twiceArray)
console.log(x);
//-------

let myMap= new Map();
for(i=0; i<=1; i++){
var x= (Math.floor(Math.random()*10)%6)+1;
if(myMap.has(x))
myMap.set(x,myMap.get(x)+1);

else
myMap.set(x,1);

i=0;
if(myMap.get(x)>=10){
    i=2;
}

console.log(x);
}

console.log(myMap);