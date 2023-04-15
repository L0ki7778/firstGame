

// Datentypen
{
    let Faden = 'Apfel ist ein String.';
    var zahli= 5;
    let arrri= [1,2,3,"vier","fünf","sechs"];
        if (Boolean(5+5==12)){
    console.log("True");
        }else{
    console.log("False. The correct answer is 10!");
        };
    
     let mappe = new Map([['Auto','Reifen'],['Schlüssel', 'Loch'],['Wagen', 'Heber']]);   

    let Seti = new Set(["rot", "lila", "blau", "grün"]);


    let dim3 =
  [[[1,2,3],
    [4,5,6],
    [7,8,9]
    ],[
    [10,11,12],
    [13,14,15],
    [16,17,18]
    ],[
    [19,20,21],
    [22,23,24],
    [25,26,27]
    ]] ;

console.log(Faden);
console.log(zahli);
console.log(arrri[5]);
console.log(mappe.get('Schlüssel'));
console.log(Seti);
console.log(dim3[2][1][0]);

//Funktionen

function nopara() {
    if(27*(1/3)==3);
    console.log("True story");
    };

nopara();

function Person(name) {
    console.log(`${name} sagt: Knirpsy! Ich weiß garnicht,warum du immer auf Bäume kletterst! Du bist doch eine Schildkrödde!`);
    };

Person(`Frau Mümmel`)

function mathe(a,b,c) {
    return(a*b*c);
}
console.log(mathe(2,4,6));
}

let array=["null","eins","zwei","drei","vier","fünf"];

array.forEach((key,value) => {
    console.log(`${key}: ${value}`);
});

let age=12;
while(age<50) {
    console.log("You´re still too young!");
    age++;
    if(age==18){
        console.log("Congrats for being old enough!");
        break;
        }
}

let color="yellow";

switch(color){
    case "blue":console.log("this is blue");
    break;
    case "red":console.log("this is red");
    break;
    case "green":console.log("this is green");
    break;
    default: console.log("color not found");
}

 age=42;
 let isAdult =(age<18) ? "Too young": "Old enough!";
 console.log(isAdult);

 let bill= 1800;
 bill=(bill>=1500) ? bill*0.85:bill;
 console.log(bill);

 for(let i=1;i<10;i++){
    console.log(i);

 }
 for(let i=0;i<=20;i+=2){
    console.log(i);
 }

 let x=5
 for(let i=0;i<10;i+=2){
    x+=i;
 }
 console.log("25=" + x);

 /////Bullet-shot-example

 for(let i=5;i>=5;i-=1){
    console.log(`Bullets left : ${i}`);
 }

 let num=5;

 while(num<50){
    if(num==40){
    break};
    console.log(num);
    num+=5;
 }
 let sum=0;
 for(let i=0;i<=10;i++){
    if(i==1){
        continue};
    if(i==3){
        continue;
    }if(i==5){
        continue;
    }if(i==7){
        continue;
    }if(i==9){
        continue;
    }
    sum+= i;
 }console.log(sum);

 for(let i=0;i<=10;i++){
    if(i%2!=0){
        continue;
    }console.log(i);
 }
 
 

function newFunction() {
    document.body.innerHTML = "Some text";
}

 function divide(x,y){
    return(x/y);
 }
{
 var Obj = {
    Name: "Bill",
    Age: 27, favColor: "brown", favFood:"Banana" 
 };
 document.write("Übung macht den Meister");
}
console.log(Obj.Name);
 console.log(Obj.Name.length);
 console.log(Obj["Name"],["Age"],["favFood"]);

 function Leute(Name, Age, FavorC, Food){
    this.name=Name;
    this.age=Age;
    this.favorC=FavorC;
    this.food=Food;
    this.changeName=function(Name){
        this.name=Name;
    };
    this.changeAge=function(Age){
        this.age=Age;
    };
    this.changefColor=function(newColor){
        this.favorC=newColor;
    };
    this.changeFood=function(newFood){
        this.food=newFood;
    };
 

};


 
var Tom=new Leute("Tom", 22,"lila", "Schnitzel");
console.log(Tom.favorC);
Tom.changefColor("green");
console.log(Tom.favorC);

Tom.changeName("Paul");
console.log(Tom.name);
console.log(Tom.age);
Tom.changeAge(33);
console.log(Tom.age);


var c1=[1,2,3,4];
var c2=["1","2","3","4"];

var courses=c1.concat(c2); //.concat zum zusammenfügen von arrays
console.log(courses);


{
{
function main(){
var number = 79;

console.log(calcCent(number))}

};
function calcCent(a){
    
    return(Math.ceil(a/100));
};
main();
}

function myalert(){
    alert("I´m not snoozable!");}

//setInterval(myalert, 5000) "Comment wegnehmen, und du hast ständig push-ups"


function getTime(){
let d= new Date();
let day = d.getDay();
let hours = d.getHours();
let minutes= d.getMinutes();
console.log(Date(day, hours, minutes))};

console.log(getTime());
console.log(getTime());

function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return (2023 - this.age);
  }

  pers1=new person("Jerry");
  pers1.age=23;
  console.log(pers1.yearOfBirth());
  pers1.yearOfBirth=2000;
  console.log(pers1);

  //let g=prompt("enter a number"," ");
  //let answer=Math.sqrt(g);
  //alert("Ther squareroot of "+g+" is "+answer);

  function main() {
    var increase = 9;
    var prices = [98.99, 15.2, 20, 1026];
    
    
    for(i=0;i<prices.length;i++){
        console.log(prices[i]+increase);
    }
}   
   
let p =document.createElement("p");
let node = document.createTextNode("node im p element");
p.appendChild(node);

