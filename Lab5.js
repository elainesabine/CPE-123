var max_theta;

function setup()
{
   createCanvas(400, 400);
   background(0);
   noStroke();
   max_theta = 0;
}

function draw()
{

   var x, y, theta, red, blue, green, diam;

   push();
   translate(200,200);

   red = 155;
   green = 34;
   blue = 218;

   for (theta = 0; theta < max_theta; theta += 2*PI/500)
   {
     x = 160*cos(15*theta)*cos(theta)
     y = 160*cos(15*theta)*sin(theta)

      fill(red, green, blue);
      ellipse(x, y, 2);
      red += .05;
      blue += 0.1;
      green += 0.1
   }

   for (theta = 0; theta < max_theta; theta += 2*PI/500)
   {

     x = 200*cos(7*theta)*cos(theta)
     y = 200*cos(7*theta)*sin(theta)

      fill(red, green, blue);
      ellipse(x, y, 2);
      red -= .1;
      blue += 1;
      green -= 0.1
   }

   red = 247;
   green = 34;
   blue = 218;
   diam = 1;

   for (theta = 0; theta < max_theta; theta += 2*PI/300)
   {
     x = 120*cos(2.718281828459045*theta)*cos(theta);
     y = 120*cos(2.718281828459045*theta)*sin(theta);

      fill(red, green, blue);
      ellipse(x, y, diam);
      red -= .05;
      blue += 0.1;
      green += .1;
      diam += .003;
   }

pop();

   if(max_theta<7*PI)
   {
     max_theta += 2*PI/100;
   }

}
