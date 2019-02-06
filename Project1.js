var scaleBird = 1;
var xBird = 190;
var yBird = 178;
var bird_counter = 0;

var boyX = 348;
var boyY = 288;
var counter = 0;

var scaleAnalisa = 1.2;

// background grid variables
var linex1 = -100;
var linex2 = 600;
var linex3, linex4;

function setup() {
   createCanvas(1000, 500);


}

function draw() {
  background(82,173,212)
   //ELAINE

   // background grid

   /*push();
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
   pop();*/

   for (var x = 0; x < width; x += width / 100) {
       for (var y = 0; y < height; y += height / 50) {
         stroke(255);
         strokeWeight(1);
         line(x, 0, x, height);
         line(0, y, width, y);
       }
   }

     //---------

     push();
     scale(1);
     translate(25,0);

     noStroke();
     fill(255); // white
         ellipse(270,230,400,410); // white circle

    push(); //orange circle
      translate(500, 0);
      scale(scaleAnalisa);

     fill(245, 87, 60);
     noStroke();
     ellipse(205, 66, 120);
    pop();



   // BIRD
   drawBird();

     bird_counter +=1
     if (bird_counter < 1000)
     {xBird += 5;
      yBird -= .5;
      scaleBird -= .004;
     }


// ANALISA

push(); //start of ANALISA
translate(500,0);
scale(scaleAnalisa);

   //left tree******************************************
   fill(116, 83, 66);
   noStroke();

   beginShape();  //tree trunk
      curveVertex(64, 281);
      curveVertex(64, 281);
      curveVertex(63, 202);
      curveVertex(62, 195);
      curveVertex(64, 189);
      curveVertex(66, 140); //top left corner
      curveVertex(80, 138); //top right corner
      curveVertex(80, 223);
      curveVertex(81, 230);
      curveVertex(80, 238);
      curveVertex(80, 280); //bottom right corner
      curveVertex(71, 283); //middle bottom point
      curveVertex(71, 283);
   endShape();

   beginShape();  //left branch
      curveVertex(66, 140); //start of left branch
      curveVertex(66, 140);
      curveVertex(44, 108);
      curveVertex(32, 102);
      curveVertex(26, 92);
      curveVertex(27, 84);
      curveVertex(31, 77);
      curveVertex(34, 71);
      curveVertex(35, 52);
      curveVertex(34, 48); //branch tip
      curveVertex(37, 52);
      curveVertex(37, 70);
      curveVertex(37, 78);
      curveVertex(31, 83);
      curveVertex(30, 88);
      curveVertex(30, 92);
      curveVertex(37, 98);
      curveVertex(41, 99); //2 left branches meet
      curveVertex(41, 95); //start of right branch
      curveVertex(38, 89);
      curveVertex(24, 72);
      curveVertex(12, 68);
      curveVertex(5, 65);
      curveVertex(3, 58);
      curveVertex(6, 63);
      curveVertex(20, 68);
      curveVertex(15, 61);
      curveVertex(9, 58);
      curveVertex(16, 59);
      curveVertex(21, 64);
      curveVertex(45, 88);
      curveVertex(56, 77);
      curveVertex(59, 71);
      curveVertex(59, 77);
      curveVertex(49, 89);
      curveVertex(48, 99);
      curveVertex(80, 138);
      curveVertex(80, 138);
   endShape();

   beginShape(); //right branch
      curveVertex(66, 140);
      curveVertex(66, 140);
      curveVertex(108, 84);
      curveVertex(104, 75);
      curveVertex(96, 67);
      curveVertex(89, 64);
      curveVertex(81, 63);
      curveVertex(75, 61);
      curveVertex(69, 61);
      curveVertex(59, 66);
      curveVertex(65, 60);
      curveVertex(75, 59);
      curveVertex(72, 54);
      curveVertex(67, 51);
      curveVertex(62, 49);
      curveVertex(67, 49);
      curveVertex(73, 52);
      curveVertex(80, 59);
      curveVertex(96, 61);
      curveVertex(112, 74); //2 right branches meet
      curveVertex(119, 73);
      curveVertex(125, 68);
      curveVertex(131, 63);
      curveVertex(137, 58);
      curveVertex(135, 55);
      curveVertex(132, 48);
      curveVertex(135, 51);
      curveVertex(138, 56);
      curveVertex(140, 48);
      curveVertex(141, 56);
      curveVertex(138, 62);
      curveVertex(130, 67);
      curveVertex(128, 73);
      curveVertex(118, 80);
      curveVertex(115, 92);
      curveVertex(80, 138);
      curveVertex(80, 138);
   endShape();

   //middle tree****************************************
   fill(116, 83, 66);
   noStroke();

   beginShape(); //trunk
      curveVertex(192, 282);
      curveVertex(192, 282);
      curveVertex(193, 138); //top left corner
      curveVertex(209, 134); //top right corner
      curveVertex(208, 281); //bottom right corner
      curveVertex(208, 281);
   endShape();

   beginShape(); //left branch
      curveVertex(193, 138);
      curveVertex(193, 138);
      curveVertex(186, 122);
      curveVertex(184, 103);
      curveVertex(170, 83);
      curveVertex(161, 76);
      curveVertex(158, 66);
      curveVertex(156, 62);
      curveVertex(156, 58);
      curveVertex(154, 52);
      curveVertex(156, 55);
      curveVertex(158, 58);
      curveVertex(159, 62);
      curveVertex(162, 59);
      curveVertex(165, 56);
      curveVertex(166, 52);
      curveVertex(166, 58);
      curveVertex(161, 64);
      curveVertex(161, 69);
      curveVertex(166, 76);
      curveVertex(172, 80); //2 left branches meet
      curveVertex(176, 74);
      curveVertex(185, 66);
      curveVertex(185, 64);
      curveVertex(180, 57);
      curveVertex(180, 52);
      curveVertex(182, 56);
      curveVertex(187, 62);
      curveVertex(189, 58);
      curveVertex(190, 52);
      curveVertex(191, 60);
      curveVertex(187, 68);
      curveVertex(180, 74);
      curveVertex(177, 79);
      curveVertex(177, 84);
      curveVertex(188, 98);
      curveVertex(190, 103);
      curveVertex(191, 108);
      curveVertex(196, 115);
      curveVertex(209, 134);
      curveVertex(209, 134);
   endShape();

   beginShape(); //right branch
      curveVertex(193, 138);
      curveVertex(193, 138);
      curveVertex(196, 115);
      curveVertex(220, 81);
      curveVertex(228, 74);
      curveVertex(239, 67);
      curveVertex(236, 60);
      curveVertex(237, 56);
      curveVertex(239, 62);
      curveVertex(242, 65);
      curveVertex(249, 58);
      curveVertex(251, 52);
      curveVertex(250, 62);
      curveVertex(239, 72);
      curveVertex(225, 82);
      curveVertex(216, 94);
      curveVertex(210, 105);
      curveVertex(209, 110);
      curveVertex(211, 116); //2 branches meet
      curveVertex(219, 117);
      curveVertex(228, 108);
      curveVertex(229, 96);
      curveVertex(226, 78);
      curveVertex(225, 70);
      curveVertex(220, 63);
      curveVertex(218, 58);
      curveVertex(219, 54);
      curveVertex(221, 61);
      curveVertex(224, 66);
      curveVertex(227, 59);
      curveVertex(228, 53);
      curveVertex(228, 62);
      curveVertex(227, 73);
      curveVertex(228, 83);
      curveVertex(232, 94);
      curveVertex(232, 105);
      curveVertex(226, 115);
      curveVertex(214, 125);
      curveVertex(209, 134);
      curveVertex(209, 134);
   endShape();

   //right tree*****************************************
   fill(116, 83, 66);
   noStroke();

   beginShape(); //trunk
      curveVertex(321, 283);
      curveVertex(321, 283);
      curveVertex(324, 133); //top left corner
      curveVertex(330, 122); //top middle
      curveVertex(341, 134); //top right corner
      curveVertex(338, 283); //bottom right corner
      curveVertex(338, 283);
   endShape();

   beginShape(); //left branch
      curveVertex(324, 133);
      curveVertex(324, 133);
      curveVertex(323, 128);
      curveVertex(313, 115);
      curveVertex(306, 96);
      curveVertex(301, 93);
      curveVertex(296, 92);
      curveVertex(285, 85);
      curveVertex(279, 77);
      curveVertex(278, 74);
      curveVertex(272, 66);
      curveVertex(271, 59);
      curveVertex(270, 56);
      curveVertex(273, 59);
      curveVertex(274, 64);
      curveVertex(276, 63);
      curveVertex(277, 59);
      curveVertex(278, 64);
      curveVertex(275, 67);
      curveVertex(281, 74);
      curveVertex(282, 77);
      curveVertex(295, 85);
      curveVertex(303, 90); //2 branches meet
      curveVertex(303, 87);
      curveVertex(295, 77);
      curveVertex(295, 74);
      curveVertex(287, 64);
      curveVertex(284, 63);
      curveVertex(284, 61);
      curveVertex(279, 56);
      curveVertex(278, 51);
      curveVertex(281, 55);
      curveVertex(294, 68);
      curveVertex(299, 74);
      curveVertex(303, 80);
      curveVertex(308, 81);
      curveVertex(317, 102);
      curveVertex(318, 107);
      curveVertex(330, 121);
      curveVertex(330, 121);
   endShape();

   beginShape(); //right branch
      curveVertex(330, 121);
      curveVertex(330, 121);
      curveVertex(352, 100);
      curveVertex(352, 97);
      curveVertex(347, 85);
      curveVertex(348, 79);
      curveVertex(331, 62);
      curveVertex(326, 57);
      curveVertex(325, 51);
      curveVertex(328, 56);
      curveVertex(332, 59);
      curveVertex(332, 48);
      curveVertex(334, 53);
      curveVertex(342, 48);
      curveVertex(343, 46);
      curveVertex(343, 50);
      curveVertex(335, 56);
      curveVertex(335, 61);
      curveVertex(349, 74);
      curveVertex(354, 82); //2 branches meet
      curveVertex(368, 66);
      curveVertex(368, 61);
      curveVertex(365, 54);
      curveVertex(367, 49);
      curveVertex(371, 62);
      curveVertex(376, 60);
      curveVertex(381, 57);
      curveVertex(385, 48);
      curveVertex(385, 54);
      curveVertex(379, 62);
      curveVertex(372, 67);
      curveVertex(364, 80);
      curveVertex(362, 90);
      curveVertex(363, 99);
      curveVertex(361, 105);
      curveVertex(341, 134);
      curveVertex(341, 134);
   endShape();

   var scaleBoy = 1; //variable to control the scale of the boy

   push(); //boy********************************************
      translate(boyX, boyY);       //regular scale
      scale(scaleBoy);

      /*translate(360, 320);     //scaled smaller
      scale(scaleBoy-.5);*/

      /*translate(300, 200);     //scaled larger
      scale(scaleBoy+1);*/

      fill(117, 176, 232); //body---------------------------
      noStroke();
      quad(5, 64, 14, 68, 13, 77, 2, 75); //left leg
      fill(0, 0, 0);
      noStroke();
      quad(2.5, 73, 13, 75, 13, 77, 2, 75); //left shoe

      fill(117, 176, 232); //right leg
      noStroke();
      quad(25, 69, 34, 68, 38, 75, 28, 80);
      fill(0, 0, 0);
      noStroke();
      quad(27.5, 78, 37, 73, 38, 75, 28, 80); //right shoe

      fill(126, 90, 119); //main body
      noStroke();
      beginShape();
         curveVertex(3, 64);
         curveVertex(3, 64);
         curveVertex(15, 29);
         curveVertex(21, 30);
         curveVertex(28, 30);
         curveVertex(38, 67);
         curveVertex(20, 69);
         curveVertex(11, 67);
         curveVertex(11, 67);
      endShape();

      fill(122, 80, 68); //brown belt
      noStroke();
      beginShape();
         curveVertex(11, 40);
         curveVertex(11, 40);
         curveVertex(21, 42);
         curveVertex(32, 42);
         curveVertex(34, 48);
         curveVertex(36, 57);
         curveVertex(19, 58);
         curveVertex(6, 56);
         curveVertex(6, 56);
      endShape();

      fill(248, 105, 110); //hand
      noStroke();
      ellipse(22, 56, 6);

      fill(126, 90, 119); //arm
      noStroke();
      rect(20, 40, 5, 14);

      fill(248, 105, 110); //head---------------------
      noStroke();
      ellipse(24, 14, 23);

      fill(126, 90, 119); //hat
      noStroke();
      arc(24, 14, 23, 23, -3*PI/4, PI/3, CHORD);

      fill(246, 174, 63); //scarf---------------------
      noStroke();
      beginShape();
         curveVertex(15, 29);
         curveVertex(15, 29);
         curveVertex(14, 26);
         curveVertex(16, 23);
         curveVertex(22, 24);
         curveVertex(28, 24);
         curveVertex(31, 27);
         curveVertex(28, 30);
         curveVertex(21, 30);
         curveVertex(21, 30);
      endShape();
      triangle(28, 30, 34, 48, 40, 46);

   pop(); //end of boy

   counter += 1;
   if (counter < 1000)
   {
     boyX -= 5;
   }

pop(); //end of ANALISA



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

push();
translate(-15,0);
  noStroke();
   fill(138,144,56); // green
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
pop();


} //end of draw function

function drawBird()
{
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
