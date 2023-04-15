// var deklarieren

// noch zu deklarierende funktion: restartGame()
css=(css)=>{return document.querySelector(css)};
html=(html)=>document.createElement(html);



let auto = document.getElementById("auto");
 auto = {
  x : 865,
  y : 900,
  height : 148,
  width : 178,
  src: 'img/myCar1.png',
  
};



let npcauto = [];
let canvas;
let ctx;
let treeL = [];
let treeR = [];
let clouds = [];
let marksLeft = [];
let marksRight = [];
let speed = 4;
let gameRunning =true;
let intervalArr = [];
let score = 0;
let background = new Image();
let highScore = [];
let collisionDetected = false;
let overlay = css('#overlay');
let ArrowLeft = false;
let ArrowRight = false;
//let Space = false;

addEventListener('keydown',event=>{
if(event.key === 'ArrowLeft'){
  ArrowLeft = true;
};

if(event.key === 'ArrowRight'){
  ArrowRight = true
};

/*if(event.key === ' '){
  Space = true;};*/
  

});

addEventListener('keyup', event => {
  if(event.key === 'ArrowLeft'){
    ArrowLeft = false
  };
  if(event.key === 'ArrowRight'){
    ArrowRight = false;
  }
  /*if(event.key === ' '){
    Space = false;
    
    gameRunning = true;
    npcauto.forEach((obstacle)=>
    npcauto = npcauto.filter((ob)=>ob !=obstacle));
    
    start();};*/
    
  
});

const loadImages = ()=>{
   
   auto.img = new Image(),
   auto.img.src = auto.src;


};

function start(){
  if(gameRunning==true){
  collisionDetected = false;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  loadImages();
  draw();
  countScore();
  setInterval(Collision, 1000 / 25);
  /*intervalArr.forEach(()=>{
    return updateInt, obsUpdateInt, marksInt,newObsInt
  });*/

};}



function draw(){
  if(gameRunning === true){
  ctx.drawImage(background, 0, 0);
  marksLeft.forEach((markL)=>
    ctx.drawImage(markL.img, markL.x, markL.y, markL.width, markL.height));
  npcauto.forEach((obstacle)=>
    ctx.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height));
  marksRight.forEach((markR) => 
    ctx.drawImage(markR.img, markR.x, markR.y, markR.width, markR.height));
    ctx.drawImage(auto.img, auto.x, auto.y, auto.width, auto.height);
  clouds.forEach((cloud)=>
  ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height));
  treeL.forEach((treesL)=>
    ctx.drawImage(treesL.img, treesL.x, treesL.y, treesL.width, treesL.height));
  treeR.forEach((treesR)=>
  ctx.drawImage(treesR.img, treesR.x, treesR.y, treesR.width, treesR.height));
  drawScore();
  requestAnimationFrame(draw);}else{return};
};



function update(){
if(ArrowLeft){
  if(auto.x <= 590){
    auto.x -= 0
  }else{
  auto.x -= speed*3;};
}
if(ArrowRight){
  if(auto.x>= 1295-auto.width){
    auto.x +=0
  }else{
  auto.x += speed*3;}
};

marksLeft.forEach((markL)=> {
markL.x -= 1*1.2,
markL.y += 8,
markL.height += 1*0.2
});

marksRight.forEach((markR)=>{
  markR.x += 1*1.2,
  markR.y += 8,
  markR.height += 1*0.5
});

treeL.forEach((treesL)=>{
treesL.x -= 4,
treesL.y += 8,
treesL.height += 1,
treesL.width += 1});

treeR.forEach((treesR)=>{
  treesR.x +=4,
  treesR.y +=8,
  treesR.height += 1,
  treesR.width += 1
});


marksLeft.forEach((markL)=>{
    if(markL.y >= 1100){
     marksLeft = marksLeft.filter((mL)=>mL != markL)
    };
  });
marksRight.forEach((markR)=>{
  if(markR.y >= 1100){
   marksRight = marksRight.filter((mR)=> mR != markR)
  };
});

clouds.forEach((cloud)=>{
let cloudSpeed = 5
cloud.x -= cloudSpeed
}
);


if(score <250){
  background.src = 'img/background1.jpg';
 }else if (score <500){background.src= 'img/background2.jpg';
}else if(score >= 500){background.src='img/background3.jpg'};
};

drawScore=()=>{
  ctx.font = "43px Arial";
  ctx.fillStyle = "black";
  ctx.strokeStyle = "red";
  ctx.lineWidth = "2";
  ctx.fillText("Distance " + score, 80, 60);
  ctx.strokeText("Distance " + score, 80, 60);
  };

function updateHindernis(){
npcauto.forEach((obstacle)=>{
  if(obstacle.x < 800){
    obstacle.x -= 1*1.3,
    obstacle.y += 4,
    obstacle.width += 1*0.5,
    obstacle.height += 1*0.5
  };
  if(obstacle.x >= 800 && obstacle.x < 1030){
    obstacle.x -= 1*0.2,
    obstacle.y +=4,
    obstacle.width += 1*0.5,
    obstacle.height += 1*0.5
  }; 
  if(obstacle.x >=1030){
    obstacle.x += 1,
    obstacle.y += 4,
    obstacle.width += 1*0.5,
    obstacle.height += 1*0.5
  };
});
npcauto.forEach((obstacle)=>{
  if(obstacle.y > 1200-obstacle.height){
    npcauto = npcauto.filter((npc)=> npc != obstacle)
  };
});
};


countScore = ()=>{
  if(!collisionDetected){
     score += 1;
  }return score;
  
};




const Collision = () => {
  npcauto.forEach((obstacle)=>{
  if(
    obstacle.x + obstacle.width > auto.x &&
    obstacle.y + obstacle.height > auto.y &&
    auto.x + auto.width > obstacle.x &&
    auto.y + auto.height > obstacle.y)
    
    {if(Collision){if(!collisionDetected){
    
    console.log("Collision"),
    collisionDetected=true,
    countScore(),
    console.log(countScore()),
    scoreT(),
    css('#overlay').style.display = 'block',

    score = 0

  }}; gameRunning = false };
  });
};





/////////////////////////////////////////////////////////////////
/////////KOORDINATEN IN DER CONSOLE AUSGEBEN LASSEN//////////////
/////////////////////////////////////////////////////////////////
/////////KOORDINATEN IN DER CONSOLE AUSGEBEN LASSEN//////////////
/////////////////////////////////////////////////////////////////
/////////KOORDINATEN IN DER CONSOLE AUSGEBEN LASSEN//////////////
/////////////////////////////////////////////////////////////////
canvas = document.getElementById("canvas");             /////////
canvas.addEventListener("mousemove", function(event) {  /////////
  const rect = canvas.getBoundingClientRect();          /////////
  const x = event.clientX - rect.left;                  /////////
  const y = event.clientY - rect.top;                   /////////
  console.log("X: " + x + ", Y: " + y);                 /////////
});                                                     /////////
/////////////////////////////////////////////////////////////////
/////////KOORDINATEN IN DER CONSOLE AUSGEBEN LASSEN//////////////
/////////////////////////////////////////////////////////////////
/////////KOORDINATEN IN DER CONSOLE AUSGEBEN LASSEN//////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////



/////MArkierungen
const createMarks = ()=>{

let markL = {

  height : 30,
  width : 12,
  x : 886,
  y : 542,
  src : 'img/fbmLinks.png',
  img : new Image()

};

let markR = {
  height : 30,
  width : 12,
  x : 1006,
  y: 542,
  src : 'img/fbmRechts.png',
  img : new Image()
}
markR.img.src = markR.src;
markL.img.src = markL.src;

marksRight.push(markR);
marksLeft.push(markL);
};

const createObstacle = ()=>{
  let xChoords = [730, 885, 1030];
let obstacle = {
  x : xChoords[Math.floor(Math.random() *xChoords.length)],
  y : 542,
  height: 105,
  width: 125,
  src: 'img/hindernis1.png',
  img : new Image()
};
obstacle.img.src = obstacle.src;
npcauto.push(obstacle);

};
// Bäume
const treeGenL=()=>{
if(score<250){
  let xtreeL = Math.floor(Math.random() * (500-1))+1;
let treesL={
  x : xtreeL, //50-700
  y : 260,
  height: 280,
  width : 200,
  src : 'img/lvl1.png',
  img : new Image(),
  };
  treesL.img.src = treesL.src;
  treeL.push(treesL)
}else if(score>500){
  let xtreeL = Math.floor(Math.random() * (500-1))+1;
let treesL={
  x : xtreeL, 
  y : 490,
  height: 51,
  width : 47,
  src : 'img/lvl1c.png',
  img : new Image(),
  };
  treesL.img.src = treesL.src;
  treeL.push(treesL)}
};
  treeL.forEach((treesL)=>{
    if(treesL.y > 900){
    treeL = treeL.filter((tL)=> tL != treesL)};
  });
  treeL.forEach((treesL)=>{
    if(score >250 && score < 500){
      treeL = treeL.filter((tL)=> tL != treesL);
    };
  });


const treeGenR=()=>{
if(score<250){
  let xtreeR = Math.floor(Math.random() * (1800-1120+1)+1120);
let treesR = {
  x: xtreeR, //1670-1800
  y: 260,
  height: 280,
  width: 200,
  src: 'img/lvl1.png',
  img: new Image()
}
  treesR.img.src = treesR.src;
  treeR.push(treesR)
}else if(score>500){

  let xtreeR = Math.floor(Math.random() * (1800-1120+1)+1120);
let treesR = {
  x: xtreeR, 
  y: 490,
  height: 51,
  width: 47,
  src: 'img/lvl1c.png',
  img: new Image()
}
  treesR.img.src = treesR.src;
  treeR.push(treesR)
};

  treeR.forEach((treesR)=>{
    if(treesR.y > 900){
    treeR = treeR.filter((tR)=> tR != treesR)}
  });
  treeR.forEach((treesR)=>{
    if(score>250 && score<500){
      treeR = treeR.filter((tR)=> tR != treesR)
    };
  });
  
}

const createClouds = () => {

  let cloud = {
    x : 1950,
    
    width: 180,
    height: 150,
    src: 'img/Wolke.png',
    img: new Image()
  };
  cloud.y = Math.floor(Math.random()*530-cloud.height),
cloud.img.src = cloud.src;

clouds.push(cloud);};


// Intervalle werden deklariert und einem Array hinzugefügt, was sie bei jedem neustart resettet
let updateInt = setInterval(update, 1000 / 25);
let obsUpdateInt = setInterval(updateHindernis, 1000 / 25);
let marksInt = setInterval(createMarks, 500);
let newObsInt = setInterval(createObstacle, 10000 / 3);
let cloudInt = setInterval(createClouds, 2500);
let treeLInt = setInterval(treeGenL, Math.floor(Math.random()* 3000)+500);
let treeRInt = setInterval(treeGenR, Math.floor(Math.random()* 3000)+500)
setInterval(countScore, 1000 / 8)
//intervalArr.push(updateInt, obsUpdateInt, marksInt, newObsInt, cloudInt, treeLInt, );


//obere straße 360px breite y = 532; x-start: 766; ==>886; ==> 1006
// 810 px breite auf meiner höhe y= 1048px
///////

function scoreT(){
 
    highScore.push(score);
    highScore.sort((a,b)=>
    b - a);
    if(highScore.length > 10){
    highScore.splice(10, highScore.lenght -10)};

    table();
};

let table=()=>{
let punkte = document.getElementById("section");

punkte.innerHTML= '';


for (let i = 0; i < highScore.length; i++) {
  let scoreItem = document.createElement('li');
  scoreItem.textContent = highScore[i];
  punkte.appendChild(scoreItem);
};
};

let neustart=()=>{
  gameRunning = true;
    npcauto.forEach((obstacle)=>
    npcauto = npcauto.filter((ob)=>ob !=obstacle));
    css('#overlay').style.display='none';
    
    start();
};
css('#overlay');

//css('#btn').addEventListener('click',neustart);

let knopf = document.querySelector('#btn');
knopf.addEventListener('click',neustart);
//function button(cssId){return document.querySelector(cssId)};
//button('#btn').addEventListener('click',neustart)






