var scaleBird = 1;
var xBird = 190;
var yBird = 178;

// background grid variables
var linex1 = -100;
var linex2 = 600;
var linex3, linex4;

function setup() {
	createCanvas(500, 500);
    background(82,173,212)

}



function draw() {

	// background grid

	push();
    translate(-600,100)
	stroke(255);
	strokeWeight(2);
	for (i=0;i < 10; i++); {
		linex1=linex1+(2*i);
		linex2=linex2+(2*i);
	    linex3 = linex1-(2*i);
	    linex4 = linex2-(2*i);
	}
	line(linex1, 600, linex2, -100); 
	line(linex3, 600, linex4, -100); 
	pop();
	
	push();
    translate(-600,100)
	stroke(255);
	strokeWeight(2);
	for (i=0; i < 10; i++); {
		linex1= linex1+(2*i);
		linex2= linex2+(2*i);
	    linex3 = linex1-(2*i);
	    linex4 = linex2-(2*i);
	}
	line(linex1, -100, linex2, 600); 
	line(linex3, -100, linex4, 600); 
	pop();

     //---------

    noStroke();
    fill(255); // white
        ellipse(270,230,410,410); // white circle 

    
    noStroke();
     fill(138,144,56, 180); // green
		beginShape(); // thing on very left
		curveVertex(20, 500);
		curveVertex(20, 500);
		curveVertex(10, 450);
		curveVertex(22, 400);
		curveVertex(24, 381);
		curveVertex(23, 360);
		curveVertex(14, 340);
		curveVertex(11, 298);
		curveVertex(21, 261);
		curveVertex(13, 229);
		curveVertex(12, 181);
		curveVertex(28, 130);
		curveVertex(16, 78);
		curveVertex(40, 14);
		curveVertex(66, 76);
		curveVertex(56, 133);
		curveVertex(73, 199);
		curveVertex(60, 267);
		curveVertex(74, 323);
		curveVertex(58, 385);
		curveVertex(70, 446);
		curveVertex(62, 500);
		curveVertex(62, 500);
		endShape();


     fill(131,144,56); // green
		beginShape(); // left branch
		curveVertex(240, 500);
		curveVertex(240, 500);
		curveVertex(214, 424);
		curveVertex(200, 346);
		curveVertex(158, 296);
		curveVertex(124, 264);
		curveVertex(110, 238);
		curveVertex(92, 177);
		curveVertex(96, 176);
		curveVertex(108, 197);
		curveVertex(123, 243);
		curveVertex(162, 282);
		curveVertex(201, 324);
		curveVertex(222, 347);
		curveVertex(236, 397);
		curveVertex(248, 400);
		curveVertex(296, 326);
		curveVertex(346, 263);
		curveVertex(393, 230);
		curveVertex(387, 207);
		curveVertex(387, 187);
		curveVertex(391, 186);
		curveVertex(395, 208);
		curveVertex(407, 223);
		curveVertex(429, 202);
		curveVertex(437, 175);
		curveVertex(440, 175);
		curveVertex(438, 197);
		curveVertex(423, 223);
		curveVertex(397, 246);
		curveVertex(359, 272);
		curveVertex(315, 330);
		curveVertex(296, 376);
		curveVertex(300, 400);
		curveVertex(298, 500);
        curveVertex(298, 500);
		endShape();

     fill(131,144,56); // green
		beginShape(); // branch 2
        curveVertex(162, 285);		
        curveVertex(162, 285);	
        curveVertex(176, 258);	
        curveVertex(200, 238);	
        curveVertex(207, 220);	
        curveVertex(193, 201);	
        curveVertex(190, 178);	
        curveVertex(194, 178);	
        curveVertex(200, 200);	
        curveVertex(214, 214);	
        curveVertex(222, 178);	
        curveVertex(225, 177);	
        curveVertex(225, 208);	
        curveVertex(214, 236);	
        curveVertex(185, 263);	
        curveVertex(176, 287);	
        curveVertex(178, 303);	
        curveVertex(178, 303);	
		endShape();

     fill(131,144,56); // green
		beginShape(); // branch 3
        curveVertex(294, 466);		
        curveVertex(294, 466);	
        curveVertex(313, 440);	
        curveVertex(333, 423);	
        curveVertex(364, 393);	
        curveVertex(376, 352);	
        curveVertex(372, 322);	
        curveVertex(353, 238);	
        curveVertex(362, 183);	
        curveVertex(358, 182);	
        curveVertex(347, 226);	
        curveVertex(332, 209);	
        curveVertex(325, 182);	
        curveVertex(322, 182);	
        curveVertex(325, 209);	
        curveVertex(334, 221);
        curveVertex(342, 231);
        curveVertex(350, 284);		
        curveVertex(365, 348);	
        curveVertex(350, 391);	
        curveVertex(319, 410);	
        curveVertex(290, 397);	
        curveVertex(290, 397);	
		endShape();

     fill(131,144,56); // green
		beginShape(); // fix branch
        curveVertex(334, 220);		
        curveVertex(334, 220);	
        curveVertex(342, 231);	
        curveVertex(349, 229);	
	    curveVertex(349, 229);	
		endShape();

     fill(255); // white
		beginShape(); // fix branch
        curveVertex(296, 377);	
        curveVertex(296, 377);		
        curveVertex(297, 400);	
        curveVertex(317, 410);	
        curveVertex(317, 410);	
		endShape();


	// BIRD
	push();
	    translate(xBird, yBird)
	    scale(scaleBird);
    fill(248,208,71); // yellow
        ellipse(0,-48,55,55); // bird body
        ellipse(35, -52, 30,30); // bird head
        quad(-35, -103, -28, -50, -17, -28, -14, -103); // tail
        triangle(40,-63,35,-79,30,-62); // beak
        quad(0,0,5,0,5, -25, 0, -25) // leg
    fill(255); //white
        ellipse(40, -54, 6,6) // eyes
     pop();



}