/*window.onload = function()
{

let t=setInterval(move, 10);


//Starting position
let pos=0;

///box verknüpfen

let box = document.getElementById("box");

function move(){
    if(pos>=150){
       clearInterval(t)
     }else {
     pos+=1;
     box.style.left=pos+"px";
        }
    }
    
}

let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

//your code goes here
let total= Object.assign({}, basic, advanced);

for(let ex in total) {
    console.log(total[ex])
};

let animals=["ape", "bear", "cat", "dog", "elephant", "frog"]
console.log(animals)
console.log(animals.slice(1,-2));

 
class
 Human {
  constructor(name) {
    this.name = name;
  }
}
class Student 
extends
 Human {
  constructor(name, age) {    
    super(name);// super stellt verbindung zum parent(this.name=name) her. no super=error

    this.age = age;
  }
}
let stud= new Student("Ben", 22);
let Adam= new Human("Adam", 10000);
console.log(Adam);
console.log(stud);

function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
      if (work === "")
          reject(Error("Nothing"));
      setTimeout(function() {
          resolve(work);
      }, 1000);
  });
}


//PROMISES MIT EINGEBAUTEM DELAY
function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
      if (work === "")
          reject(Error("Nothing"));
      setTimeout(function() {
          resolve(work);
      }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
}, function(error) {
  console.log(error);
})
.then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});
console.log("End");*/
class pokemon {
  constructor(name, element){
      this.name=name;
      this.element=element;
  }
  log () {
      console.log( "Das Pokemon " + this.name + " hat das Element " + this.element);
  };
};

Pikachu = new pokemon("Pikachu","Elektro");
Schiggy = new pokemon("Schiggy","Wasser");

Pikachu.log()
Schiggy.log()

class wpoke extends pokemon{
  constructor(name, element, art){
    super(name, element)
    this.art=art;
  }
  call(){
    console.log("Das Wasserpokemon " +this.name + " sieht aus wie ein(e) " +this.art);
  };
  
}
Schiggy = new wpoke("Schiggy", "Wasser", "Schildkröte");
Schiggy.call()
Karpador= new wpoke("Karpador", "Wasser", "Fisch");
Seeper= new wpoke("Seeper", "Wasser", "Seepferdchen");
Tentacha = new wpoke("Tentacha", "Wasser", "Qualle");

Tentacha.log()
Tentacha.call()

class Tiere{
  constructor(säuger, fell, länge){
    this.säuger=säuger;
    this.fell=fell;
    this.länge=länge;
  } 
  
length(){
if (this.länge === "lang"){
  console.log(this.säuger +" hat ein langes Fell.")
}else if (this.länge==="kurz"){
console.log(this.säuger + " hat ein kurzes Fell.")
}else{console.log(this.säuger +" hat kein Fell")}}
}


Hund=new Tiere("Hund", "hat Fell", "lang");
Hund.length();
nacktmull=new Tiere("Nacktmull", "nein", 0);
nacktmull.length();


let Katze={säuger: "Katze", Fell: "ja", länge: "kurz"};

Katze=new Tiere;
Katze.length()
console.log(Katze);

class family{
  constructor(fname, name, role){
    this.fname=fname;
    this.name = name;
    this.role = role;
  }
  post(){
    if(this.role === "parent"){
      console.log(this.name + " " + this.fname + " is the parent of Johanna, Luisa and Julia.");
    }else if(this.role === "child"){
      console.log(this.name + " " + this.fname + " is the child of René and Jessica.");
    };
  };
};

let Jessica = new family("Heller", "Jessica", "parent");
let René = new family("Heller", "René", "parent");
let Luisa = new family("Heller", "Luisa", "child");
let Julia = new family("Heller", "Julia", "child");
let Johanna = new family("Lakaschus", "Johanna", "child");

Jessica.post();
René.post();
Luisa.post();
Johanna.post();
Julia.post();

class pet extends family{
  constructor(fname, name, role, petKind){
    super(fname, name, role);
    this.petKind = petKind;
  }
  postPet(){
    if(this.role === "pet"){
      console.log(`${this.name} is the ${this.petKind} of the ${this.fname} family.`)
    }
  }
}

let Luna = new pet("Heller", "Luna", "pet", "dog");
Luna.postPet();

let person={
  
  calcAge(){
    return 2023 - this.birthYear;
    }, 

  getStats(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  }

};

let Mark = Object.create(person);
Mark.getStats("Mark", "male", 1989);
console.log(Mark)
console.log(Mark.calcAge())
