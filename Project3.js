var flowerX = [];
var flowerY = [];
var flowerSC = [];
var flowerROT = [];

var max_theta;
var flowerScale = .2;
var count = 0;

function setup()
{
  createCanvas(500, 700);

  noStroke();

  var fX = 50;
  var fY = 50;

    while (fX < width && fY < height)
      {
          flowerX.push (fX+random(-30,30));
          flowerY.push (fY+random(-50,50));
          flowerSC.push (flowerScale);
          flowerROT.push (random(-PI/3, PI/3));

          fX += 100;

          if (fX >= width)
            {
              fX = 50;
              fY += 100;
            }
      }
  max_theta = 0;
}

function draw()
{
    background(255, 153, 153);
//backgroundflowers
    for (var i=0; i < flowerX.length; i++)
    {
      drawFlower(flowerX[i], flowerY[i], flowerSC[i], flowerROT[i]);

    //animate flowers
    flowerSC[i] += 0.06;

        if (flowerSC[i] > 0.5)
        {
          flowerSC[i] -= 1;
        }
    }

  //center circle
  fill(255, 102, 102);
  stroke(200, 0, 0);
  strokeWeight(10);
    ellipse(250, 350, 400);

  // SPIRAL
  var x, y, theta, red, blue, green, diam;

 push();
     translate(250,350);

     red = 255;
     green = 255;
     blue = 200;

     for (theta = 0; theta < max_theta; theta += 2*PI/100)
     {

       x = 190*cos(3/4*theta)*cos(theta)
       y = 190*cos(3/4*theta)*sin(theta)

       strokeWeight(0);
       fill(red, green, blue);
       ellipse(x, y, 10,10);
       red += 6;
       blue -= 1;
       green -= 0.5;
     }

  pop();

     if(max_theta<10*PI)
     {
       max_theta += 2*PI/10;
     }

//leftspiral
 push();
     translate(100,100);

     red = 200;
     green = 255;
     blue = 200;

     for (theta = 0; theta < max_theta; theta += 2*PI/180)
     {

       x = 80*cos(2/3*theta)*cos(theta)
       y = 80*cos(2/3*theta)*sin(theta)

       strokeWeight(0);
       fill(red, green, blue);
       ellipse(x, y, 10);
       red += 0.4;
       blue -= 0.4;
       green -= 0.3;
     }
 pop();
//rightspiral
 push();
     translate(400,100);

     red = 255;
     green = 255;
     blue = 200;

     for (theta = 0; theta < max_theta; theta += 2*PI/180)
     {

       x = 80*cos(3/5*theta)*cos(theta)
       y = 80*cos(3/5*theta)*sin(theta)
       strokeWeight(0);
       fill(red, green, blue);
       ellipse(x, y, 10);
       red += 0.4;
       blue -= 0.4;
       green -= 0.3;
     }
 pop();
//bottom left spiral
 push();
     translate(100,600);

     red = 255;
     green = 255;
     blue = 200;

     for (theta = 0; theta < max_theta; theta += 2*PI/180)
     {

       x = 80*cos(4/3*theta)*cos(theta)
       y = 80*cos(4/3*theta)*sin(theta)
       strokeWeight(0);
       fill(red, green, blue);
       ellipse(x, y, 10);
       red += 0.4;
       blue -= 0.4;
       green -= 0.3;
     }

 pop();

//bottom right spiral
 push();
     translate(400,600);

     red = 255;
     green = 255;
     blue = 200;

     for (theta = 0; theta < max_theta; theta += 2*PI/180)
     {

       x = 80*cos(4/5*theta)*cos(theta)
       y = 80*cos(4/5*theta)*sin(theta)
       strokeWeight(0);
       fill(red, green, blue);
       ellipse(x, y, 10);
       red += 0.4;
       blue -= 0.4;
       green -= 0.3;
    }
 pop();

}

function drawFlower (x, y, sc, rot)
{
  push();
    translate(x,y);
    scale(sc);
    rotate(rot);

    stroke(102, 0, 0); //outer circle outline
    strokeWeight(5);
    fill(204, 102, 0); //outer circle
      ellipse(0,0,135);

    fill(255, 153, 51);
      ellipse(-40, 0, 40, 40); //left petal
      ellipse(40, 0, 40, 40);  //right petal
      ellipse(0, -40, 40, 40); //top petal
      ellipse(0, 40, 40, 40); //bottom petal
      ellipse(-30, -30, 40, 40); //upper left
      ellipse(30, -30, 40, 40); //upper right
      ellipse(30, 30, 40, 40); //lower right
      ellipse(-30, 30, 40, 40); //lower left
    fill(255, 102, 102);
      ellipse(0, 0, 50); // center circle
  pop();
}
