var c1, c2;

var bX = [];
var bY = [];
var vX = [];
var vY = [];
var bSc = [];
var bRot = [];
var bColor = [];
var numButterfly;

var flowerX = [];
var flowerY = [];
var flowerSc = [];
var flowerRot = [];
var flowerColor = [];
var flowerColorpetal = [];

var mountainX = [];
var mountainY = [];
var mountainW = [];
var mountainH = [];
var mountainColor = [];

function setup()
{
  createCanvas(1000, 600);

  //set up mountain variables
  var mX=50
  while (mX <width)
  {
    mountainX.push (mX);
    mountainY.push (random(500,550));
    mountainW.push (random(50,200));
    mountainH.push (random(200,800));
    mountainColor.push (color(random(150,221),random(55,60),random(50,180),50));
    mX += 110;
  }

  // set up butterfly variables
  numButterfly = 6;
  for (var i=0; i<numButterfly; i++)
  {
    bX.push (random(100,900));
    bY.push (random(200,520));
    vX.push (random(-2,2));
    vY.push (random(.2,2));
    bSc.push (random(1,1.3));
    bRot.push (random(-PI/50,PI/10));
    bColor.push (color(random(150,221),random(55,60),random(50,180),180));
  }

  // set up flower variables
  var fX = 50
  while (fX < width)
  {
    flowerX.push (fX);
    flowerY.push (random(150,450));
    flowerSc.push (1,1.5);
    flowerRot.push(0)
    flowerColor.push(color(random(150,221),random(50,107),random(50,112)));
    flowerColorpetal.push(color(random(150,221),random(55,60),random(50,180),180));
    fX += random(40,80)
  }

  // Define colors
  c1 = color(187,210,181);
  c2 = color(231,225,180);
}

function draw()
{
  setGradient(0, 0, width, height, c1, c2, 1);

  // draw mountains
  for (var i=0; i<mountainX.length; i++)
  {
    noStroke();
    drawMountain(mountainX[i], mountainY[i], mountainW[i],mountainH[i],mountainColor[i]);
  }

  // draw flowers
  for (var i=0; i<flowerX.length; i++)
  {
    drawFlower(flowerX[i], flowerY[i], flowerSc[i], flowerRot[i], flowerColor[i], flowerColorpetal[i]);
  }

  // draw butterflies
  for (var i=0; i<numButterfly; i++)
  {
    drawButterfly(bX[i],bY[i],bSc[i],bRot[i],bColor[i]);
    // update position based on velocity
    bX[i] += vX[i];
    bY[i] -= vY[i];

    // bounces butterfly
    if (bX[i]< 70|| bX[i]> 930)
    {
      vX[i] = -vX[i];
    }

    if (bY[i]<50||bY[i]>550)
    {
      vY[i] = -vY[i];
    }

    // bRot[i] -= PI/2000;
    
    // if (bRot[i] < PI/4)
    // {
    //   bRot[i] -= -bRot[i];
    // }
  }

}

function drawButterfly(bX,bY,bSc,bRot,bColor)
{
  push();
    translate(bX,bY);
    scale(bSc);
    rotate(bRot);
    // right wing
    fill(bColor);
    beginShape();
      curveVertex(0,0);
      curveVertex(0,0);
      curveVertex(30,-42);
      curveVertex(57,-35);
      curveVertex(56,-13);
      curveVertex(48,-6);
      curveVertex(48,-6);
    endShape();
    beginShape();
      curveVertex(0,-10);
      curveVertex(0,-10);
      curveVertex(30,32);
      curveVertex(57,25);
      curveVertex(56,3);
      curveVertex(48,-4);
      curveVertex(48,-4);
    endShape();
  pop();

  // left wing
  push();
    translate(bX,bY);
    scale(bSc);
    rotate(-bRot);
    fill(bColor);
    beginShape();
      curveVertex(0,0);
      curveVertex(0,0);
      curveVertex(-30,-42);
      curveVertex(-57,-35);
      curveVertex(-56,-13);
      curveVertex(-48,-6);
      curveVertex(-48,-6);
    endShape();
    beginShape();
      curveVertex(0,-10);
      curveVertex(0,-10);
      curveVertex(-30,32);
      curveVertex(-57,25);
      curveVertex(-56,3);
      curveVertex(-48,-4);
      curveVertex(-48,-4);
    endShape();
  pop();

  push();
    translate(bX,bY);
    scale(bSc);
    // middle circle
    fill(179,85,79);
    ellipse(0,0,40);
  pop();
}


function drawFlower(bX,bY,bSc,bRot,bColor,fColor)
{
  push();
    translate(bX,bY);
    scale(bSc);
    // middle circle
    fill(bColor);
    ellipse(0,-20,40);
    //stem
    rect(-3,0,3,height);
  pop();

  push();
    translate(bX,bY);
    scale(bSc);
    rotate(bRot);
    // right wing
    fill(fColor);
    beginShape();
      curveVertex(0,0);
      curveVertex(0,0);
      curveVertex(30,-42);
      curveVertex(57,-35);
      curveVertex(56,-13);
      curveVertex(48,-6);
      curveVertex(48,-6);
    endShape();
  pop();

  // left wing
  push();
    translate(bX,bY);
    scale(bSc);
    rotate(-bRot);
    fill(fColor);
    beginShape();
      curveVertex(0,0);
      curveVertex(0,0);
      curveVertex(-30,-42);
      curveVertex(-57,-35);
      curveVertex(-56,-13);
      curveVertex(-48,-6);
      curveVertex(-48,-6);
    endShape();
  pop();
}

function drawMountain(x,y, w, h, color)
{
  fill(color);
  ellipse(x, y, w, h);
}

// linear gradient code from processing website
function setGradient(x, y, w, h, c1, c2, axis)
{
  noFill();
  if (axis == 1)
  {
    // Top to bottom gradient
    for (var i = y; i <= y+h; i++)
    {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
}