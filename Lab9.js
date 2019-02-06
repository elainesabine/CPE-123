// Example of very simple particle systems - introduction to objects in javascript

// declare of a variable to represent a particle system
var fireW1; 
var firework = [];
var count;
var r, g, b;

// define a single particle
function Particle(x , y) // you will need to modify the parameters
{
   this.velX = random(-1,1)
   this.velY = random(-1,1)

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorR = r
   this.pcolorG = g
   this.pcolorB = b
   this.locX = x;
   this.locY = y;
   this.r = 5;
   this.r2 = 7;
   this.life = 200;

   // a function to update the particle each frame
   this.updateP = function()
   {
      // this.velY += this.accelY;
      // // this.velX += random(-1, 1);
      // // this.velY += random(-1, 1);
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 2.0;
      this.r += random(-.1,.1);
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();
      r = random(255)
      g = random(255)
      b = random(255)
         translate(this.locX, this.locY);
         fill(this.pcolorR, this.pcolorG, this.pcolorB,this.life);
         ellipse(0, 0, this.r, this.r2);
         
         fill(255,this.life/2);
         ellipse(0,0,this.r+2, this.r2+2)

      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, num, r, g, b)
{
   // the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX+random(-5,5), sY+random(-5,5)));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

function setup() 
{
   createCanvas(500, 500);
   count = 0;
   // start a new particle system
   fireW1 = new PSys(250, 250, 150);
}

function draw() 
{
   background(0);


   // // run the particle system
   // fireW1.run();

   for (var i=0; i<count; i++)
   {
      firework[i].run();
   }
}

function mouseClicked() 
{
   count += 1;
   firework.push(fireW1 = new PSys(mouseX, mouseY, 100));
}