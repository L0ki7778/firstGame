let eineVariable = "test2";

/*
lauter sachen reinschreiben

1. Datentypen?

String, Integer, Array, Boolean, Float, Double, Long, Map, Set  und mehrdimensionale Arrays

1.1 wie deklariere ich eine Variable

Antwort: "var" deklariert eine Vaiable die jederzeit neu deklariert werden kann. "let" deklariert eine Variable in einem Block ( "{}" ),
 dessen wert jederzeit geändert, aber im gleichen Block nicht neu deklariert werden kann.
"const ist eine nicht mehr veränderbare deklaration von variablen"

2. Funktionen?

Funktionen ohne Parameter

Funktionen mit Parameter(n)

Funktionen mit Rückgabewert


Nummer DAZWISCHEN:

Schleifen / Loops

if/else



2.1 Wie deklariere ich eine Funktion?

3. Klassen?

3.1 Wie deklariere ich eine Klasse? class content=

3.2 Wie deklariere ich eine Klasse mit Properties?

3.3 Wie deklariere ich eine Klasse mit Funktionen als Properties?

4. Objekte?

4.1 Wie erstelle ich ein Objekt ohne Klasse?

4.2 Wie erstelle ich ein Objekt, welches einer eigenen vordefinierten Klasse angehört?

4.3 Vererbung von Klassen

5. http request

Daten von einer REST API abrufen und darstellen können (json placeholder google)

INKLUSIVE: JSON



6. CANVAS


7. ARCADE RACER von Nico nachbauen



WICHTIG!!!!

1. kommentiere jede Zeile Code mit einem Vermerk, was du da gerade gemacht hast

2. Copy & Paste ist VERBOTEN!!!!!!!!!!

3. Frustrationstoleranz wird erhöht :D hf
*/



let meinInteger = 4; // eine Variable erstellt mit Wert: 4





// START!

//1. DataTypes

//Numbers/Integers


{let x=35;
console.log(x)}; //x wurde durch let in einem block deklariert. im nächsten Block kann man "x" neu verwenden
{
let x=34.00; //alle Nummern sind floating (dezimal); werden nicht mehr im code separiert sondern eigenständig zugeordnet.

let x1=34;

let x3=37.35; //hier ein wert nach der Kommastelle, also auch als floating angezeigt


console.log(meinInteger, x, x1, x3); // console.log() zeigt den wert im browser

 x=85;  //Variable kann nicht neu deklariert mit "let" werden. "Let" erstellt die Variable.
 // Wert kann später neu zugeordnet werden, da JavaScript linear ausgeführt wird

 console.log(x); // x hat einen neuen wert

 x=5;
 let y=7;
 let z=y+x;

 console.log(z);  //Output 12
 //x hat wieder einen neuen wert. ergebnis wird im code(log) angezeigt. zwischenschritte bleiben unerwähnt.


//RECHENOPERATIONEN/SHORTHAND

let f= 15; // var deklariert
console.log(f); // output
console.log(f--); // output, dann var -1
console.log(f); //output nun eins weniger, also 14
console.log(--f); //output sofort eins weniger

// funktioniert auch mit ++a/ a++


// % wird genutzt umauszugeben, wie viele ganze werte übrig bleiben, beispiel: 134 bälle sollen in eine Kiste, die jeweils 7 bälle fassen

//bsp.:
let ball= 134;
let box= 7;
console.log(ball%box,"Ball bleibt übrig");
        //anzahl "ball"%Volumen-des-Behälter "box"

//

let g= 2;
console.log(g+=2); // ist eine shorthand-variant für:


/*Bsp.:*/score=2;
score+=2;   // der wert der var wird nun nach jedem output erhöht
console.log("score =", score);



console.log(g*2);
console.log("g=", g);

//EXPONENTIAL-RECHNUNG

let five=5;
let two=2;

console.log(five**two, "fünf hoch 2");

let _x=16;
g=1/2; //durch das potenzieren von 1/2 ziehen wir die ²Wurzel
j=1/3

console.log(_x**g, "ist die Wurzel aus 16");
console.log(27**j, "ist die ³wurzel aus 27")







 //Strings


 let firstName="René"; //Strings sind Abfolgen von Zeichen, müssen in (' '), oder (" ") deklariert werden.
 let lastName="Müller";
 let fullName=firstName+lastName; //Output: RenéMüller. Leerzeichen wird durch +(" ")+ hinzugefügt. Bsp.: =firstName+ ""+lastName;


 console.log("\t This is a tab"); //tap = \t
 console.log('mit " backslash-n" kann man einen breakpoint/absatz \n erstellen'); // \n gleich absatz
 console.log(`mit back-ticks
 kann man ohne
 backslash n absätze mit "Enter" nutzen`);

 //template literals
 let bus= "Bus";
 let bhf= "Bahnhof";
 console.log(`${bus}${bhf} mit template literals lassen sich auch variablen in ein String einfügen`);

 console.log(firstName, lastName, fullName);

 fullName=firstName+" "+lastName;

 console.log(fullName);

 let name="'Johnny'";

 console.log(name); // Output 'Johnny'; durch Verwendung unterschiedlicher ""/'' werden die jeweils innen liegenden Anführungszeichen für den Output übernommen.


//Booleans

//= das Ergebnis von Vergleichen; Operators sind 
//"<" "<="  ">" ">=" 
//"=="(equal)
//"&&" (AND= beide Operationen müssen stimmen)
//"||" (OR= eine von zwei Operationen muss stimmen)
//"!" (NOT='True' wenn das Ergebnis falsch ist)
//"===" Strict equality=ALLES (z.B. Wert und Datentyp müssen übereinstimmen) SPÄTER lernen. [parseInt wandelt strings in int um]
//"!==" Strict Inequality= true, wenn weder Wert noch Datentyp übereinstimmen(Beispiel oben)


//Beispiele

// </>

let a=5;
let b=7;
if (a<b){
    console.log(true);
}else{                      //Output: true
    console.loge(false);
}

if (a>b){
    console.log(true);
}else{                      //Output: false
    console.log(false);
}

// <=/>=

if (a<=b){
    console.log(true);
}else{                  //Output:true
    console.log(false);
}

if (a>=b){
    console.log(true);
}else{                  //Output:false
    console.log(false);
}

let c=12;

if (c-a==b){
    console.log(true);
}else{                  //Output:true
    console.log(false);
}

if (b-a==c){
    console.log(true);
}else{                  //Output:false
    console.log(false);
}


//AND &&

if (a<10 && y>5){
    console.log("AND true"); // beide operations stimmen, also true
}

// OR ||


if (a+b==c || c+b==a){  //5+7=12 aber 12+7 ist nicht 5
    console.log("eine aufgabe stimmt");
}


//NOT "!"


if (!(a>c)){
    console.log("NOT is true"); //doppelte verneinung: 5>12=flasch, aber "!"(5>12)= "5 ist NOT größer als 12", also true
}else{
    console.log(false);
}



//Array

//ist eine geordnete liste von werten

let automarken=["BMW", "Mazda", "VW", "Mercedes", "Tesla", 5]; //strings and numbers können zusammen eingetragen werden

console.log(automarken);
console.log(automarken[3]);     //die liste beginnt immer mit "0". Mercedes(4) bekommt also die Nummer "3"
console.log(automarken[0]);

//float und double gehören aktuell zu number

/*
// Deklaration einer float-Variablen
var myFloat = 3.14;                     float nutzte man für dezimal-zahlen bis zur zweiten nachkomma-stelle

// Deklaration einer double-Variablen
var myDouble = 3.14159265359;           double nutzte man für dezimal-zahlen mit mehr als zwei nachkomma-stellen
*/


//long
var n=123132123132123123132123132123123;
//long braucht erklärung durch nico
console.log(n);

};  // Ich schließe den Block, um alle let variablen wieder nutzbar zu machen


{let x=1
if (x==1);
console.log("Variable x ist wieder nutzbar")};






//Map

//Map ist ein assoziatives array; bedeutet, es ist eine auflistung, deren werte durch einen schlüssel freigegeben werden. map ist ein objekt

{
    let myMap = new Map(); // new map erstellt eine neue map; nicht immer die () bei new Map() vergessen


myMap.set('Schlüssel', 'passt ins Schlüsselloch');  //als erstes kommt immer der key, dann value


myMap.set('Autoschlüssel', 'passt nicht ins passt nicht ins Türschloss'); //alle key-value paare können einzeln durch .set eingegeben werden



console.log(myMap.get('Schlüssel')); // durch .get + ('key') wird der value ausgegeben; Output:"passt ins Schlüsselloch"
console.log(myMap.get('Autoschlüssel'));

let x = myMap.get('Schlüssel'); //variable wurde durch .get als Schlüssel deklariert....

console.log(x); //... und führt zum korrekten value-output: passt ins Schlüsselloch







//zum vereinfachen erst ein array erstellen. nicht wieder vergessen '' bei jedem key&value zu setzen

let maparray= [['Apfel', 'rote Frucht'], ['Banane', 'gelbe Fruchte'], ['Gurke', 'grünes Gemüse'], ['nomeat', 'Vegetarismus ist eine Essbehinderung']];



let fruchtmap = new Map();
maparray.forEach((pair)   /*für jedes paar aus dem array*/ => {
    fruchtmap.set(pair[0], pair[1]); //bekommt der key den wert [0] und der Value den wert [1] in den "[]"-klammern
});

console.log(fruchtmap.get('Banane'));//nicht wieder vergessen den key auch hier in '' zu setzen: 'key'/'Banane'

console.log(fruchtmap);


//zu spät gesehen. map gleich mit array erstellen: new Map([array])


let shorthand = new Map([['a', '1'], ['b', '2'], ['c', '3'], ['d', '4']]);

console.log(shorthand.get('b'));



console.log(fruchtmap.size); //.size wird verwendet um die map-größe wiederzugeben(Output). es gibt insgesamt 4 paare

let  a= new Map();
    fruchtmap.forEach((key, value) => {
        a.set(key, value);
    });

    console.log(a);

    a.clear(); //.clear() scheint eine map entgültig zu löschen, auch wenn ich versuche, eine neue Variable mit der map zu deklarieren
                // wenn ich eine neue map new Map() erstelle und deklariere und mit .foreach den inhalt kopiere, bleibt nach .clear die alte map erhalten
    console.log(a);


console.log(fruchtmap);





//.delete     löscht einen schlüssel und den damit verbundenen wert aus der map

let löschmap= new Map();

löschmap.set('a', '1');
löschmap.set('b', '2');
löschmap.set('c', '3');

console.log(löschmap); //Output komplette map

löschmap.delete('b');

console.log(löschmap); //Output: b fehlt samt wert


//.has  ist im grunde ein Boolean der prüft, ob der Schlüssel in der map vorhanden ist.


console.log(löschmap.has('a')); //true, key vorhanden

let gotkey = löschmap.has('a'); //.has('a') deklariert

let nokey = löschmap.has('b'); //´.has('b') deklariert, was ja gelöscht wurde

console.log(gotkey); // true

console.log(nokey); // flase, da gelöscht




//.foreach  ist eine Methode um jeden Eintrag in einer Map zu 
//iterieren=prüft jedes element und führt die angestrebte aktion für die gesuchten elemente aus

//.forEach zählt zu den schleifen. ich mache damit später weiter



shorthand.forEach((key, value) => {
    console.log(`${key} = ${value}`);
});


shorthand.forEach(function(value, key) {
    console.log(`${value} = ${key}`);
})




}

// Set- ist eine ungeordnete Liste, bei die mögliche elemente nur einmal inkludiert

{

   let farben= new Set(); // Set wird anders als Array in () deklariert und wie bei Map kann man elemente hinzufügen

   farben.add("rot");
   farben.add("blau");
   farben.add("gelb");
   farben.add("rot"); // rot ist schon vorhanden und wird ignoriert

   if(farben.has("rot")) {
    console.log("rot ist enthalten");
   }

   console.log(farben); // es werden nur drei elemente ausgegeben, da dopplungen ignoriert werden


   //shorthand für new Set

   let farben2= new Set(['braun', 'lila', 'grün', 'pink', 'magenta']);

   console.log(farben2);

   if(farben2.has('lila')) {
   console.log('lila ist enthalten')};
   


}

//mehrdimensionale Arrays


{

let mx = [ // gemachter syntax-fehler: im console.log(mx[][]); standart() nach log und in der klammer die Matrix mit anschließenden koordinaten in jeweils einer [];
    [1, 2, 3 ],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(mx[1][1]);
console.log(mx[2] [0]);

let mat = [
    [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ],
    [
    [10,11,12],
    [13,14,15],
    [15,16,17]
    ],
    [
    [18,19,20],
    [21,22,23],
    [24,25,26]
    ]
];

console.log(mat[0][2][1]); //output: 8; von einer dreidimensionalen Matrix/multidimensionales Array



}

{
//FUNKTIONEN


//Funktion mit parameter und return
function fkt(a,b){        // zunächste wird eine Funktion erstellt. Wie Mathe Sek I. Variablen werden benannt und die operation wird durch "return" festgelegt.
    return(a+b);
}

let x=fkt(13,27);       //dann erstellt man eine variable und fügt den parametern der funktion werte hinzu.

console.log(x);         // im console.log wird dann das ergebnis der funktion mit den werten der var "x" ausgegeben




/*2. Funktionen?

Funktionen ohne Parameter

Funktionen mit Parameter(n)

Funktionen mit Rückgabewert*/


// Funktion mit Rückgabewert --------- eigenes Beispiel

function mathe(a,b,c,d) {
    return(a*b*c/d);
};

let mathex=mathe(2,3,4,10);
console.log(mathex);
//////////////////////////////////////////////////

//funktion ohne Parameter

let noP= function (){`Ich bin eine funktion ohne Parameter`}
;

console.log(noP);

let counter=1;

function mal2(){
counter*=2;
}

mal2(),
console.log(counter);
console.log(counter);



// funktion mit parameter, ohne return

function Gruß(Name)  {
    console.log(`Guten Tag ${Name} du alte Socke!`);
}

Gruß("Toni"); // Fehler-Korrektur:  die funktion wird geschrieben, () gesetzt und der Parameter in ""----> function("");

}

{
    let person = {//kopiert von gpt//////////////////////////////////////////////////////////
        name: "Max",/////////////////////////////////////////////////////////////////////////
        age: 30,    /////////////////////////////////////////////////////////////////////////
        gender: "male"///////////////////////////////////////////////////////////////////////
      };               //////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////
      for (let propertyName in person) {/////////////////////////////////////////////////////
        let prop = person[propertyName];/////////////////////////////////////////////////////
        console.log(propertyName + ": " + prop);/////////////////////////////////////////////
      }//////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////


//FOR LOOP- Var kann in For-loop deklariert werden; wird genutzt, wenn Anzahl der Iterationen bekannt ist

for (let i=0; i<=5; i++) {console.log(i)}; // loop geht solange, bis die Bedingung nicht mehr erfüllt ist


//WHILE LOOP- var muss vorher deklariert werden, wird genutzt, wenn Anzahl der iterationen nicht bekannt ist.
let i = 1;

while (i<10){
console.log(i); i++;        //while geht so lang weiter, BIS die Bedingung erfüllt ist
}


//DO_WHILE-LOOP - verhält sich wie WHILE, allerdings wird der erste Codeblock auch ausgeführt, wenn die Bedingung flasch ist

i=0;

do{
    console.log("start",i);
    i++;
} while (i<10);


//FOR-IN LOOP   -   wird genutzt, um eigenschaften eines objekts zu iterieren

const exa = {a: 1, b : 2, c : 3};

for (let key in exa) {
  console.log(`${key}: ${exa[key]}`);
}



/////////////////////////////////////////////////////////////// ÜBUNG

for(let zahl=10; zahl>1; zahl--) {
    console.log(zahl);
}

////////While//////////
let z=20;

while(z>10) {
    console.log(z);
     z--;
}

///////////DO-WHILE///////////
let u=100;

do{console.log(u);
u-=5;}
while(u>0);
}
{
//////////FOR-IN/////////////////// FOR-IN iteriert den property und gibt diesen wieder

let frucht={rot: "Apfel", gelb: "Banane", grün: "Melone", lila: "Pflaume"};

for(let farbe in frucht){
    console.log(`${farbe}: ${frucht[farbe]}`);
}


///////FOR-OF//////////////// FOR-OF iteriert die iterierbaren Elemente und gibt den value wieder

let poke="Raupy Safcon Smettbo Taubsi Tauboga Tauboss";

for (einzeln of poke){
    console.log(poke);
}

//Unterschied FOR-IN FOR-OF an einem Array

let Array=[5,10,15,20,25,30,35];

for(let In in Array) {
    console.log(In); //// output: der index(also Property ohne value(die aktuelle zahl))
};

for(In of Array){
    console.log(In) /// output: die zahlen(values) im array
};



}







{////////DAS IST EIN KONSTRUKTOR//////////////
class Human{ 
    constructor(Vorname, Nachname, Alter){
    this.Vorname = Vorname;
    this.Nachname = Nachname;
    this.Alter= Alter;

    this.sayhi=function() {
        console.log(`Hallo, meine Name ist ${this.Vorname} ${this.Nachname} und ich bin ${this.Alter} alt!`)}

    Human.allHumans.push(this);
    }
};

Human.allHumans = [];

const person1 = new Human('Tom', 'Fischer', 23);
person1.sayhi()
const person2 = new Human('Sarah', 'Hulle', 33);

////////////////////////////////////////////////////



    
console.log(Human.allHumans);
person2.sayhi();

for(let vname of Human){
    console.log(vname.Vorname);
};
}



