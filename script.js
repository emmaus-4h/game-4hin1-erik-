
/* Game opdracht


   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_SPACE = 32;
const KEY_ENTER = 13
var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600;
var vijandY = 500;
var img1;           //plaatje//
var img2;
var img3;
var img4;
var img5;

var balpakken 

var kogelX= 400;
var kogelY= 400;
var kogelVliegt = false;
var goalX = 600;
var goalY = 400;

var spelerSpringt = false;
var springSnelheid = 2;
var springSnelheidStart = 6;
var zwaartekracht = 0.19;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(37))
spelerX = spelerX -3;
  if (keyIsDown(39))
    spelerX = spelerX +3;
  if (keyIsDown(38))
    spelerY = spelerY -0;
  if (keyIsDown(40))
    spelerY = spelerY +0;
  if (spelerSpringt === false && keyIsDown(32)) {
    spelerSpringt = true;
    springSnelheid = springSnelheidStart
    console.log("start sprong");
}
if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid;
  springSnelheid = springSnelheid - zwaartekracht;
}
  if (spelerY > 610) {
    spelerSpringt = false;
  }
  // vijand

  // kogel

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  
  

  // bal oppakken
  

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  background('green')

  image(img4, 0,0, 1400, 750);

  // vijand//
  image(img1, vijandX - 60, vijandY - 100, 110, 110);

  // kogel
fill("black")

    image(img2, kogelX - 25, kogelY - 25, 30, 30)
   
   if (kogelVliegt === false && 
     keyIsDown(16)) {
    kogelVliegt=true;
    kogelX=spelerX;
    kogelY=spelerY;
  }
  if (kogelVliegt === true) {
  kogelY = kogelY-1;
 }
if (kogelVliegt === true &&
  kogelY < 0) {
  kogelVliegt = false;
  }
  // speler
  fill("white");
  

  
   
     image(img3, spelerX - 65, spelerY - 85, 120, 100)
   }

  
  // goal
  fill('white')
 image(img5, goalX, goalY, 150, 150)



/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (spelerX - vijandX <50 && 
    spelerX - vijandX >-50 &&
    spelerY - vijandY <50 &&
    spelerY - vijandY >-50) {
  console.log("Botsing");
    return true;
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

//preload//
//we laden hier de plaatjes//
function preload() {

  img1 = loadImage('vanDijk.png')
  img2 = loadImage('voetbal.webp')
  img3 = loadImage('messi.png')
  img4 = loadImage('stadion.jpeg')
  img5 = loadImage('goal.png')
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen")
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("Game-over")
    textSize(50);
    fill("white")
    text("game over, druk enter voor start",100,100 )
    if (keyIsDown(13))
      spelerY=600;
    
    
    
      spelStatus = SPELEN;

  }
  if (s)
}
