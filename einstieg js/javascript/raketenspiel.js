let ArrowUp = false;
let Space = false;
let ArrowDown = false;
let shotFired = false;

let rocket = {
    x: 20,
    y: 120,
    width: 50,
    height: 25,
    src:'ufo/rakete.webp'
};

let gameState = true;

let fire = [];

let ufos = []; // für dieses object wird ein array erstellt, dass später mehrere Ufos spawnen können

let background = new Image();

let ctx;
let speed = 4;

let score = 0;





addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
        ArrowUp = true;
    } 
    if(event.key === 'ArrowDown') {
        ArrowDown = true;
    } 
    if(event.key === ' ') {
        Space = true;    
    }
    if(event.key === ' ') {
        if(!shotFired) {
            openFire();
            shotFired = true;
        };
    }
    
    
});

addEventListener('keyup', event => {
    if(event.key === 'ArrowUp') {
        ArrowUp = false;
    }  
    if(event.key === 'ArrowDown') {
        ArrowDown = false;
    }  
    if(event.key === ' ') {
        Space = false;
    }
    if(event.key === ' ') {
        shotFired = false;
    };
    if(event.key === ' '){
        if(!gameState){
            return gameState = true, startGame()
        };
    }
});


/////////////////////////////////////////////////////
///////////////////////Funktionen///////////////////
////////////////////////////////////////////////////

const loadImages = () => {
    background.src = 'ufo/bckr-rs.jpg';

    rocket.img = new Image(); //deklariete Bild-Variable zum Image deklarieren
    rocket.img.src = rocket.src; //Bild-Image.src = Bild.src

    
};


function startGame() {

    canvas = document.getElementById("canvas")///canvas kann erst zum start mit bildern etc. befüllt werden
    ctx = canvas.getContext("2d");// context kann erst zum start deklariert werden
    
    loadImages();
    draw();
    return intervals.forEach(()=>{
        collisionInterval, createUfosInterval, updateInterval
    });
    
}

///Bewegung von Objekten
const update= () => {

    if(ArrowUp){
        rocket.y -= speed;if(rocket.y + rocket.height <= 0 + rocket.height){ //obere grenze
            rocket.y = 0;
        };
    };
    if(ArrowDown){
        rocket.y += speed;if(rocket.y + rocket.height >= canvas.height){ // untere grenze
            rocket.y = canvas.height - rocket.height;
        }
    };
    if(Space){
        openFire()
    };


    fire.forEach((bullet)=>{

        bullet.x += speed;
        
    }
    );

    ufos.forEach((ufo)=>{
        speed = 5
        if(score <= 10){
            ufo.x -= speed;
        }else if(score > 10 && score <20){
                ufo.x -= speed*2;
        }else if(score >= 20 ){
                    ufo.x -= speed*3;
                };
            
        
        });
        
        
    ;
}
// Kollisionen


const Collision = () => {
    ufos.forEach((ufo) => {
        if(
            rocket.x + rocket.width > ufo.x
            && rocket.y + rocket.height > ufo.y
            && rocket.x < ufo.x
            && rocket.y < ufo.y + ufo.height
        ) {
            rocket.img.src= 'ufo/boom.webp';
            console.log("Collision!!");
            ufos.filter(u => u!= ufo);
            setTimeout(()=>{
                gameState = false;
                score = 0
                
            }, 100);
            
            
        };
        fire.forEach((bullet) =>{
            if(bullet.x + bullet.width > ufo.x
                && bullet.y + bullet.height > ufo.y
                && bullet.x < ufo.x
                && bullet.y < ufo.y + ufo.height
            ){
                console.log("HIT");
                score++;
               fire = fire.filter(b => b != bullet);
               ufos = ufos.filter(u => u != ufo);
            }
    });
    ;
});
}








const openFire = () =>{
    if(!gameState) {
        return;
    };
    if(!shotFired){
    let bullet = {
        x: rocket.x + rocket.width,
        y: rocket.y +7,
        width: 15,
        height: 10,
        src: 'ufo/kugelwilli.png',
        img: new Image(),
    }
    ;

    bullet.img.src = bullet.src;

    fire.push(bullet);
    shotFired = true;
    }    
}


const createUfos = ()=>{

    if(gameState !== true) {
        
        return;
        
    };

    let ufo = {
        x: 600,
        y: Math.floor(Math.random() *265),
        width : 50,
        height: 25,
        src: 'ufo/ufo.webp',
        img: new Image(),
    };

    ufo.img.src = ufo.src;

    ufos.push(ufo); 
};











    function draw() {
        if(!gameState) {
            return;
        }

        ctx.drawImage(background, 0, 0); //variable mit dem kontext(ctx=context)
        drawScore();
        

        // => dann .drawImage => also ctx.drawImage(background, 0, 0)=> background ist die variable mit dem background-bild;
        // 0 und 0 stehen für den start auf der x- / und y-achse. das Koordinatensystem fängt oben links mit den werten 0 und 0 an
        ufos.forEach((ufo) => {
            ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
        });

        fire.forEach((bullet)=>{
            ctx.drawImage(bullet.img, bullet.x, bullet.y, bullet.width, bullet.height);
        });

        ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);
        //alle Bilder werden auf den Context gezeichnet====> ctx.drawImage(bild.img, bild.x(Achse), bild.y(Achse), höhe, breite)
        requestAnimationFrame(draw);

    };

    //intervall zurücksetzen

    let intervals = [];
let updateInterval = setInterval(update, 1000 / 25);
let collisionInterval = setInterval(Collision, 1000 / 50);
let createUfosInterval = setInterval(createUfos, 2000);

intervals.push(updateInterval);
intervals.push(collisionInterval);
intervals.push(createUfosInterval);

drawScore = ()=>{
    ctx.font = "16px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: " + score, 8 ,16);
};