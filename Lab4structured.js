
function setup()
	{
	createCanvas(500, 500);
	noLoop();
	}

function draw()
	{

		var Lx;
		var Ly;

    background(255);

		fill(120,200,248);
		rect(0,0,500,250); //sky

		//grass
		fill(79,152,35);
		rect(0,250,500,250); // grass

		fill(124, 95,67);
		strokeWeight(0);
		rect(0,160,500,240); //table

		// ---------------- for loop lemons
		Lx = 50;
    Ly = 200;
    while (Ly < 360)
    {
			drawLemon (Lx,Ly,random(0,PI),random(0.4,0.5),random(150,255), random(180,255), 0);
       Lx += 45;

       if (Lx > 290)
       {
          Lx = 50;
          Ly += 30;
       }
    }

		//----------------------
		drawLemon (370,100,random(0,PI),0.5,random(150,255), random(150,255), 0);

		fill(196,222,255,180);
		rect(370,100,90,160); //lower glass

		fill(255, 255,0);
		rect(373,123,84,134); //lemonade bottom

		fill(255, 173, 180); // pink
		beginShape(); //straw
		vertex(374,250);
		vertex(443, 57);
		vertex(475, 77);
		vertex(471, 83);
		vertex(447, 67);
		vertex(381, 252);
		endShape(close);

		fill(255, 255,0, 100);
		rect(373,123,84,134); //lemonade top

		fill(196,222,255,100);
		rect(370,100,90,160); //upper glass



		fill(255); //sign
		rect(339,292,140,80);

		fill(0);
		textSize(20);
		textFont("Helvetica");
		textStyle(BOLD);
		text("LEMONADE",353,315);

		textSize(40);
		text("$1",383,356);

		push();
		fill(0);
		textSize(16);
		textAlign(CENTER);
		text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
		pop();



	}

function drawLemon(Lx, Ly, rot, sc, Lred, Lgreen, Lblue)
{
    push();
		translate(Lx, Ly);
		rotate(rot)
		scale(sc);

		noStroke();
		fill(Lred, Lgreen, Lblue);
        ellipse(0, 0, 100,100);

		fill(Lred, Lgreen, Lblue);
        ellipse(0, 0, 100,100); // outer circle

		fill(Lred+100, Lgreen+100, Lblue+100);
		    ellipse(0, 0, 90,90); // inner circle

		fill(Lred, Lgreen, Lblue);
				triangle(0,-40,1,-5,22,-33, 10);
				triangle(26, -30, 3, -3, 38, -12);
				triangle(38, -8, 4, 0, 37, 15);
				triangle(34, 19, 2, 1, 14, 36);
				triangle(8, 38, -1, 1, -18, 35);
				triangle(-23, 30, -5,0,-39, 8);
				triangle(-40, 2, -7,-4,-34,-23);
				triangle(-5,-39,-4,-6,-30,-27);

    pop();
}
