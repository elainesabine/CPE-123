// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, leftlegR, rightlegR, beakbottomR, time;

var neckDown = true;
var wingDown = false;
var animate = false;
var leftleg = false;
var rightleg = false;
var beakbottom = false;

var Fx = [];
var Fy = [];
var Fsc = [];
var Frot = [];
var Fred = [];
var Fgreen = [];
var Fblue = [];
var Fnum;

function setup() 
{
   noStroke();
   createCanvas(400, 400);
   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   leftlegR = 0;
   rightlegR = 0;
   beakbottomR = PI/10;

   Fnum = 20
   for (var i=0; i<Fnum; i++)
   {
      Fx.push(random(20,380));
      Fy.push(random(230,380));
      Fsc.push(random(0.5,1.2));
      Frot.push(random(0,PI));
      Fred.push(random(0,255));
      Fgreen.push(random(0,255));
      Fblue.push(random(0,255));
   }
}

function draw() 
{
   background(12, 245, 216); //sky

   //clouds
   fill(255);
   ellipse(50,50,50,50);
   ellipse(85,57,50,50);
   ellipse(115,54,50,50);
   ellipse(138,66,50,50);
   ellipse(104,77,50,50);
   ellipse(69,77,50,50);
   ellipse(44,70,50,50);
   push();
      translate(-30,-10);
      ellipse(346,42,50,50);
      ellipse(317,46,50,50);
      ellipse(288,43,50,50);
      ellipse(269,60,50,50);
      ellipse(295,74,50,50);
      ellipse(323,67,50,50);
      ellipse(349,63,50,50);
   pop();

   //mountains
   fill(78, 155, 16,180);
   ellipse(50,height/2,180,80);
   ellipse(100,height/2,180,120);
   ellipse(200,height/2,200,180);
   ellipse(330,height/2,220,150);

   //green ground
   noStroke();
   fill(78, 155, 16);
   rect(0, height/2, width, height/2);

   for (var i=0; i<Fnum; i++)
   {
      drawFlower(Fx[i], Fy[i], Fsc[i], Frot[i], Fred[i], Fgreen[i], Fblue[i])
   }

   drawDuck();
   if (animate) 
   {
      moveDuck();
   }
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() 
{

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck

      // left leg
      fill(240,134,51);
      push();
         translate(-8,10);
         rotate(leftlegR+PI/10);
         rect(0,0,2,13);
         ellipse(-2,8,6,2.5);
         ellipse(-1,10,6,2.5);
         ellipse(-2,12.1,6,2.5);
      pop();

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
         fill(155, 111, 16);
         triangle(-10, -18, -4, -21, -4, -15); //beak
         // bottom beak
         fill(155, 111, 16);
         push();
            translate(-4,-15.5);
            rotate(beakbottomR);
            beginShape();
            curveVertex(0,0);
            curveVertex(0,0);
            curveVertex(-5,0);
            curveVertex(-5,1);
            curveVertex(0,1);
            curveVertex(0,1);
            endShape();
         pop();
      pop();

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      // right leg
      fill(240,134,51);
      push();
         translate(3,14.5);
         rotate(rightlegR);
         rect(0,0,2,13);
         ellipse(-2,8,6,2.5);
         ellipse(-1,10,6,2.5);
         ellipse(-2,12.1,6,2.5);
      pop();
   pop();

   // push();
	// 	fill(200);
	// 	textSize(16);
	// 	textAlign(CENTER);
	// 	text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
   // pop();

}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > 0) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= PI/100;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/200;
   } 
   else 
   {
      wingR += PI/200;
   }

   // find out how much the left leg is rotated to decide which way to rotate
   // these constrain how much the leg moves 
   if (leftlegR < -PI/5)
   {
      leftleg = false;
   } 
   if (leftlegR > PI/10) 
   {
      leftleg = true;
   }

   // depending on which way we need to rotate, do so
   if (leftleg == true) 
   {
      leftlegR -= PI/110;
   }
   else 
   {
      leftlegR += PI/110;
   }

   // find out how much the right leg is rotated to decide which way to rotate
   // these constrain how much the leg moves 
   if (rightlegR > 2*PI/10)
   {
      rightleg = true;
   } 
   if (rightlegR < -2*PI/10) 
   {
      rightleg = false;
   }

   // depending on which way we need to rotate, do so
   if (rightleg == true) 
   {
      rightlegR -= PI/100;
   }
   else 
   {
      rightlegR += PI/100;
   }

   // find out how much the beack is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (beakbottomR < -PI/30) 
   {
      beakbottom = false;
   } 
   if (beakbottomR > PI/10) 
   {
      beakbottom = true;
   }

   // depending on which way we need to rotate, do so
   if (beakbottom == true) 
   {
      beakbottomR -= PI/100;
   } 
   else 
   {
      beakbottomR += PI/100;
   }
}

function drawFlower(Fx, Fy, Fsc, Frot, Fred, Fgreen, Fblue)
{
   push();
   translate(Fx, Fy);
   scale(Fsc);
   rotate(Frot);
   noStroke();
   fill(Fred,Fgreen,Fblue, 150);
      ellipse(0, 0,20); //center
      ellipse(3, 15,23, 20); //bottom petal
      ellipse(0, -15,20, 25); // top petal
      ellipse(15, -2,20, 25); //right petal
      push();
         rotate(PI/3);
         ellipse(0, 15,20, 30); //bottom left petal
      pop();
      push();
         rotate(-PI/3);
         ellipse(0, -15,20, 30); //top left petal
      pop();
   noStroke();
   fill(255, 255, 0);
      ellipse(0,0,10); // yellow center of flower
   pop();
}