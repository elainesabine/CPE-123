
function setup()
	{
	createCanvas(500, 500);
	noLoop();

	}

function draw()
	{

    background(random(100,200), random(100,200), random(100,200));

		// top left - slightly smaller flowers
		for (i=0; i<10; i++)
		{
			drawFlower(random(0,width/2),
								 random(0,height/2),
								 random(0.1,1.5),
								 random(0,PI),
								 random(0,255), random(0,255), random(0,255));
		}

		// top right - slightly smaller flowers
		for (i=0; i<10; i++)
		{
			drawFlower(random(width/2, width),
								 random(0,height/2),
								 random(0.1,1.5),
								 random(0,PI),
								 random(0,255),
								 random(0,255),
								 random(0,255));
		}

		// bottom left - slightly bigger flowers
		for (i=0; i<5; i++)
		{
			drawFlower(random(0,width/2),
								 random(height/2, height),
								 random(1.5, 3),
								 random(0,PI),
								 random(0,255),
								 random(0,255),
								 random(0,255));
		}

		// bottom right - slightly bigger flowers
		for (i=0; i<5; i++)
		{
			drawFlower(random(width/2, width),
								 random(height/2, height),
								 random(1.5, 3),
								 random(0,PI),
								 random(0,255),
								 random(0,255),
								 random(0,255));
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

		stroke(255, 255, 255, 200); //lines inside flower
		strokeWeight(1);
		line(0,0, -13, -13);
		line(0,0, -13, -8);
		line(0,0, -17, -5);

		line(0,0, -20, 5);
		line(0,0, -15, 7);
		line(0,0, -17, 13);

		line(0,0, -3, 16);
		line(0,0, 2, 13);
		line(0,0, 7, 13);

		line(0,0, 17, 3);
		line(0,0,14, -2);
		line(0,0, 14, -8);

		line(0,0, -4, -17);
		line(0,0,0, -15);
		line(0,0, 4, -16);

		noStroke();
		fill(255, 255, 0);
			ellipse(0,0,10); // yellow center of flower

    pop();
}
