var moveOrca;
var OrcaX = 0;

function setup()
	{
	createCanvas(600, 800);
	moveOrca = false;
	}

function draw()
	{

    background(123,140,207);

		/* // background gradient
		var countbackground;
		var backgroundY = 0;
		var bluefill = 200;
		for (countbackground = 0; countbackground <50;countbackground +=1)
		{
			push();
			translate(0, backgroundY);
			fill(100,127, bluefill)
			rect(0, 0, 600, 800)
			pop();
			backgroundY += 30
			bluefill += 5
		} */

		//ice cream cone
    fill(149,124,67);
    noStroke();
    triangle(199,275,295, 719, 420, 266);

		// stripes on ice cream cone
		var count;
		var linex1 = 210;
		var liney1 = 673;
		var linex2 = 450;
		var liney2 = 770;
		stroke(87, 66, 12);
		strokeWeight(3);
		for(count = 0; count <25; count +=1)
		{
			line(linex1, liney1, linex2, liney2);
			linex1 -= .5;
			liney1 -= 20;
			linex2 -= .5;
			liney2 -= 20;
		}

		var linex3 = 450;
		var liney3 = 673;
		var linex4 = 210;
		var liney4 = 770;

		for(count = 0; count <25; count +=1)
		{
			line(linex3, liney3, linex4, liney4);
			linex3 -= .5;
			liney3 -= 20;
			linex4 -= .5;
			liney4 -= 20;
		}

		// fix lines right side
		noStroke();
		fill(123,140,207);
		quad(420, 266, 275, 739, 590, 800, 600, 263);

		// fix lines left side
		noStroke();
		fill(123,140,207);
		quad(199,275,305, 729, 0, 1000, 0, 200);

		// fix lines top of cone
		noStroke();
		fill(123,140,207);
		quad(100,275,520,266,520, 100, 100, 100);

    // ice berg
    fill(255);
    noStroke();
    beginShape();
    	curveVertex(200,275);
    	curveVertex(200,275);
    	curveVertex(203,271);
    	curveVertex(198,246);
    	curveVertex(210,229);
    	curveVertex(197,193);
    	curveVertex(248,149);
    	curveVertex(253,128);
    	curveVertex(266,118);
    	curveVertex(270,92);
    	curveVertex(283,76);
    	curveVertex(291,80);
    	curveVertex(306,65);
    	curveVertex(338,100);
    	curveVertex(338,115);
    	curveVertex(345,116);
    	curveVertex(352,125);
    	curveVertex(370,124);
    	curveVertex(364,139);
    	curveVertex(373,133);
    	curveVertex(400,150);
    	curveVertex(398,164);
    	curveVertex(416,184);
    	curveVertex(410,213);
    	curveVertex(423,235);
    	curveVertex(416,251);
    	curveVertex(417,270);
    	curveVertex(384,286);
    	curveVertex(312,295);
    	curveVertex(248,290);
    	curveVertex(200,275);
    	curveVertex(200,275);
    endShape();

 		// big orca bottom left
    push();
    scale(1.8);
    translate(245,-80);
    rotate(PI/4.5);
		// body
    fill(0);
    ellipse(158, 366, 54, 30);
    // tail
    beginShape();
    	curveVertex(143, 357);
    	curveVertex(143, 357);
    	curveVertex(133, 359);
    	curveVertex(126, 358);
    	curveVertex(126, 352);
    	curveVertex(122, 348);
    	curveVertex(120, 352);
    	curveVertex(120, 356);
    	curveVertex(115, 355);
    	curveVertex(111, 356);
    	curveVertex(114, 361);
    	curveVertex(119, 363);
    	curveVertex(130, 374);
    	curveVertex(144, 379);
    	curveVertex(144, 379);
    endShape();
    // white stripe
    fill(255);
    beginShape();
    	curveVertex(140, 374);
    	curveVertex(140, 374);
    	curveVertex(147, 379);
    	curveVertex(167, 378);
    	curveVertex(175, 375);
    	curveVertex(184, 366);
    	curveVertex(169, 367);
    	curveVertex(158, 375);
    	curveVertex(149, 375);
		curveVertex(149, 375);
    endShape();
    //left fin
    fill(0);
    beginShape();
    	curveVertex(151, 373);
    	curveVertex(151, 373);
    	curveVertex(149, 387);
    	curveVertex(158, 378);
    	curveVertex(159, 371);
    	curveVertex(159, 371);
    endShape();
    //right fin
    fill(0);
    beginShape();
    	curveVertex(178, 373);
    	curveVertex(178, 373);
    	curveVertex(189, 373);
    	curveVertex(183, 369);
		curveVertex(183, 369);
    endShape();
    //white eye
    fill(255);
    ellipse(162, 361, 8, 5);
    pop();


		// big orca right
    push();
    scale(2);
    translate(90,-130);
		// body
    fill(0);
    ellipse(158, 366, 54, 30);
    // tail
    beginShape();
    	curveVertex(143, 357);
    	curveVertex(143, 357);
    	curveVertex(133, 359);
    	curveVertex(126, 358);
    	curveVertex(126, 352);
    	curveVertex(122, 348);
    	curveVertex(120, 352);
    	curveVertex(120, 356);
    	curveVertex(115, 355);
    	curveVertex(111, 356);
    	curveVertex(114, 361);
    	curveVertex(119, 363);
    	curveVertex(130, 374);
    	curveVertex(144, 379);
    	curveVertex(144, 379);
    endShape();
    // white stripe
    fill(255);
    beginShape();
    	curveVertex(140, 374);
    	curveVertex(140, 374);
    	curveVertex(147, 379);
    	curveVertex(167, 378);
    	curveVertex(175, 375);
    	curveVertex(184, 366);
    	curveVertex(169, 367);
    	curveVertex(158, 375);
    	curveVertex(149, 375);
		curveVertex(149, 375);
    endShape();
    //left fin
    fill(0);
    beginShape();
    	curveVertex(151, 373);
    	curveVertex(151, 373);
    	curveVertex(149, 387);
    	curveVertex(158, 378);
    	curveVertex(159, 371);
    	curveVertex(159, 371);
    endShape();
    //right fin
    fill(0);
    beginShape();
    	curveVertex(178, 373);
    	curveVertex(178, 373);
    	curveVertex(189, 373);
    	curveVertex(183, 369);
		curveVertex(183, 369);
    endShape();
    //white eye
    fill(255);
    ellipse(162, 361, 8, 5);
    pop();


    // little orca top left
    push();
    translate(OrcaX, 0);
    fill(0);
    ellipse(158, 366, 54, 30);
    // tail
    beginShape();
    	curveVertex(143, 357);
    	curveVertex(143, 357);
    	curveVertex(133, 359);
    	curveVertex(126, 358);
    	curveVertex(126, 352);
    	curveVertex(122, 348);
    	curveVertex(120, 352);
    	curveVertex(120, 356);
    	curveVertex(115, 355);
    	curveVertex(111, 356);
    	curveVertex(114, 361);
    	curveVertex(119, 363);
    	curveVertex(130, 374);
    	curveVertex(144, 379);
    	curveVertex(144, 379);
    endShape();
    // white stripe
    fill(255);
    beginShape();
    	curveVertex(140, 374);
    	curveVertex(140, 374);
    	curveVertex(147, 379);
    	curveVertex(167, 378);
    	curveVertex(175, 375);
    	curveVertex(184, 366);
    	curveVertex(169, 367);
    	curveVertex(158, 375);
    	curveVertex(149, 375);
		curveVertex(149, 375);
    endShape();
    //left fin
    fill(0);
    beginShape();
    	curveVertex(151, 373);
    	curveVertex(151, 373);
    	curveVertex(149, 387);
    	curveVertex(158, 378);
    	curveVertex(159, 371);
    	curveVertex(159, 371);
    endShape();
    //right fin
    fill(0);
    beginShape();
    	curveVertex(178, 373);
    	curveVertex(178, 373);
    	curveVertex(189, 373);
    	curveVertex(183, 369);
		curveVertex(183, 369);
    endShape();
    //white eye
    fill(255);
    ellipse(162, 361, 8, 5);
    pop();

		//ice berg texture
		fill(211, 217, 240);
		beginShape();
			curveVertex(307, 66);
			curveVertex(307, 66);
			curveVertex(306, 94);
			curveVertex(330, 109);
			curveVertex(339, 102);
			curveVertex(339, 102);
		endShape();

		beginShape();
			curveVertex(370, 132);
			curveVertex(370, 132);
			curveVertex(371, 146);
			curveVertex(382, 156);
			curveVertex(393, 158);
			curveVertex(401, 150);
			curveVertex(401, 150);
		endShape();

		beginShape();
			curveVertex(397, 162);
			curveVertex(397, 162);
			curveVertex(382, 171);
			curveVertex(411, 197);
			curveVertex(416, 182);
			curveVertex(398, 164);
			curveVertex(398, 164);
		endShape();

		beginShape();
			curveVertex(253, 133);
			curveVertex(253, 133);
			curveVertex(269, 139);
			curveVertex(258, 161);
			curveVertex(243, 153);
			curveVertex(243, 153);
		endShape();

		beginShape();
			curveVertex(275, 141);
			curveVertex(275, 141);
			curveVertex(264, 164);
			curveVertex(274, 167);
			curveVertex(284, 141);
			curveVertex(284, 141);
		endShape();

		beginShape();
			curveVertex(290, 153);
			curveVertex(290, 153);
			curveVertex(285, 168);
			curveVertex(307, 172);
			curveVertex(307, 172);
		endShape();

		beginShape();
			curveVertex(270, 176);
			curveVertex(270, 176);
			curveVertex(289, 177);
			curveVertex(276, 185);
			curveVertex(276, 185);
		endShape();

		beginShape();
			curveVertex(233, 285);
			curveVertex(233, 285);
			curveVertex(234, 241);
			curveVertex(243, 231);
			curveVertex(250, 241);
			curveVertex(248, 290);
			curveVertex(248, 290);
		endShape();

		beginShape();
			curveVertex(326, 185);
			curveVertex(326, 185);
			curveVertex(339, 229);
			curveVertex(329, 280);
			curveVertex(339, 280);
			curveVertex(347, 222);
			curveVertex(336, 192);
			curveVertex(336, 192);
		endShape();

		beginShape();
			curveVertex(360, 289);
			curveVertex(360, 289);
			curveVertex(363, 238);
			curveVertex(372, 234);
			curveVertex(378, 239);
			curveVertex(379, 287);
			curveVertex(379, 287);
		endShape();

		beginShape();
			curveVertex(201, 187);
			curveVertex(201, 187);
			curveVertex(219, 212);
			curveVertex(248, 186);
			curveVertex(243, 183);
			curveVertex(221, 203);
			curveVertex(205, 182);
			curveVertex(205, 182);
		endShape();

		beginShape();
			curveVertex(262, 293);
			curveVertex(262, 293);
			curveVertex(264, 228);
			curveVertex(276, 218);
			curveVertex(283, 229);
			curveVertex(282, 295);
			curveVertex(282, 295);
		endShape();

		beginShape();
			curveVertex(322, 130);
			curveVertex(322, 130);
			curveVertex(322, 159);
			curveVertex(334, 155);
			curveVertex(334, 155);
		endShape();

		//little ice bergs
		fill(255);
		rect(438, 194, 30, 30);
		rect(481, 191, 20, 20);
		rect(515, 190, 30, 10);

		rect(143, 190, 30, 30);
		rect(100, 195, 20, 20);
		rect(53, 199, 30, 10);

    //water
    fill(10, 112, 230, 70);
		noStroke();

    beginShape();
    	curveVertex(0,207);
    	curveVertex(0,207);
    	curveVertex(199,202);
    	curveVertex(242,212);
    	curveVertex(305,211);
    	curveVertex(306,221);
    	curveVertex(355,220);
    	curveVertex(362,214);
    	curveVertex(386,214);
    	curveVertex(399,216);
    	curveVertex(700,237);
    	curveVertex(850,800);
    	curveVertex(0,800);
    	curveVertex(0,207);
    	curveVertex(0,207);
    endShape();


    //if mouse is clicked on little killer whale
    if (moveOrca == true)
    {OrcaX += 1}

		// // mouse
		// push();
		// fill(200);
		// textSize(16);
		// textAlign(CENTER);
		// text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
		// pop();

	}

function mouseClicked()
{
   if (mouseX > 111 && mouseX < 187 && mouseY > 347 && mouseY < 381)
   {
      OrcaX = 0;
      moveOrca = true;
   }
}
