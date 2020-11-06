var pix = [], piy = [];
var inimigos = 10; 
var distancia = 0; 
var nivel = 1; 
vida = 5;
var barreiraDePontos = 100;
colisao = false;
pjy = 0;
pjx = 0;
raioj=20;
raioi=7;
raiob=10
bx =800;
by =300;
contadorb = 0;
var tela = 1; 
var tempo = 0; 
let img;
let bg;

function preload() {
  img = loadImage('download.jpg');
}


function setup() {
  frameRate(30); 
  bg = loadImage('floresta.jpg');
  createCanvas(400, 400);
  for (var i=0; i <inimigos; i++) { 
	pix[i] = random(10,390);
    piy[i] = -random(0,400); 
  }
}

function draw() {
  jx = mouseX;
  jy = mouseY;
  b1x = mouseX;
  b1y = mouseY;
  b2x = mouseX;
  b2y = mouseY;
  
  
  
    
	clear(); 


	
    if(tela==1){
    fill(12, 21, 93);
    textSize(28);
    text("Space", 150, 100);
    fill(30,160, 13);
		textSize(18);
    text("Aperte enter para iniciar", 150, 150);
    fill(12, 21, 93);
    textSize(24);
    text("---Instruções---", 150, 200);
    textSize(12);
    text("Tente alcançar a maior distância", 150, 220);
    text("e superar os obstáculos, Boa Sorte!", 150, 240);
    text("Movimentação: MOUSE", 150, 260);
		if (keyIsDown(ENTER)){
			tela = 2;            
		}
	}
   
	if(vida<=0){
		tela = 3;
	}
  if(tela==3){
        vida=5
    fill(12, 21, 93);
		textSize(20);
		textFont ("Andalus")
    text("Você perdeu", 150, 150);
    fill(255, 87, 51);
    textSize(18);
    text("Distancia Percorrida: "+distancia, 150, 200);
    fill(30,160, 13);
    text("Aperte enter para iniciar", 150, 220);
		if (keyIsDown(ENTER)){
			tela = 2;
            vida = 5;
            distancia = 0;
            contadorb = 0;
            nivel = 1;
            barreiraDePontos=100
		}
	}
    if(tela==2){
  background(bg);
  fill(250,250,250);
  if (jy >= 320 & jy <= 380) {
	image(img, jx-20, jy-20, raioj*2, raioj*2);
  }
  if (jy <= 320) {
	image(img, jx-20, 300, raioj*2, raioj*2);
  }
  if (jy >= 380) {
	image(img, jx-20, 360, raioj*2, raioj*2);
  }
  
  bx = bx - 3;
  if(bx<0){
  by = random(10, 390);
  bx = random(1000, 4000);
  }
  fill(47,227,33);
  rect(bx, by, raiob*2, raiob*2);
  fill(200);
  for (var i=0; i<inimigos; i++) {
  	ellipse(pix[i], piy[i], raioi*2, raioi*2);
  	pix[i]=pix[i]-1*nivel; 
    if ( pix[i] < 0 ){ 
      pix[i] =  random(410,790);
      piy[i] = random(320,380);
    }
}
  let d = int(dist(jx,jy,pix,piy));
  textSize(18);
  fill(250,250,250);
  text("Nível: "+nivel, 270, 30);
  text("vidas: "+vida, 170, 30);
  text("Distâcia: "+distancia, 270, 50);
   

  distancia = distancia + 1; 

  if (distancia>barreiraDePontos) {
    nivel=nivel+1;
    barreiraDePontos = barreiraDePontos + 100; 
  }
  
  
  
  	for(j=0;j<inimigos;j++){
		if(dist( jx, jy , pix[j], piy[j]) <= raioi + raioj){ 
			vida = vida -1;
			piy[j] = -random(400);
			pix[j] = random(10,390);		
		}
	}
	if(dist( jx, jy , bx, by) <= raiob + raioj){
	  by = random(320,380);
	  bx = random(1000,4000);		
      vida=vida+1;
	}
    }
}