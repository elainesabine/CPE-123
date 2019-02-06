// Asmita Sharma and Elaine Pranadjaya

var x=160, y= 200;
var sc=0.7;
var bool= false;
var cx=0, cy=0, w=400, h=30;
var c1, c2, c3, c4;
var ic= 0.5;
var res= 80;
var moveOrca;
var OrcaX = 0;
var icebergX = 5;
var icebergY = 10;
var icebergScale = 0.98;
var moveIceberg;
var t1, t2, s;
var wx, wy;
var wlx= 245, wly= -80;
var dx=5, dy= 3;
var wrx= 90, wry= -130;
var dx1=3, dy1= 3;

function setup()
{
    colorMode(RGB);
    createCanvas(400,934);
    frameRate(5);
    c1= color(250, 250, 250);
    c2= color(20, 20, 20);
    c3= color(20, 20, 20);
    c4= color(220, 220, 220);
    moveIceberg = false;
    moveOrca = false;
}

function draw()
{
    background(220, 220, 220);

    //backgrounds
        push();
        noStroke();
        fill(67, 69, 66);
        quad(0, 400, 0, 300, 400, 255, 400, 400);

        gradient(c1, c2, res);

        fill(148, 153, 145);
        //triangle(0, 258, 216, 275, 0, 300);

        fill(30, 30, 30);
        quad(0, 400, 0, 350, 400, 360, 400, 400);

        beginShape();
        fill(49, 51, 49);
        curveVertex(0, 400);
        curveVertex(0, 353);
        curveVertex(55, 357);
        curveVertex(224, 328);
        curveVertex(253, 291);
        curveVertex(323, 318);
        curveVertex(400, 280);
        curveVertex(400, 400);
        curveVertex(0, 400);
        endShape();
        pop();

    //Face
        fill(0);
        bezier(120, 260, 100, 260, 50, 110, 110, 100);

        fill(30, 30, 30, 240);
        quad(188, 100, 206, 105, 210, 232, 188, 232);
        fill(220, 220, 220, 200);
        fill(220, 220, 220, 200);
        arc(230, 149, 10, 10, PI/2, 3*PI/2);
        fill(0);
        quad(206, 115, 228, 128, 230, 240, 198, 232);

        push();
        stroke(17, 58, 90);
        line(190, 130, 200, 130);
        line(190, 150, 200, 150);
        line(190, 170, 200, 170);
        line(190, 190, 200, 190);
        line(190, 210, 200, 210);
        pop();

    //Nose
        fill(0);
        bezier(222, 194, 279, 191, 207, 163, 230, 147);

    //Mouth
        push();
        fill(130);
        noStroke();
        triangle(228, 193, 231, 205, 233, 200);
        triangle(230, 206, 220, 209, 230, 214);

        noStroke();
        fill(220, 220, 220);

        //arc(231, 139, 13, 13, PI/2, 3*PI/2);
        //arc(235, 225, 15, 15, PI/2, 3*PI/2);

        pop();
        fill(20, 20, 20);
        triangle(232, 149, 227, 156, 223, 135);

        fill(0)
        ellipse(213, 233, 38, 30);


    //Buildings
        fill(80, 80, 80);
        rect(110, 191, 10, 68);

        fill(40, 40, 40);
        quad(108, 99, 98, 106, 106, 213, 116, 195);

        fill(150, 150, 150);
        line(102, 116, 110, 116);
        line(102, 125, 110, 125);
        line(102, 135, 110, 135);
        line(102, 150, 110, 150);
        line(102, 165, 110, 165);
        line(102, 180, 110, 180);

        fill(51, 44, 36); // Brown Black
        quad(121, 190, 130, 195, 130, 259, 122, 259);

        fill(145, 135, 124); // blue black
        quad(130,188,135, 191, 133, 262, 127, 264);
        rect(131, 178, 0.5, 10);

        fill(35, 46, 26); //Green black
        rect(133, 227, 5, 35);

        fill(50, 50, 50, 250); //blacky
        rect(182, 213, 15, 25);

        fill(42, 35, 51); // purple black
        rect(168, 225, 20, 25);

        fill(0);
        rect(165, 245, 18, 13);

        line(175, 215, 175, 224);
        ellipse(175, 215, 2);

        fill(255, 255, 0);
        line(185, 128, 187, 128);
        ellipse(185, 128, 2);
        line(185, 138, 187, 138);
        ellipse(185, 138, 2);
        line(185, 148, 187, 148);
        ellipse(185, 148, 2);
        line(185, 158, 187, 158);
        ellipse(185, 158, 2);
        line(185, 168, 187, 168);
        ellipse(185, 168, 2);
        line(185, 178, 187, 178);
        ellipse(185, 178, 2);
        line(185, 188, 187, 188);
        ellipse(185, 188, 2);

    //Body

        fill(0);
        quad(130, 260, 90, 255, 90, 267, 120, 270);
        bezier(109, 266, 76, 288, 38, 365 ,65, 397);

        bezier(240, 140, 245, 104, 225, 104, 190, 104);

        fill(0);
        beginShape();

        curveVertex(218, 252);
        curveVertex(197, 237);
        curveVertex(187, 246);
        curveVertex(188, 259);
        curveVertex(173, 274);
        curveVertex(166, 279);
        curveVertex(165, 285);
        curveVertex(186, 293);
        curveVertex(185, 297);
        curveVertex(201, 302);
        curveVertex(204, 305);
        curveVertex(206, 316);
        curveVertex(210, 333);
        curveVertex(206, 345);
        curveVertex(218, 356);
        curveVertex(222, 369);
        curveVertex(226, 381);
        curveVertex(233, 392);
        curveVertex(233, 396);
        curveVertex(146, 392);
        curveVertex(104, 393);
        curveVertex(65, 396);
        curveVertex(63, 395);
        curveVertex(96, 301);
        curveVertex(218, 252);

        endShape();

        ellipse(109, 283, 40, 40);


    //Mouse Hover for visible coordinates
    /*push();
        fill(150, 50, 90);
        textSize(20);
        textAlign(CENTER);
        text("("+ floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
    pop();
    */
        fill(0);

        if(bool== false)
            {
                quad(107, 99, 187, 99, 196, 236, 119, 289);
                quad(96, 108, 106, 101, 124, 254, 111, 258);
                quad(184, 98, 209, 117, 200, 236, 183, 227);
                ellipse(145, 101, 80, 20);
            }

        else
        {
            birds(x, y); //Calling the function
            //Road
                fill(62, 66, 64);
                quad(76, 396, 130, 289, 142, 283, 95, 395);

                fill(230, 230, 230);
                line(89, 382, 94, 371);
                line(101, 360, 106, 349);
                line(113, 333, 119, 320);
                line(125, 308, 130, 298);

                fill(62, 66, 64);
                line(160, 250, 160, 265);
                fill(240, 0, 0);
                ellipse(160.5, 250, 2, 2);
        }


    push();
    translate(0,400);
    scale(0.67);

        push();
        translate(-200,-280);
        scale(1.3);

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
    pop();
        // fix lines top of cone
        noStroke();
        fill(123,140,207);
        rect(0,0,600,110)


    push();
    translate(-200,-250)
    scale(1.3);
    // ice berg
    fill(255);
    noStroke();
        push();
        translate(icebergX, icebergY);
        scale(icebergScale);
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
    pop();

     push();
    //wx=140, wy=1;
    scale(0.8);
    translate(140,200);



    // big orca left
    whaleleft(wlx, wly);

     if(wlx<-50)
       dx= 20;

    if(wlx> 420)
       wlx=0;

    if(wly >20)
        dy= -5;

    if(wly < -70)
        dy= 5;

   wlx+= dx;
   wly+= dy;



   // big orca right
  whaleright(wrx, wry);


    if(wrx < -50)
        dx1 =20;

    if(wrx> 410)
        wrx=-400;

    if(wry< 300);
        dy1 = -5;

    if(wry<-300)
        wry= 0;

    wrx+= dx1;
    wry+= dy1;



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
 pop();


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



 pop();

        fill(99,134,207);
        rect(565,0,400,800);
        rect(0,650,600,600);
pop();

    if(moveIceberg==true)
    {
        icebergY+=40;
        icebergX+=30;
        icebergScale-=0.05;
    }


    //if mouse is clicked on little killer whale
    if (moveOrca == true)
    {
        OrcaX += 5;
    }

  seaplankton();
  tree(250, 280, 0.3);
  tree(220, 275, 0.3);
  tree(190, 270, 0.3);
  tree(-160, 700, 0.6);
}

//--------------Functions--------------


function birds(x,y)
{
    for(var i=0; i< 25; i++)
        {
            push();
            translate(x,y);
            scale(sc);

            ellipse(0, 0, 2, 10);
            triangle(-6, -3, -15, 3, 0, 0);
            triangle(6, -3, 15, 3, 0, 0);
            triangle(0, 1, -3, 4, 3, 4);

            x= random(118, 190);
            y= random(20, 200);
            pop();
        }
}

//Mouse Moved
function mouseClicked()
{

    if (mouseX > 42 && mouseX < 96 && mouseY > 615 && mouseY < 641)
    {
        OrcaX = 0;
        moveOrca = true;
     }
    if(mouseX>90 && mouseX<200 && mouseY>350 && mouseY<550)
    {
        moveIceberg = true
    }
    if(mouseX>90 && mouseX <220 && mouseY>100 && mouseY< 255)
        bool= true;

    push();
        translate(mouseX,mouseY);
        ellipse(0, 0, 2, 10);
        triangle(-6, -3, -15, 3, 0, 0);
        triangle(6, -3, 15, 3, 0, 0);
        triangle(0, 1, -3, 4, 3, 4);
        x= random(118, 190);
        y= random(20, 200);
    pop();
}

function gradient(c1, c2, res)
{
    for(var i=0; i< res; i++)
    {
        var w=400, h=400/res;
        noStroke();
        fill(lerpColor(c1, c2, i/res));
        rect(0, i*h, w, h);
    }

}

function tree(t1, t2, s)
{
    push();
       translate(t1, t2);
       scale(s);

        push();
          fill(30);
          strokeWeight(7);
        beginShape();
            curveVertex(340, 359);
            curveVertex(353, 330);
            curveVertex(365, 306);
            curveVertex(345, 294);
            curveVertex(337, 267);
            curveVertex(325, 233);
            curveVertex(341, 221);
            curveVertex(350, 239);
            curveVertex(353, 285);
            curveVertex(349, 309);
            curveVertex(345, 365);
            curveVertex(360, 367);
            curveVertex(354, 400);
            curveVertex(340, 359);
        endShape();
        pop();
            quad(335, 400, 338, 294, 350, 259, 350, 401);
            triangle(349, 359,347, 400, 368, 400);

            triangle(265, 214, 326, 239, 328, 227);
            triangle(292, 218, 269, 162, 286, 217);
            triangle(278, 186, 302, 146, 278, 190);
            triangle(334, 220, 348, 169, 337, 222);
            triangle(341, 193, 316, 175, 340, 197);
            triangle(330, 179, 346, 130, 330, 185);
            triangle(292, 161, 269, 107, 294, 154);
            triangle(288, 166, 322, 138, 290, 167);
            triangle(342, 221, 380, 179, 345, 225);
            triangle(305, 227, 278, 242, 308, 229);
            triangle(370, 187, 360, 142, 373, 187);
            triangle(340, 141, 328, 99, 343, 141);
            triangle(282, 133, 297, 90, 285, 129);
            triangle(334, 119, 360, 87, 334, 121);
            triangle(357, 206, 388, 200, 355, 210);
            triangle(366, 162, 390, 123, 367, 164);

    pop();

}

function seaplankton()
{
    push();

    translate(50,630);
    scale(0.9);
    //Sea Planktons
        noStroke();
        fill(41, 190, 179); //Blue
        ellipse(7, 380, 30, 40);
        ellipse(12, 345, 30, 40);
        ellipse(6, 310, 30, 40);

        fill(158, 107, 16, 220); // BrownGreen
        ellipse(20, 380, 30, 45);
        ellipse(24, 340, 30, 45);
        ellipse(27, 304, 30, 30);

        fill(158, 107, 16, 200);
        ellipse(53, 390, 25, 50);
        ellipse(55, 350, 25, 40);
        ellipse(55, 313, 25, 45);
        ellipse(56, 280, 25, 35);
        ellipse(57, 245, 25, 40);

        ellipse(77, 390, 20, 40);
        ellipse(77, 355, 25, 40);
        ellipse(76, 320, 25, 38);
        ellipse(77, 284, 25, 40);

        ellipse(94, 390, 15, 30);
        ellipse(94, 370, 15, 25);
        ellipse(94, 350, 15, 20);
        ellipse(94, 333, 15, 20);

        fill(18, 144, 141, 170);
        ellipse(120, 390, 20, 40);
        ellipse(120, 355, 20, 40);
        ellipse(120, 320, 20, 40);
        ellipse(120, 290, 15, 30);

        ellipse(139, 395, 20, 40);
        ellipse(139, 360, 20, 35);
        ellipse(139, 330, 20, 35);
        ellipse(139, 300, 20, 35);
        ellipse(139, 270, 20, 35);
        ellipse(139, 240, 20, 35);
        ellipse(139, 215, 15, 15);

        ellipse(170, 390, 20, 35);
        ellipse(170, 360, 20, 35);
        ellipse(170, 330, 20, 35);
        ellipse(170, 300, 20, 35);
        ellipse(170, 270, 20, 35);

        fill(158, 107, 16, 180); // BrownGreen
        ellipse(195, 387, 20, 35);
        ellipse(195, 355, 20, 35);

        fill(191, 158, 9, 180);
        ellipse(195, 325, 20, 35);
        ellipse(195, 295, 20, 35);
        ellipse(195, 265, 20, 35);

        fill(9, 133, 80, 180); // near eye plankton
        ellipse(210, 390, 20, 35);
        ellipse(210, 360, 20, 35);
        ellipse(210, 330, 20, 35);
        ellipse(210, 300, 20, 35);

        fill(158, 107, 16, 180);
        ellipse(230, 390, 10, 35);
        ellipse(230, 360, 10, 35);
        ellipse(230, 330, 10, 35);
        ellipse(230, 300, 10, 30);
        ellipse(230, 270, 10, 30);
        ellipse(230, 240, 10, 30);

        ellipse(260, 390, 20, 35);
        ellipse(260, 360, 20, 35);
        fill(191, 158, 9, 180);
        ellipse(260, 330, 20, 35);
        ellipse(260, 300, 20, 35);
        ellipse(260, 270, 20, 35);
        ellipse(260, 240, 20, 35);

        fill(158, 107, 16, 180);
        ellipse(275, 390, 20, 35);
        ellipse(275, 360, 20, 35);

        fill(191, 158, 9, 180);
        ellipse(275, 330, 20, 35);
        ellipse(275, 300, 20, 35);

        fill(41, 190, 179, 180); //Blue
        ellipse(325, 390, 20, 35);
        ellipse(325, 360, 20, 35);
        ellipse(325, 330, 20, 35);
        ellipse(325, 300, 20, 35);
        ellipse(325, 270, 20, 35);
        ellipse(325, 240, 20, 35);

        fill(158, 107, 16, 220); // BrownGreen
        ellipse(337, 385, 20, 40);
        ellipse(337, 360, 20, 40);
        ellipse(337, 340, 20, 40);
        ellipse(337, 310, 20, 40);
        ellipse(337, 280, 20, 40);
        ellipse(337, 255, 20, 40);

        fill(41, 190, 179, 180); //Blue
        ellipse(360, 390, 20, 35);
        ellipse(360, 360, 20, 35);
        ellipse(360, 330, 20, 35);
        ellipse(360, 300, 20, 35);
        ellipse(360, 270, 20, 35);
        ellipse(360, 240, 20, 35);

        ellipse(380, 390, 20, 35);
        ellipse(380, 360, 20, 35);
        fill(158, 107, 16, 180);
        ellipse(380, 330, 20, 35);
        ellipse(380, 300, 20, 35);

        fill(158, 107, 16, 220); // BrownGreen
        ellipse(380, 390, 20, 35);
        fill(158, 107, 16, 180);
        ellipse(380, 360, 20, 35);
        ellipse(380, 330, 20, 35);

        ellipse(395, 385, 10, 40);
        ellipse(395, 360, 10, 40);
        fill(158, 107, 16, 180);
        ellipse(395, 340, 10, 40);
        ellipse(395, 320, 10, 40);
        ellipse(395, 310, 10, 40);
    pop();
}


function tree(t1, t2, s)
{
    push();
       translate(t1, t2);
       scale(s);

        push();
          fill(30);
          strokeWeight(7);
        beginShape();
            curveVertex(340, 359);
            curveVertex(353, 330);
            curveVertex(365, 306);
            curveVertex(345, 294);
            curveVertex(337, 267);
            curveVertex(325, 233);
            curveVertex(341, 221);
            curveVertex(350, 239);
            curveVertex(353, 285);
            curveVertex(349, 309);
            curveVertex(345, 365);
            curveVertex(360, 367);
            curveVertex(354, 400);
            curveVertex(340, 359);
        endShape();
        pop();

            quad(335, 400, 338, 294, 350, 259, 350, 401);
            triangle(349, 359,347, 400, 368, 400);
            triangle(265, 214, 326, 239, 328, 227);
            triangle(292, 218, 269, 162, 286, 217);
            triangle(278, 186, 302, 146, 278, 190);
            triangle(334, 220, 348, 169, 337, 222);
            triangle(341, 193, 316, 175, 340, 197);
            triangle(330, 179, 346, 130, 330, 185);
            triangle(292, 161, 269, 107, 294, 154);
            triangle(288, 166, 322, 138, 290, 167);
            triangle(342, 221, 380, 179, 345, 225);
            triangle(305, 227, 278, 242, 308, 229);
            triangle(370, 187, 360, 142, 373, 187);
            triangle(340, 141, 328, 99, 343, 141);
            triangle(282, 133, 297, 90, 285, 129);
            triangle(334, 119, 360, 87, 334, 121);
            triangle(357, 206, 388, 200, 355, 210);
            triangle(366, 162, 390, 123, 367, 164);
    pop();
}

function whaleleft(wlx, wly)
{


    // big orca bottom left
    push();
    scale(1.8);
    translate(wlx, wly);
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

}

function whaleright(wrx, wry)
{
     // big orca right
    push();
    scale(2);
    translate(wrx, wry);

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
}
