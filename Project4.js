// Scenery global variables
var grassLoc, grassDir;
var ballReddY = 0;
var ballBlackdY = 0;

// Caterpie global variables
var cX = 300;
var cY = 350;
var ctailRot, ctailMove
var canimate = false;
var cOpacity;

// Butterfree global variables
var wingSCALE = 1;
var wingCOUNTER = 0;

// Squirtle global variables
var sqLegR, sqLegL;
var movesqLegR, movesqLegL;
var squirtleLoc;
var movesqLegR = true;
var movesqLegL = true;
var animate = false;
var sOpacity;

// condition global variables
var action;
var attackCounter = 0;
var tear = false;
var appleHits = false;
var appledX = 0;
var appledY = 0;
var appleRot = 0;
var evolving = false;
var evoTimer = 0;
var evoCounter = 0;
var evolved = false;
var flyingAway = false;
var theta, theta2;
var bOpacity;
var glitter;

function setup() {
    createCanvas(600, 400);
    grassLoc = createVector(width/2, 365+(35/2));
    grassDir = createVector(0, 5);
    ctailRot = 0
    sqLegR = 0;
    sqLegL = 0;
    squirtleLoc = createVector(525, 350);
    theta = PI;
    theta2 = PI/3;
    bOpacity = 255;
    sOpacity = 255;
    cOpacity = 255;
    glitter = new PSys(cX-75, cY-75, 50);
}

function draw() {
    drawBackgroundGradient(0, 0, 600, 400, color(132, 215, 229), color(204, 240, 238), 'X_AXIS');
    drawBackgroundGradient(0, 225, 600, 175, color(46, 112, 138), color(25, 69, 104), 'Y_AXIS');
    drawBackgroundGradient(0, 365, 600, 35, color(47, 142, 100), color(28, 91, 83), 'X_AXIS');
    drawBackgroundTrees();
    drawTree();
    // APPLES ON TREE
    drawApple(50,50,0.65, 0);
    drawApple(112,38,0.55, 0);
    drawApple(180,23,0.6, 0);
    drawApple(141+appledX,89+appledY, 0.55, 0+appleRot);
    drawApple(213,107,0.65, 0);
    drawPikachu();

    action = 0;
    // Draw Pokeball until ball is fully opened
    if (ballBlackdY > -170 && !action) {
        drawPokeball(525, 350, 0.25, ballReddY, ballBlackdY);
        drawPokeball(300, 350, 0.25, ballReddY, ballBlackdY);
    }
    // Pokeball opening animation
    if (ballReddY > -20)
        ballReddY -= .25;
    if (ballBlackdY > -170)
        ballBlackdY -= 2.5;
    // Squirtle and Caterpie comes out of the Pokeballs
    if (ballBlackdY == -170) {
        drawSquirtle(squirtleLoc.x, squirtleLoc.y, .25);
        if (sOpacity > 0)
            drawFlashingSquirtle(squirtleLoc.x, squirtleLoc.y, .25, sOpacity);
        sOpacity -= 255/30;
        if (!evolved)
            drawCaterpie(cX, cY, 0.2);
        if (cOpacity > 0)
            drawFlashingCaterpie(cX, cY, 0.2, cOpacity);
        cOpacity -= 255/30;
        moveCaterpie();

        action++;
    }
    // Squirtle walks toward Caterpie
    if (squirtleLoc.x > 425 && action == 1 && sOpacity <= 0) {
        moveSquirtle();
        squirtleLoc.x -= 2.5
    }
    // Pikachu and Squirtle attack Caterpie
    if (squirtleLoc.x <= 425 && action == 1 && attackCounter < 150) {
        lightningAndWater();
        push();
            fill(0, 0, 0);
            strokeWeight(4);
            line(302, 345, 310, 355);
            line(310, 345, 302, 355);
        pop();
        attackCounter++;
    }
    // Caterpie cries and moves left until 150.
    if (attackCounter >= 150 && cX > 150) {
        tear = true;
        cX -= 2.5 // .75
    }
    if (tear)
        drawTear(cX+7, cY+7, .25, 0);
    // Apple falls on Caterpie
    if (cX == 150) {
        if (appledY < 240)
            appledY += 5;
        else if (appledY == 240)
            appleHits = true;
    }
    // Apple hits caterpie then rolls off
    if (appleHits) {
        if (appledY < 280) {
            appledY += 1.5;
            appledX -= 1.25;
            appleRot -= PI/6;
        }
        else if (appledY >= 280)
            evolving = true;
    }
    // Caterpie Evolving into Butterfree
    if (evolving) {
        tear = false;
        evoTimer++
        if (evoTimer < 100) {
            evoCounter++
            if (evoCounter > 0 && evoCounter < 50)
                drawFlashingCaterpie(cX, cY, 0.2, 255);
            else if (evoCounter == 50)
                evoCounter = -25;
            else if (evoCounter <= 0)
                drawCaterpie(cX, cY, 0.2);
        }
        else {
            evolved = true;
        }
    }


    // Butterfree Emerges
    if (evolved) {
        drawButterfree(cX, cY, .75, 0, wingSCALE);
        if (bOpacity > 0)
            drawFlashingButterfree(cX, cY, .75, 0, wingSCALE, bOpacity);
        bOpacity -= 255/30;
        if (cY > 250 && bOpacity <= 0) {
            cY -= 2.5;
        }
        else if (cY == 250) {
            flyingAway = true;
        }
    }
    //Butterfree flies around a little then flies away, leaving particles to drop down on Squirtle and Pikachu
    var next = createVector();
    var next2 = createVector();
    if (flyingAway) {
        if (theta > 0) {
            theta -= PI/150;
            next.x = 300 + 150 * cos(theta);
            next.y = 200 + 50 * sin(theta);
            cX = next.x;
            cY = next.y;
            glitter.run();
        }
        else if (theta <= 0 && theta2 < 4*PI/3) {
            theta2 += PI/150;
            next2.x = 350 + 150 * cos(theta2);
            next2.y = 175 + 50 * sin(theta2);
            cX = next2.x;
            cY = next2.y;
            glitter.run();
        }
        else if (theta2 >= 4*PI/3) {
            cX += 5;
            cY += -1;
        }
    }
    if (cX > width+200) {
        evolved = false;
        flyingAway = false;
    }

    wingCOUNTER += 1;
    if (wingCOUNTER > 0 && wingCOUNTER < 25)
        wingSCALE += 0.01;
    else if (wingCOUNTER == 25)
        wingCOUNTER = -24;
    else if (wingCOUNTER <= 0)
        wingSCALE -= 0.01;


    //Grass that moves away
    drawGrass(grassLoc.x, grassLoc.y, color(70, 170, 100), 'stroke', 1);
    drawGrass(grassLoc.x+1, grassLoc.y + 2, color(47, 142, 100, 125), 'noStroke', 1);
    drawGrass(grassLoc.x+2, grassLoc.y + 4, color(46, 114, 99, 125), 'noStroke', 1);

    if (grassLoc.y < height + 135)
    grassLoc.y += grassDir.y;
}

function drawBackgroundGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == 'Y_AXIS') {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == 'X_AXIS') {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function drawGrass(x, y, color, strokeTrue, sc) {
    push();
        translate(x, y);
        scale(sc);
        fill(color);
        if (strokeTrue == 'stroke')
            stroke(183, 215, 230);
        else
            noStroke();
        beginShape();
            vertex(-300, 17);
            vertex(-300, -12);
            bezierVertex(-296, -26, -281, -41, -281, -41);
            bezierVertex(-286, -18, -278, -13, -278, -13);
            bezierVertex(-263, -16, -266, -36, -266, -36);
            bezierVertex(-251, -18, -253, -14, -253, -14);
            bezierVertex(-249, -13, -243, -12, -243, -12);
            bezierVertex(-247, -19, -245, -36, -240, -36);
            bezierVertex(-235, -27, -228, -14, -228, -14);
            vertex(-237, -30);
            bezierVertex(-235, -40, -230, -46, -230, -46);
            bezierVertex(-224, -24, -215, -18, -215, -18);
            bezierVertex(-215, -37, -202, -48, -202, -48);
            bezierVertex(-204, -34, -195, -20, -195, -20);
            bezierVertex(-194, -24, -192, -30, -192, -30);
            bezierVertex(-195, -34, -197, -40, -195, -42);
            bezierVertex(-189, -43, -187, -39, -187, -39);
            bezierVertex(-183, -47, -175, -46,-175, -46);
            bezierVertex(-173, -35, -192, -30, -183, -19);
            bezierVertex(-180, -36, -163, -42,-163, -42);
            bezierVertex(-171, -18, -162, -19, -162, -19);
            bezierVertex(-148, -23, -156, -49, -156, -49);
            bezierVertex(-138, -39, -136, -28, -136, -28);
            bezierVertex(-123, -58, -136, -52, -133, -52);
            vertex(-133, -42);
            bezierVertex(-156, -47, -135, -62, -135, -62);
            bezierVertex(-109, -58, -125, -26, -125, -26);
            bezierVertex(-119, -39, -110, -37, -110, -37);
            bezierVertex(-107, -28, -113, -25, -113, -25);
            bezierVertex(-96, -30, -95, -43, -95, -43);
            bezierVertex(-90, -32, -83, -23, -83, -23);
            bezierVertex(-82, -38, -70, -41, -70, -41);
            bezierVertex(-71, -29, -58, -24, -58, -24);
            bezierVertex(-60, -37, -49, -50, -49, -50);
            bezierVertex(-49, -32, -43, -32, -43, -32);
            bezierVertex(-33, -35, -35, -55, -35, -55);
            bezierVertex(-26, -49, -25, -41, -25, -41);
            bezierVertex(-22, -47, -14, -47, -14, -47);
            bezierVertex(-13, -39, -18, -36, -18, -36);
            bezierVertex(-5, -39, 1, -56, 1, -56);
            bezierVertex(10, -54, 10, -39, 10, -39);
            bezierVertex(17, -44, 15, -52, 15, -52);
            bezierVertex(24, -48, 23, -43, 23, -43);
            bezierVertex(20, -58, 30, -63, 30, -63);
            bezierVertex(27, -54, 39, -39, 39, -39);
            bezierVertex(45, -41, 50, -43, 50, -43);
            bezierVertex(42, -50, 45, -65, 45, -65);
            bezierVertex(63, -65, 65, -55, 65, -55);
            bezierVertex(66, -67, 77, -73, 77, -73);
            bezierVertex(84, -61, 78, -53, 78, -53);
            bezierVertex(92, -59, 94, -78, 94, -78);
            bezierVertex(107, -64, 99, -48, 99, -48);
            bezierVertex(103, -59, 112, -57, 112, -57);
            bezierVertex(114, -47, 108, -45, 108, -45);
            bezierVertex(119, -43, 122, -49, 122, -49);
            bezierVertex(112, -58, 117, -70, 117, -70);
            bezierVertex(123, -59, 130, -56, 130, -56);
            bezierVertex(132, -67, 127, -73, 127, -73);
            bezierVertex(104, -76, 107, -93, 107, -93);
            bezierVertex(119, -96, 123, -87, 123, -87);
            bezierVertex(128, -95, 105, -104, 121, -124);
            bezierVertex(138, -116, 135, -95, 135, -95);
            bezierVertex(148, -105, 158, -103, 158, -103);
            bezierVertex(148, -78, 135, -80, 135, -80);
            bezierVertex(140, -62, 138, -59, 138, -59);
            bezierVertex(144, -72, 157, -69, 157, -69);
            bezierVertex(170, -107, 180, -85, 180, -85);
            bezierVertex(179, -73, 167, -78, 172, -83);
            bezierVertex(163, -63, 171, -61, 171, -61);
            bezierVertex(178, -76, 191, -76, 191, -76);
            bezierVertex(182, -62, 186, -56, 186, -56);
            bezierVertex(198, -56, 199, -71, 199, -71);
            bezierVertex(209, -68, 206, -57, 206, -57);
            bezierVertex(222, -70, 208, -80, 208, -80);
            bezierVertex(227, -81, 227, -67, 227, -67);
            bezierVertex(236, -82, 230, -96, 230, -96);
            bezierVertex(250, -78, 243, -61, 243, -61);
            bezierVertex(261, -68, 256, -80, 256, -80);
            bezierVertex(270, -72, 262, -61, 262, -61);
            bezierVertex(275, -84, 264, -95, 264, -95);
            bezierVertex(277, -97, 281, -80, 281, -80);
            bezierVertex(288, -105, 262, -95, 266, -121);
            bezierVertex(279, -119, 283, -109, 282, -109);
            bezierVertex(286, -130, 301, -134, 301, -134);
            bezierVertex(308, -110, 287, -104, 287, -104);
            bezierVertex(288, -84, 293, -84, 293, -84);
            bezierVertex(305, -93, 301, -95, 301, -95);
            vertex(301, 17);
        endShape();
    pop();
}

function drawBackgroundTrees() {
    push();
        fill(28, 33, 36);
        stroke(28, 33, 36);
        beginShape();
            vertex(463, 228);
            bezierVertex(503, 268, 499, 223, 499, 223);
            bezierVertex(461, 199, 463, 228, 463, 228);
        endShape();
        beginShape();
            vertex(171, 235);
            bezierVertex(227, 249, 241, 230, 241, 230);
            bezierVertex(314, 244, 307, 222, 307, 222);
            bezierVertex(390, 251, 386, 231, 386, 231);
            bezierVertex(458, 260, 471, 217, 471, 217);
            bezierVertex(594, 259, 604, 220, 604, 220);
            bezierVertex(750, 130, 458, 180, 458, 180);
            bezierVertex(425, 202, 376, 182, 376, 182);
            bezierVertex(250, 209, 274, 167, 274, 167);
            vertex(171, 235);
        endShape();
        fill(44, 82, 61, 240);
        stroke(44, 82, 61);
        beginShape();
            vertex(250, 183);
            bezierVertex(164, 251, -1, 117, -1, 117);
            bezierVertex(-18, 35, 96, 57, 96, 57);
            bezierVertex(276, 37, 274, 101, 274, 101);
            bezierVertex(415, 65, 421, 99, 421, 99);
            bezierVertex(512, 29, 551, 55, 551, 55);
            bezierVertex(603, 13, 614, 43, 614, 43);
            bezierVertex(680, 100, 630, 174, 630, 174);
            bezierVertex(382, 214, 250, 183, 250, 183);
        endShape();
        fill(59, 104, 84, 245);
        stroke(59, 104, 84);
        beginShape();
            vertex(233, 70);
            bezierVertex(311, 20, 314, 51, 314, 51);
            bezierVertex(371, 7, 372, 38, 372, 38);
            bezierVertex(473, 4, 460, 38, 460, 38);
            bezierVertex(575, -7, 564, 24, 564, 24);
            bezierVertex(627, -18, 611, 16, 611, 16);
            bezierVertex(636, 131, 509, 79, 509, 79);
            bezierVertex(443, 173, 385, 102, 385, 102);
            bezierVertex(160, 158, 233, 70, 233, 70);
        endShape();
        push();
            translate(-125, 20)
            scale(.9)
            fill(29, 75, 111);
            stroke(29, 75, 111);
            beginShape();
                vertex(137, 245);
                bezierVertex(159, 318, 150, 368, 150, 368);
                bezierVertex(165, 371, 174, 366, 174, 366);
                bezierVertex(173, 313, 158, 233, 158, 233);
                bezierVertex(143, 223, 137, 245, 137, 245);
            endShape();
            beginShape();
                vertex(170, 362);
                bezierVertex(193, 277, 182, 237, 182, 237);
                bezierVertex(208, 228, 204, 237, 204, 237);
                bezierVertex(204, 348, 197, 367, 197, 367);
                bezierVertex(181, 371, 170, 362, 170, 362);
            endShape();
            beginShape();
                vertex(236, 365);
                bezierVertex(244, 358, 253, 229, 253, 229);
                bezierVertex(271, 221, 273, 228, 273, 228);
                bezierVertex(264, 267, 268, 363, 268, 363);
                bezierVertex(272, 368, 236, 365, 236, 365);
            endShape();
            beginShape();
                vertex(523, 232);
                bezierVertex(555, 233, 570, 235, 570, 235);
                bezierVertex(589, 365, 579, 366, 579, 366);
                bezierVertex(560, 370, 543, 364, 543, 364);
            endShape();
        pop();
        push();
            translate(100, 70)
            scale(.7)
            fill(29, 75, 111);
            stroke(29, 75, 111);
            beginShape();
                vertex(137, 245);
                bezierVertex(159, 318, 150, 368, 150, 368);
                bezierVertex(165, 371, 174, 366, 174, 366);
                bezierVertex(173, 313, 158, 233, 158, 233);
                bezierVertex(143, 223, 137, 245, 137, 245);
            endShape();
            beginShape();
                vertex(170, 362);
                bezierVertex(193, 277, 182, 237, 182, 237);
                bezierVertex(208, 228, 204, 237, 204, 237);
                bezierVertex(204, 348, 197, 367, 197, 367);
                bezierVertex(181, 371, 170, 362, 170, 362);
            endShape();
            beginShape();
                vertex(236, 365);
                bezierVertex(244, 358, 253, 229, 253, 229);
                bezierVertex(271, 221, 273, 228, 273, 228);
                bezierVertex(264, 267, 268, 363, 268, 363);
                bezierVertex(272, 368, 236, 365, 236, 365);
            endShape();
            beginShape();
                vertex(425, 240);
                bezierVertex(435, 237, 444, 238, 444, 238);
                vertex(446, 269);
                vertex(461, 231);
                vertex(470, 218);
                vertex(447, 275);
                bezierVertex(453, 350, 444, 365, 444, 365);
                bezierVertex(434, 370, 415, 365, 415, 365);
                vertex(418, 259);
                vertex(395, 234)
                vertex(401, 234)
                vertex(419, 250)
                bezierVertex(420, 226, 425, 240, 425, 240);
            endShape();
            beginShape();
                vertex(523, 232);
                bezierVertex(555, 233, 570, 235, 570, 235);
                bezierVertex(589, 365, 579, 366, 579, 366);
                bezierVertex(560, 370, 543, 364, 543, 364);
            endShape();
        pop();
        //trunks for background trees
        fill(28, 33, 36);
        stroke(28, 33, 36);
        beginShape();
            vertex(137, 245);
            bezierVertex(159, 318, 150, 368, 150, 368);
            bezierVertex(165, 371, 174, 366, 174, 366);
            bezierVertex(173, 313, 158, 233, 158, 233);
            bezierVertex(143, 223, 137, 245, 137, 245);
        endShape();
        beginShape();
            vertex(170, 362);
            bezierVertex(193, 277, 182, 237, 182, 237);
            bezierVertex(208, 228, 204, 237, 204, 237);
            bezierVertex(204, 348, 197, 367, 197, 367);
            bezierVertex(181, 371, 170, 362, 170, 362);
        endShape();
        beginShape();
            vertex(236, 365);
            bezierVertex(244, 358, 253, 229, 253, 229);
            bezierVertex(271, 221, 273, 228, 273, 228);
            bezierVertex(264, 267, 268, 363, 268, 363);
            bezierVertex(272, 368, 236, 365, 236, 365);
        endShape();
        beginShape();
            vertex(323, 365);
            bezierVertex(314, 268, 331, 228, 331, 228);
            bezierVertex(343, 225, 347, 229, 347, 229);
            vertex(347, 249);
            vertex(370, 237);
            vertex(377, 237);
            vertex(347, 257);
            bezierVertex(343, 323, 361, 366, 361, 366);
        endShape();
        beginShape();
            vertex(425, 240);
            bezierVertex(435, 237, 444, 238, 444, 238);
            vertex(446, 269);
            vertex(461, 231);
            vertex(470, 218);
            vertex(447, 275);
            bezierVertex(453, 350, 444, 365, 444, 365);
            bezierVertex(434, 370, 415, 365, 415, 365);
            vertex(418, 259);
            vertex(395, 234)
            vertex(401, 234)
            vertex(419, 250)
            bezierVertex(420, 226, 425, 240, 425, 240);
        endShape();
        beginShape();
            vertex(523, 232);
            bezierVertex(555, 233, 570, 235, 570, 235);
            bezierVertex(589, 365, 579, 366, 579, 366);
            bezierVertex(560, 370, 543, 364, 543, 364);
        endShape();
    pop();
}

function drawTree() {
    push();
        //background leaves
        fill(26, 44, 44, 250);
        stroke(38, 49, 53);
        beginShape();
            vertex(-3, 231);
            bezierVertex(25, 236, 21, 218, 21, 218);
            bezierVertex(40, 237, 53, 233, 53, 233);
            bezierVertex(158, 268, 145, 233, 145, 233);
            bezierVertex(271, 241, 236, 210, 236, 210);
            bezierVertex(111, 87, -14, 159, -14, 159);
        endShape(CLOSE);
        //tree
        fill(53, 47, 33);
        stroke(33, 29, 17);
        beginShape();
            vertex(37, 380);
            bezierVertex(76, 276, 37, 218, 37, 218);
            bezierVertex(24, 195, 11, 194, 11, 194);
            bezierVertex(18, 190, 13, 181, 18, 179);
            bezierVertex(39, 179, 55, 212, 55, 212);
            bezierVertex(56, 178, 35, 164, 35, 164);
            bezierVertex(47, 160, 51, 154, 51, 154);
            bezierVertex(73, 193, 82, 176, 82, 176);
            bezierVertex(88, 168, 93, 146, 93, 146);
            bezierVertex(101, 147, 109, 150, 109, 150);
            bezierVertex(106, 176, 106, 176, 106, 176);
            bezierVertex(121, 179, 118, 163, 134, 164);
            bezierVertex(137, 173, 137, 173, 137, 173);
            bezierVertex(113, 188, 109, 205, 109, 205);
            bezierVertex(136, 186, 156, 188, 156, 188);
            bezierVertex(161, 195, 161, 195, 161, 195);
            bezierVertex(106, 209, 112, 216, 112, 216);
            bezierVertex(139, 207, 139, 207, 139, 207);
            bezierVertex(138, 211, 115, 224, 115, 224);
            bezierVertex(105, 351, 122, 372, 122, 372);
        endShape(CLOSE);
        beginShape();
            fill(33, 29, 17);
            stroke(33, 29, 17);
            vertex(51, 372);
            bezierVertex(105, 187, 10, 180, 19, 180);
            bezierVertex(41, 186, 56, 215, 56, 215);
            bezierVertex(56, 178, 35, 164, 35, 164);
            bezierVertex(47, 160, 51, 154, 51, 154);
            bezierVertex(73, 193, 82, 176, 82, 176);
            bezierVertex(88, 168, 93, 146, 93, 146);
            bezierVertex(101, 147, 109, 150, 109, 150);
            bezierVertex(106, 176, 106, 176, 106, 176);
            bezierVertex(121, 179, 118, 163, 134, 164);
            bezierVertex(137, 173, 137, 173, 137, 173);
            bezierVertex(113, 188, 109, 205, 109, 205);
            bezierVertex(136, 186, 156, 188, 156, 188);
            bezierVertex(159, 192, 159, 192, 159, 192);
            bezierVertex(128, 196, 109, 210, 109, 210);
            bezierVertex(82, 191, 78, 222, 78, 222);
            bezierVertex(69, 296, 109, 328, 109, 328);
            bezierVertex(108, 353, 115, 370, 115, 370);
        endShape(CLOSE);
        beginShape();
            fill(33, 29, 17);
            stroke(33, 29, 17);
            vertex(51, 372);
            bezierVertex(105, 187, 10, 180, 19, 180);
            bezierVertex(15, 184, 14, 189, 14, 189);
            bezierVertex(85, 218, 51, 372, 51, 372);
        endShape();
        beginShape();
            stroke(108, 88, 15);
            fill(207, 205, 120, 200);
            vertex(109, 210);
            bezierVertex(82, 191, 78, 222, 78, 222);
            bezierVertex(69, 296, 109, 328, 109, 328);
        endShape(CLOSE);

        //leaves
        fill(25, 67, 43, 245);
        stroke(49, 56, 49);
        beginShape();
            vertex(-11, 197);
            bezierVertex(21, 202, 17, 179, 17, 179);
            bezierVertex(94, 210, 42, 157, 34, 163);
            bezierVertex(47, 160, 51, 154, 51, 154);
            bezierVertex(73, 193, 82, 176, 82, 176);
            bezierVertex(88, 168, 93, 146, 93, 146);
            bezierVertex(133, 163, 133, 163, 133, 163);
            bezierVertex(137, 172, 137, 172, 137, 172);
            bezierVertex(111, 196, 169, 186, 169, 186);
            bezierVertex(145, 222, 181, 219, 181, 219);
            bezierVertex(195, 220, 226, 222, 226, 222);
            bezierVertex(280, 225, 258, 147, 258, 147);
            bezierVertex(246, 102, 237, 150, 226, 129);
            bezierVertex(221, 85, 205, 124, 193, 116);
            bezierVertex(73, 137, 96, 58, 96, 58);
            bezierVertex(14, 81, -1, 17, -1, 17);
        endShape(CLOSE);
        fill(36, 160, 86, 235);
        stroke(39, 184, 79);
        beginShape();
            vertex(261, 167);
            bezierVertex(248, 40, 221, -10, 221, -10);
            bezierVertex(-9, -26, -11, -13, -11, -13);
            bezierVertex(-9, 50, -8, 59, -8, 59);
            bezierVertex(37, 104, 120, 118, 120, 118);
        endShape();
    pop();
}

function drawPikachu() {
    push();
        fill(157, 118, 17);
        translate(350, 321);
        // head
        push();
            rotate(PI/7);
            ellipse(0, 0, 30, 25);
        pop();
        //red cheek
        push()
            fill(152, 52, 37);
            stroke(127, 49, 36);
            rotate(-PI/8);
            ellipse(2, 3, 10, 7);
        pop();
        //eye
        push();
            fill(75, 49, 36);
            stroke(75, 49, 36);
            rotate(-PI/6);
            ellipse(1, -8, 7, 5);
            fill(139, 122, 102);
            stroke(139, 122, 102);
            ellipse(1, -9, 4, 3);
        pop();
        beginShape();
            stroke(75, 49, 36);
            vertex(-14, -5);
            bezierVertex(-13, 0, -8, 0, -8, 0);
        endShape();
        // darker ear
        beginShape();
            fill(128, 91, 17, 240);
            stroke(107, 77, 7, 125);
            vertex(5, -11);
            bezierVertex(11, -21, 24, -22, 24, -22);
            bezierVertex(25, -15, 22, -14, 22, -14);
            bezierVertex(15, -11, 7, -7, 7, -7);
        endShape(CLOSE);
        beginShape();
            fill(72, 48, 10);
            stroke(72, 48, 10);
            vertex(24, -21);
            bezierVertex(25, -15, 22, -14, 22, -14);
            bezierVertex(26, -16, 30, -20, 30, -20);
            bezierVertex(27, -23, 24, -21, 24, -21);
        endShape();
        beginShape();
            fill(157, 118, 17);
            stroke(157, 118, 17);
            vertex(7, -7)
            bezierVertex(20, -12, 26, -10, 26, -10);
            bezierVertex(28, -6, 22, -5, 22, -5);
            bezierVertex(15, -3, 10, -3, 10, -3);
        endShape(CLOSE);
        beginShape();
            fill(72, 48, 10);
            stroke(72, 48, 10);
            vertex(26, -11);
            bezierVertex(28, -6, 22, -5, 22, -5);
            bezierVertex(39, -9, 33, -10, 33, -10);
            bezierVertex(28, -12, 26, -11, 26, -11);
        endShape();
        //body
        beginShape();
            fill(157, 118, 17);
            stroke(157, 118, 17, 100);
            vertex(13, -4);
            bezierVertex(38, 57, 5, 47, 5, 47);
            bezierVertex(-5, 52, -8, 45, -8, 45);
            bezierVertex(-7, 47, -11, 47, -11, 47);
            bezierVertex(-18, 40, -14, 34, -14, 34);
            bezierVertex(-10, 34, -10, 38, -10, 38);
            bezierVertex(-6, 40, -6, 40, -6, 40);
            bezierVertex(-1, 37, 3, 40, 3, 40);
            vertex(-2, 38);
            bezierVertex(-8, 35, -3, 12, -3, 12);
            bezierVertex(8, 12, 13, -4, 13, -4);
        endShape();
        beginShape();
            fill(157, 118, 17);
            stroke(90, 60, 5, 200);
            vertex(4, 20);
            bezierVertex(-4, 22, -7, 29, -7, 29);
            bezierVertex(-17, 37, -5, 39, -4, 31);
            bezierVertex(6, 28, 6, 23, 6, 23);
        endShape();
        //tail
        beginShape();
            fill(68.6, 47.4, 42.9);
            stroke(107, 77, 7);
            vertex(23, 28);
            vertex(31, 23);
            vertex(34, 26);
            vertex(43, 20);
            vertex(46, 22);
            vertex(55, 15);
            vertex(69, 15);
            vertex(64, 25);
            vertex(51, 27);
            vertex(43, 30);
            vertex(38, 29);
            vertex(27, 33);
            vertex(22, 32);
        endShape(CLOSE);
        beginShape();
            fill(157, 118, 17);
            vertex(34, 26);
            vertex(43, 20);
            vertex(46, 22);
            vertex(55, 15);
            vertex(69, 15);
            vertex(64, 25);
            vertex(51, 27);
            vertex(43, 30);
        endShape(CLOSE);
        beginShape();
            fill(40, 20, 15);
            vertex(55, 15);
            vertex(69, 15);
            vertex(64, 25);
            vertex(58, 24);
            vertex(60, 20);
            vertex(56, 21);
            vertex(57, 18);
            vertex(54, 18);
        endShape();
        //stripes
        beginShape();
          vertex(20, 20);
          bezierVertex(2, 27, 22, 24, 22, 24);
          vertex(21, 25);
          bezierVertex(4, 29, 22, 29, 22, 29);
        endShape();
    pop();
}

function drawCaterpie(cX,cY,cScale) {
  push();
    translate(cX,cY);
    scale(cScale);

    fill(246,215,128); //yellow
    beginShape(); //body6
      curveVertex(98,205);
      curveVertex(98,205);
      curveVertex(141,195);
      curveVertex(163,150);
      curveVertex(96,165);
      curveVertex(98,205);
      curveVertex(98,205);
    endShape();

    fill(129,187,101); //green
    beginShape(); //body5
    curveVertex(173,127);
    curveVertex(173,127);
    curveVertex(156,147);
    curveVertex(129,153);
    curveVertex(126,172);
    curveVertex(160,163);
    curveVertex(173,127);
    curveVertex(173,127);
    endShape();

    fill(129,187,101); //green
    beginShape(); //body4
    curveVertex(70,155);
    curveVertex(70,155);
    curveVertex(126,154);
    curveVertex(126,172);
    curveVertex(66,186);
    curveVertex(10,118);
    curveVertex(69,177);
    endShape();

    fill(129,187,101); //green
    beginShape(); //body3
    curveVertex(52,114);
    curveVertex(52,114);
    curveVertex(65,147);
    curveVertex(74,158);
    curveVertex(70,177);
    curveVertex(18,174);
    curveVertex(2,110);
    curveVertex(2,110);
    endShape();

    fill(129,187,101); //green
    ellipse(28,88,80) //body2

    fill(129,187,101); //green
    ellipse(35,46,90,100) //body1

    fill(246,215,128); //yellow
    ellipse(-43,123,20); //bottom left hand

    fill(246,215,128); //yellow
    beginShape(); //body5
      curveVertex(62,207);
      curveVertex(62,207);
      curveVertex(101,206);
      curveVertex(128,172);
      curveVertex(99,177);
      curveVertex(69,177);
      curveVertex(69,177);
    endShape();

    fill(246,215,128); //yellow
    beginShape(); //body4
      curveVertex(-10,178);
      curveVertex(-10,178);
      curveVertex(15,197);
      curveVertex(38,206);
      curveVertex(64,207);
      curveVertex(73,177);
      curveVertex(50,173);
      curveVertex(34,165);
      curveVertex(34,165);
    endShape();

    fill(246,215,128); //yellow
    beginShape(); //body3
      curveVertex(-36,128);
      curveVertex(-36,128);
      curveVertex(-27,155);
      curveVertex(-13,178);
      curveVertex(3,182);
      curveVertex(35,167);
      curveVertex(19,127);
      curveVertex(19,127);
    endShape();

    fill(246,215,128); //yellow
    beginShape(); //body2
      curveVertex(-18,97);
      curveVertex(-18,97);
      curveVertex(-45,91);
      curveVertex(-44,125);
      curveVertex(-15,130);
      curveVertex(14,125);
      curveVertex(9,97);
      curveVertex(-13,97);
      curveVertex(-13,97);
    endShape();

    fill(246,215,128); //yellow
    beginShape(); //body1
      curveVertex(-23,60);
      curveVertex(-23,60);
      curveVertex(-53,65);
      curveVertex(-50,96);
      curveVertex(8,96);
      curveVertex(7,59);
      curveVertex(-23,60);
    endShape();

    fill(246,215,128); //yellow
    ellipse(-52,90,20); // top left hand
    ellipse(10,90,20); // top right hand
    ellipse(14,123,20); // bottom right hand

    fill(129,187,101); //green
    ellipse(0,0,140,110); //head
    ellipse(-30,35,70,60); //nose1
    ellipse(-39,48,45,35); //nose 2
    fill(246,215,128); //yellow
    ellipse(28,-5,40,40); //eyes
    fill(0);
    ellipse(28,-5,30,30); //eyes
    fill(255);
    ellipse(29,-12,15,15); //eyes
    fill(203,76,80); //red
    beginShape(); //horn
      curveVertex(-36,-5);
      curveVertex(-36,-5);
      curveVertex(-38,-15)
      curveVertex(-48,-23);
      curveVertex(-98,-49);
      curveVertex(-102,-64);
      curveVertex(-89,-60);
      curveVertex(-33,-33);
      curveVertex(31,-68);
      curveVertex(42,-68);
      curveVertex(35,-57);
      curveVertex(-23,-22);
      curveVertex(-30,-7);
      curveVertex(-30,-7);
    endShape();

      push();
        translate(172,121);
        rotate(ctailRot);
        fill(246,215,128); //yellow
        ellipse(0,-25,20,50); //tail
      pop();

    fill(246,215,128); //yellow
    ellipse(172,126,20); //circle tail
  pop();
}

function drawFlashingCaterpie(cX,cY,cScale, caterpieOpacity) {
  push();
    translate(cX,cY);
    scale(cScale);
    fill(255, 255, 255, caterpieOpacity);
    stroke(255, 255, 255, caterpieOpacity);

    noStroke();
    beginShape(); //body6
      curveVertex(98,205);
      curveVertex(98,205);
      curveVertex(141,195);
      curveVertex(163,150);
      curveVertex(96,165);
      curveVertex(98,205);
      curveVertex(98,205);
    endShape();

    beginShape(); //body5
    curveVertex(173,127);
    curveVertex(173,127);
    curveVertex(156,147);
    curveVertex(129,153);
    curveVertex(126,172);
    curveVertex(160,163);
    curveVertex(173,127);
    curveVertex(173,127);
    endShape();

    beginShape(); //body4
    curveVertex(70,155);
    curveVertex(70,155);
    curveVertex(126,154);
    curveVertex(126,172);
    curveVertex(66,186);
    curveVertex(10,118);
    curveVertex(69,177);
    endShape();

    beginShape(); //body3
    curveVertex(52,114);
    curveVertex(52,114);
    curveVertex(65,147);
    curveVertex(74,158);
    curveVertex(70,177);
    curveVertex(18,174);
    curveVertex(2,110);
    curveVertex(2,110);
    endShape();

    ellipse(28,88,80) //body2

    ellipse(35,46,90,100) //body1

    ellipse(-43,123,20); //bottom left hand

    beginShape(); //body5
      curveVertex(62,207);
      curveVertex(62,207);
      curveVertex(101,206);
      curveVertex(128,172);
      curveVertex(99,177);
      curveVertex(69,177);
      curveVertex(69,177);
    endShape();

    beginShape(); //body4
      curveVertex(-10,178);
      curveVertex(-10,178);
      curveVertex(15,197);
      curveVertex(38,206);
      curveVertex(64,207);
      curveVertex(73,177);
      curveVertex(50,173);
      curveVertex(34,165);
      curveVertex(34,165);
    endShape();

    beginShape(); //body3
      curveVertex(-36,128);
      curveVertex(-36,128);
      curveVertex(-27,155);
      curveVertex(-13,178);
      curveVertex(3,182);
      curveVertex(35,167);
      curveVertex(19,127);
      curveVertex(19,127);
    endShape();

    beginShape(); //body2
      curveVertex(-18,97);
      curveVertex(-18,97);
      curveVertex(-45,91);
      curveVertex(-44,125);
      curveVertex(-15,130);
      curveVertex(14,125);
      curveVertex(9,97);
      curveVertex(-13,97);
      curveVertex(-13,97);
    endShape();

    beginShape(); //body1
      curveVertex(-23,60);
      curveVertex(-23,60);
      curveVertex(-53,65);
      curveVertex(-50,96);
      curveVertex(8,96);
      curveVertex(7,59);
      curveVertex(-23,60);
    endShape();

    ellipse(-52,90,20); // top left hand
    ellipse(10,90,20); // top right hand
    ellipse(14,123,20); // bottom right hand

    ellipse(0,0,140,110); //head
    ellipse(-30,35,70,60); //nose1
    ellipse(-39,48,45,35); //nose 2
    ellipse(28,-5,40,40); //eyes
    ellipse(28,-5,30,30); //eyes
    ellipse(29,-12,15,15); //eyes
    beginShape(); //horn
      curveVertex(-36,-5);
      curveVertex(-36,-5);
      curveVertex(-38,-15)
      curveVertex(-48,-23);
      curveVertex(-98,-49);
      curveVertex(-102,-64);
      curveVertex(-89,-60);
      curveVertex(-33,-33);
      curveVertex(31,-68);
      curveVertex(42,-68);
      curveVertex(35,-57);
      curveVertex(-23,-22);
      curveVertex(-30,-7);
      curveVertex(-30,-7);
    endShape();

      push();
        translate(172,121);
        rotate(ctailRot);
        ellipse(0,-25,20,50); //tail
      pop();

    ellipse(172,126,20); //circle tail
  pop();
}

function moveCaterpie() {
  if (ctailRot < 0)
  {
    ctailMove = false
  }

  if (ctailRot > PI/4)
  {
    ctailMove = true
  }

  if (ctailMove == true)
  {
    ctailRot -= PI/100;
  }
  else
  {
    ctailRot += PI/100;
  }
}

function drawButterfree (bX, bY, bSC, bROT, wingSCALE) {
  push();
    translate(bX, bY);
    scale(bSC);
    rotate(bROT);

    //LEFT WING
      push();
        translate(0, 0);
        scale(wingSCALE);
          push();
            fill(80);
            noStroke();
              push();
                rotate(-PI/6);
                ellipse(-15, -60, 70, 100);
              pop();
              push();
                rotate(-PI/2);
                ellipse(0, -30, 50, 80);
              pop();
              push();
                rotate(PI/4);
                ellipse(0, 35, 40, 70);
              pop();
          pop();
        //details
        push();
            fill(255);
            strokeWeight(0.3);
            push();
              rotate(-PI/4);
              ellipse(20, -60, 20, 80);
              ellipse(3, -60, 20, 80);
            pop();
            push();
              rotate(-PI/3.5);
              ellipse(-5, -40, 15, 100);
            pop();
            push();
              rotate(-PI/3.3);
              ellipse(-15, -30, 13, 80);
            pop();
            push();
              rotate(-PI/2.5);
              ellipse(-15, -30, 15, 60);
            pop();
            push();
              rotate(-PI/2.2);
              ellipse(-20, -30, 13, 50);
            pop();
            push();
              rotate(-PI/1.9);
              ellipse(-25, -30, 13, 40);
            pop();
            push();
              rotate(-PI/1.7);
              ellipse(-30, -30, 13, 50);
            pop();
        pop();
    pop();
    //RIGHT WING
  push();
      translate(0, 0);
      scale(wingSCALE);
      push();
          fill(80);
          noStroke();
          push();
            rotate(PI/6);
            ellipse(15, -60, 70, 100);
          pop();
          push();
            rotate(PI/2);
            ellipse(0, -30, 50, 80);
          pop();
          push();
            rotate(-PI/4);
            ellipse(0, 35, 40, 70);
          pop();
      pop();
      //details
      push();
          fill(255);
          strokeWeight(0.3);
          push();
            rotate(PI/4);
            ellipse(-20, -60, 20, 80);
            ellipse(-3, -60, 20, 80);
          pop();
          push();
            rotate(PI/3.5);
            ellipse(5, -40, 15, 100);
          pop();
          push();
            rotate(PI/3.3);
            ellipse(15, -30, 13, 80);
          pop();
          push();
            rotate(PI/2.5);
            ellipse(15, -30, 15, 60);
          pop();
          push();
            rotate(PI/2.2);
            ellipse(20, -30, 13, 50);
          pop();
          push();
            rotate(PI/1.9);
            ellipse(25, -30, 13, 40);
          pop();
          push();
            rotate(PI/1.7);
            ellipse(30, -30, 13, 50);
          pop();
      pop();
  pop();

    //LEGS
      push();
        translate(0, 40);
        fill(118, 183, 189);
        strokeWeight(0.5);
          ellipse(-10, 0, 18, 45);
          ellipse(10, 0, 18, 45);
        push();
          fill(255, 255, 255, 70);
          noStroke();
            ellipse(-10, 8, 15, 30);
            ellipse(10, 8, 15, 30);
        pop();
      pop();

    //BODY (center - 200, 200);
    push();
      fill(148, 138, 194);
      strokeWeight(0.5);
          ellipse(0, 0, 50, 60);
    pop();

    //HANDS
    push();
      fill(118, 183, 189);
      noStroke();
          arc(-12, 0, 12, 12, PI/2, 3*PI/2);
          triangle(-12, -6, -9, -4, -12, -2);
          triangle(-12, -2, -9, 0, -12, 2);
          triangle(-12, 2, -9, 4, -12, 6);
          arc(12, 0, 12, 12, 3*PI/2, PI/2);
          triangle(12, -6, 9, -4, 12, -2);
          triangle(12, -2, 9, 0, 12, 2);
          triangle(12, 2, 9, 4, 12, 6);
    pop();

    //HEAD
      push();
      fill(148, 138, 194);
      strokeWeight(0.5);
        translate(0, -40);
        ellipse(0, 0, 55, 55);
      pop();

    //FACE
      push();
        translate(0, -45);
        strokeWeight(0.5);
        //eyes
        push();
          fill(190, 77, 95);
          rotate(PI/18);
          ellipse(-12, 0, 20, 30);
          push();
            noStroke();
            rotate(-PI/18);
            fill(200, 0, 0, 100);
              ellipse(-10, -5, 18, 23);
            fill(255, 255, 255, 100);
              ellipse(-10, -8, 15, 15);
          pop();
        pop();
        push();
          fill(190, 77, 95);
          rotate(-PI/18);
          ellipse(12, 0, 20, 30);
          push();
            noStroke();
            rotate(PI/18);
            fill(200, 0, 0, 100);
              ellipse(10, -5, 18, 23);
            fill(255, 255, 255, 100);
              ellipse(10, -8, 15, 15);
          pop();
        pop();

        //teeth
        triangle(-6, 22, -2, 22, -4, 26);
        triangle(2, 22, 6, 22, 4, 26);

        //mouth
        push();
          fill(118, 183, 189);
          ellipse(0, 18, 15, 10);
        pop();

        //antenna
        push();
          strokeWeight(1);
            bezier(-9, -21, -5, -40, -5, -50, -9, -55);
            bezier(9, -21, 13, -40, 13, -50, 9, -55);
          push();
          fill(100);
            ellipse(-9, -55, 5, 8);
            ellipse(9, -55, 5, 8);
          pop();
        pop();
      pop();

  pop(); //end of function
}

function drawFlashingButterfree (bX, bY, bSC, bROT, wingSCALE, bOpacity) {
  push();
    translate(bX, bY);
    scale(bSC);
    rotate(bROT);
    fill(255, 255, 255, bOpacity);
    noStroke();

    //LEFT WING
      push();
        translate(0, 0);
        scale(wingSCALE);
          push();
            noStroke();
              push();
                rotate(-PI/6);
                ellipse(-15, -60, 70, 100);
              pop();
              push();
                rotate(-PI/2);
                ellipse(0, -30, 50, 80);
              pop();
              push();
                rotate(PI/4);
                ellipse(0, 35, 40, 70);
              pop();
          pop();
        //details
        push();
            strokeWeight(0.3);
            push();
              rotate(-PI/4);
              ellipse(20, -60, 20, 80);
              ellipse(3, -60, 20, 80);
            pop();
            push();
              rotate(-PI/3.5);
              ellipse(-5, -40, 15, 100);
            pop();
            push();
              rotate(-PI/3.3);
              ellipse(-15, -30, 13, 80);
            pop();
            push();
              rotate(-PI/2.5);
              ellipse(-15, -30, 15, 60);
            pop();
            push();
              rotate(-PI/2.2);
              ellipse(-20, -30, 13, 50);
            pop();
            push();
              rotate(-PI/1.9);
              ellipse(-25, -30, 13, 40);
            pop();
            push();
              rotate(-PI/1.7);
              ellipse(-30, -30, 13, 50);
            pop();
        pop();
    pop();
    //RIGHT WING
  push();
      translate(0, 0);
      scale(wingSCALE);
      push();
          noStroke();
          push();
            rotate(PI/6);
            ellipse(15, -60, 70, 100);
          pop();
          push();
            rotate(PI/2);
            ellipse(0, -30, 50, 80);
          pop();
          push();
            rotate(-PI/4);
            ellipse(0, 35, 40, 70);
          pop();
      pop();
      //details
      push();
          strokeWeight(0.3);
          push();
            rotate(PI/4);
            ellipse(-20, -60, 20, 80);
            ellipse(-3, -60, 20, 80);
          pop();
          push();
            rotate(PI/3.5);
            ellipse(5, -40, 15, 100);
          pop();
          push();
            rotate(PI/3.3);
            ellipse(15, -30, 13, 80);
          pop();
          push();
            rotate(PI/2.5);
            ellipse(15, -30, 15, 60);
          pop();
          push();
            rotate(PI/2.2);
            ellipse(20, -30, 13, 50);
          pop();
          push();
            rotate(PI/1.9);
            ellipse(25, -30, 13, 40);
          pop();
          push();
            rotate(PI/1.7);
            ellipse(30, -30, 13, 50);
          pop();
      pop();
  pop();

    //LEGS
      push();
        translate(0, 40);
        strokeWeight(0.5);
          ellipse(-10, 0, 18, 45);
          ellipse(10, 0, 18, 45);
        push();
          noStroke();
            ellipse(-10, 8, 15, 30);
            ellipse(10, 8, 15, 30);
        pop();
      pop();

    //BODY (center - 200, 200);
    push();
      strokeWeight(0.5);
          ellipse(0, 0, 50, 60);
    pop();

    //HANDS
    push();
      noStroke();
          arc(-12, 0, 12, 12, PI/2, 3*PI/2);
          triangle(-12, -6, -9, -4, -12, -2);
          triangle(-12, -2, -9, 0, -12, 2);
          triangle(-12, 2, -9, 4, -12, 6);
          arc(12, 0, 12, 12, 3*PI/2, PI/2);
          triangle(12, -6, 9, -4, 12, -2);
          triangle(12, -2, 9, 0, 12, 2);
          triangle(12, 2, 9, 4, 12, 6);
    pop();

    //HEAD
      push();
      strokeWeight(0.5);
        translate(0, -40);
        ellipse(0, 0, 55, 55);
      pop();

    //FACE
      push();
        translate(0, -45);
        strokeWeight(0.5);
        //eyes
        push();
          rotate(PI/18);
          ellipse(-12, 0, 20, 30);
          push();
            noStroke();
            rotate(-PI/18);
              ellipse(-10, -5, 18, 23);
              ellipse(-10, -8, 15, 15);
          pop();
        pop();
        push();
          rotate(-PI/18);
          ellipse(12, 0, 20, 30);
          push();
            noStroke();
            rotate(PI/18);
              ellipse(10, -5, 18, 23);
              ellipse(10, -8, 15, 15);
          pop();
        pop();

        //teeth
        triangle(-6, 22, -2, 22, -4, 26);
        triangle(2, 22, 6, 22, 4, 26);

        //mouth
        push();
          ellipse(0, 18, 15, 10);
        pop();

        //antenna
        push();
          strokeWeight(1);
            bezier(-9, -21, -5, -40, -5, -50, -9, -55);
            bezier(9, -21, 13, -40, 13, -50, 9, -55);
          push();
            ellipse(-9, -55, 5, 8);
            ellipse(9, -55, 5, 8);
          pop();
        pop();
      pop();

  pop(); //end of function
}

function drawSquirtle(cX, cY, squirtleScale) {
	push();							//whole squirtle
		translate(cX, cY);
    scale(squirtleScale)

		stroke(81, 21, 1);
		fill(152, 203, 217);
		beginShape();				//left arm
			curveVertex(-53, -77);
			curveVertex(-53, -77);
			curveVertex(-105, -68);
			curveVertex(-102, -57);
			curveVertex(-112, -52);
			curveVertex(-65, -28);
		endShape(CLOSE);
		beginShape();				//left finger
			curveVertex(-91, -51);
			curveVertex(-91, -51);
			curveVertex(-97, -57);
			curveVertex(-86, -62);
			curveVertex(-86, -62);
		endShape();

    push();						//entire left leg
			translate(-65, 68);
			rotate(sqLegL);

			noStroke();
			quad(-25, 32, 2, 43, 26, 16, 5, -2);	//foot fill
			triangle(-17, 22, -31, 35, 21, 30);	//left toe
			triangle(-19, 32, -20, 43, -8, 38);	//middle toe
			triangle(-8, 38, -8, 49, 11, 38);	//right toe
			stroke(81, 21, 1);
			arc(0, 0, 60, 60, 2*PI/3, PI/6, OPEN);	//left leg
			beginShape();
				curveVertex(26, 16);
				curveVertex(26, 16);
				curveVertex(25, 25);
				curveVertex(21, 35);
				curveVertex(-8, 49);
				curveVertex(-8, 49);
			endShape();
			line(-19, 23, -31, 35);
			line(-31, 35, -20, 32);
			line(-20, 34, -20, 42);
			line(-20, 42, -9, 38);
			line(-9, 38, -9, 48);
		pop();

		beginShape();				//tail
			curveVertex(81, 45);
			curveVertex(81, 45);
			curveVertex(93, 45);
			curveVertex(125, 17);
			curveVertex(146, -17);
			curveVertex(163, -30);
			curveVertex(200, 2);
			curveVertex(168, 62);
			curveVertex(132, 87);
			curveVertex(89, 85);
			curveVertex(63, 69);
		endShape(CLOSE);
		arc(190, 0, 90, 90, 7*PI/6+PI/14, PI/2+PI/18, OPEN);
		beginShape();
			vertex(182, 43);
			bezierVertex(148, 22, 182, -8, 182, -8);
			bezierVertex(199, -15, 200, 2, 195, 15);
		endShape();

		fill(237, 233, 201);		//body
		ellipse(0, 0, 150, 200);

		stroke(81, 21, 1);			//body lines
		strokeWeight(2);
		line(-74, 0, -70, 9);		//left top line
		line(-70, 9, -73, 18);		//left bottom line
		line(-40, 83, -33, 78);		//bottom line
		line(10, 25, 38, -25);		//top right line
		line(10, 25, 25, 48);		//bottom right line
		beginShape();				//top curve
			curveVertex(-65, -48);
			curveVertex(-65, -48);
			curveVertex(-49, -40);
			curveVertex(-31, -36);
			curveVertex(-3, -37);
			curveVertex(13, -43);
			curveVertex(13, -43);
		endShape();
		beginShape();				//middle curve
			curveVertex(-70, 9);
			curveVertex(-70, 9);
			curveVertex(-31, 25);
			curveVertex(10, 25);
			curveVertex(10, 25);
		endShape();
		beginShape();				//bottom curve
			curveVertex(-33, 78);
			curveVertex(-33, 78);
			curveVertex(-9, 84);
			curveVertex(14, 86);
			curveVertex(14, 86);
		endShape();
		noFill();
		beginShape();       //middle vertical curve
			curveVertex(-35, -36);
			curveVertex(-35, -36);
			curveVertex(-43, 21);
			curveVertex(-33, 78);
			curveVertex(-33, 78);
		endShape();

		strokeWeight(1);			//shell
		fill(255);
		push();						//upper shell portion (white)
			translate(40, -81);
			rotate(-PI/6);
			ellipse(0, 0, 15, 25);
		pop();
		fill(191, 115, 90);			//lower shell portion (brown)
		arc(45, 5, 80, 160, 3*PI/2, PI/2.5, OPEN);
		beginShape();
			curveVertex(68, 22);
			curveVertex(68, 22);
			curveVertex(78, 20);
			curveVertex(84, 14);
			curveVertex(84, 14);
		endShape();
		fill(255);					//lower shell portion (white)
		beginShape();
			curveVertex(51, -40);
			curveVertex(51, -40);
			curveVertex(49, -20);
			curveVertex(48, 18);
			curveVertex(65, 64);
			curveVertex(72, 35);
			curveVertex(62, 6);
			curveVertex(61, -46);
		endShape(CLOSE);

		stroke(81, 21, 1);
		strokeWeight(1);
		fill(152, 203, 217);
		beginShape();				//head
			curveVertex(-30, -55);	//chin
			curveVertex(-30, -55);
			curveVertex(-65, -75);
			curveVertex(-75, -100);
			curveVertex(-70, -115);
			curveVertex(-60, -150);
			curveVertex(-15, -175);
			curveVertex(30, -165);
			curveVertex(45, -110);
			curveVertex(28, -75);
			curveVertex(7, -63);
		endShape(CLOSE);

		fill(193, 70, 77);			//mouth
		beginShape();
			curveVertex(-59, -90);
			curveVertex(-59, -90);
			curveVertex(-21, -85);
			curveVertex(12, -83);
			curveVertex(-19, -63);
			curveVertex(-39, -71);
		endShape(CLOSE);
    push();
    		fill(33, 19, 27);			//sunglasses
    		beginShape();
    			vertex(-30, -100);
    			bezierVertex(-92, -84, -83, -160, -83, -160);
    			bezierVertex(-25, -120, -25, -120, -25, -120);
    			bezierVertex(50, -160, 50, -160, 50, -160);
    			bezierVertex(39, -58, -30, -100, -30, -100);
    		endShape();
    pop();

    push();						//entire right leg
    			translate(45, 75);
    			rotate(sqLegR);

    			stroke(81, 21, 1);
    			fill(152, 203, 217);
    			ellipse(0, 0, 65);		//right leg
    			line(3, 40, -12, 30);
    			line(32, 3, 31, 27);
    			noStroke();
    			beginShape();
    				vertex(3, 40);
    				vertex(-12, 30);
    				vertex(32, 3);
    				vertex(31, 27);
    			endShape();
    			triangle(3, 40, 25, 28, 7, 51);	//left toe
    			triangle(25, 45, 7, 34, 30, 28);	//middle toe
    			triangle(31, 25, 38, 39, 24, 30);	//right toe
    			stroke(81, 21, 1);			//borders for toes
    			line(3, 40, 7, 51);
    			line(7, 51, 16, 39);
    			line(16, 39, 24, 44);
    			line(24, 44, 28, 32);
    			line(28, 32, 37, 38);
    			line(37, 38, 31, 25);
    		pop();

		stroke(81, 21, 1);
		fill(152, 203, 217);
		push();						//right arm
			translate(47, -50);
			rotate(PI/3.3);
			ellipse(0, 0, 48, 78);
		pop();
		noStroke();
		triangle(52, -79, 82, -85, 79, -68);
		triangle(78, -50, 90, -73, 77, -74);
		stroke(81, 21, 1);
		line(52, -79, 82, -85);
		line(82, -85, 80, -74);
		line(80, -74, 90, -73);
		line(90, -73, 77, -49);
		beginShape();				//right finger
			curveVertex(67, -75);
			curveVertex(67, -75);
			curveVertex(72, -80);
			curveVertex(74, -73);
			curveVertex(74, -73);
		endShape();
	pop();	// end of whole squirtle
}

function drawFlashingSquirtle(cX, cY, squirtleScale, squirtleOpacity) {
	push();							//whole squirtle
		translate(cX, cY);
    scale(squirtleScale)
    fill(255, 255, 255, squirtleOpacity);
    stroke(255, 255, 255, squirtleOpacity);

		beginShape();				//left arm
			curveVertex(-53, -77);
			curveVertex(-53, -77);
			curveVertex(-105, -68);
			curveVertex(-102, -57);
			curveVertex(-112, -52);
			curveVertex(-65, -28);
		endShape(CLOSE);
		beginShape();				//left finger
			curveVertex(-91, -51);
			curveVertex(-91, -51);
			curveVertex(-97, -57);
			curveVertex(-86, -62);
			curveVertex(-86, -62);
		endShape();

    push();						//entire left leg
      fill(255, 255, 255, squirtleOpacity);
      stroke(255, 255, 255, squirtleOpacity);
			translate(-65, 68);
			rotate(sqLegL);

			triangle(-17, 22, -31, 35, 21, 30);	//left toe
			triangle(-19, 32, -20, 43, -8, 38);	//middle toe
			triangle(-8, 38, -8, 49, 11, 38);	//right toe
			arc(0, 0, 60, 60, 2*PI/3, PI/6, OPEN);	//left leg
			beginShape();
				curveVertex(26, 16);
				curveVertex(26, 16);
				curveVertex(25, 25);
				curveVertex(21, 35);
				curveVertex(-8, 49);
				curveVertex(-8, 49);
			endShape();
			line(-19, 23, -31, 35);
			line(-31, 35, -20, 32);
			line(-20, 34, -20, 42);
			line(-20, 42, -9, 38);
			line(-9, 38, -9, 48);
		pop();

		beginShape();				//tail
			curveVertex(81, 45);
			curveVertex(81, 45);
			curveVertex(93, 45);
			curveVertex(125, 17);
			curveVertex(146, -17);
			curveVertex(163, -30);
			curveVertex(200, 2);
			curveVertex(168, 62);
			curveVertex(132, 87);
			curveVertex(89, 85);
			curveVertex(63, 69);
		endShape(CLOSE);
		arc(190, 0, 90, 90, 7*PI/6+PI/14, PI/2+PI/18, OPEN);
		beginShape();
			vertex(182, 43);
			bezierVertex(148, 22, 182, -8, 182, -8);
			bezierVertex(199, -15, 200, 2, 195, 15);
		endShape();

		ellipse(0, 0, 150, 200);

		strokeWeight(2);
		line(-74, 0, -70, 9);		//left top line
		line(-70, 9, -73, 18);		//left bottom line
		line(-40, 83, -33, 78);		//bottom line
		line(10, 25, 38, -25);		//top right line
		line(10, 25, 25, 48);		//bottom right line
		beginShape();				//top curve
			curveVertex(-65, -48);
			curveVertex(-65, -48);
			curveVertex(-49, -40);
			curveVertex(-31, -36);
			curveVertex(-3, -37);
			curveVertex(13, -43);
			curveVertex(13, -43);
		endShape();
		beginShape();				//middle curve
			curveVertex(-70, 9);
			curveVertex(-70, 9);
			curveVertex(-31, 25);
			curveVertex(10, 25);
			curveVertex(10, 25);
		endShape();
		beginShape();				//bottom curve
			curveVertex(-33, 78);
			curveVertex(-33, 78);
			curveVertex(-9, 84);
			curveVertex(14, 86);
			curveVertex(14, 86);
		endShape();
		noFill();
		beginShape();       //middle vertical curve
			curveVertex(-35, -36);
			curveVertex(-35, -36);
			curveVertex(-43, 21);
			curveVertex(-33, 78);
			curveVertex(-33, 78);
		endShape();

		strokeWeight(1);			//shell
		push();						//upper shell portion (white)
      fill(255, 255, 255, squirtleOpacity);
      stroke(255, 255, 255, squirtleOpacity);
			translate(40, -81);
			rotate(-PI/6);
			ellipse(0, 0, 15, 25);
		pop();
		arc(45, 5, 80, 160, 3*PI/2, PI/2.5, OPEN);
		beginShape();
			curveVertex(68, 22);
			curveVertex(68, 22);
			curveVertex(78, 20);
			curveVertex(84, 14);
			curveVertex(84, 14);
		endShape();
		beginShape();
			curveVertex(51, -40);
			curveVertex(51, -40);
			curveVertex(49, -20);
			curveVertex(48, 18);
			curveVertex(65, 64);
			curveVertex(72, 35);
			curveVertex(62, 6);
			curveVertex(61, -46);
		endShape(CLOSE);

		strokeWeight(1);
		beginShape();				//head
			curveVertex(-30, -55);	//chin
			curveVertex(-30, -55);
			curveVertex(-65, -75);
			curveVertex(-75, -100);
			curveVertex(-70, -115);
			curveVertex(-60, -150);
			curveVertex(-15, -175);
			curveVertex(30, -165);
			curveVertex(45, -110);
			curveVertex(28, -75);
			curveVertex(7, -63);
		endShape(CLOSE);

		beginShape();
			curveVertex(-59, -90);
			curveVertex(-59, -90);
			curveVertex(-21, -85);
			curveVertex(12, -83);
			curveVertex(-19, -63);
			curveVertex(-39, -71);
		endShape(CLOSE);
    push();
        fill(255, 255, 255, squirtleOpacity);
        stroke(255, 255, 255, squirtleOpacity);
    		beginShape();
    			vertex(-30, -100);
    			bezierVertex(-92, -84, -83, -160, -83, -160);
    			bezierVertex(-25, -120, -25, -120, -25, -120);
    			bezierVertex(50, -160, 50, -160, 50, -160);
    			bezierVertex(39, -58, -30, -100, -30, -100);
    		endShape();
    pop();

    push();						//entire right leg
        fill(255, 255, 255, squirtleOpacity);
        stroke(255, 255, 255, squirtleOpacity);
    			translate(45, 75);
    			rotate(sqLegR);

    			ellipse(0, 0, 65);		//right leg
    			line(3, 40, -12, 30);
    			line(32, 3, 31, 27);
    			beginShape();
    				vertex(3, 40);
    				vertex(-12, 30);
    				vertex(32, 3);
    				vertex(31, 27);
    			endShape();
    			triangle(3, 40, 25, 28, 7, 51);	//left toe
    			triangle(25, 45, 7, 34, 30, 28);	//middle toe
    			triangle(31, 25, 38, 39, 24, 30);	//right toe
    			line(3, 40, 7, 51);
    			line(7, 51, 16, 39);
    			line(16, 39, 24, 44);
    			line(24, 44, 28, 32);
    			line(28, 32, 37, 38);
    			line(37, 38, 31, 25);
    		pop();

		push();						//right arm
			translate(47, -50);
			rotate(PI/3.3);
			ellipse(0, 0, 48, 78);
		pop();
		triangle(52, -79, 82, -85, 79, -68);
		triangle(78, -50, 90, -73, 77, -74);
		stroke(81, 21, 1);
		line(52, -79, 82, -85);
		line(82, -85, 80, -74);
		line(80, -74, 90, -73);
		line(90, -73, 77, -49);
		beginShape();				//right finger
			curveVertex(67, -75);
			curveVertex(67, -75);
			curveVertex(72, -80);
			curveVertex(74, -73);
			curveVertex(74, -73);
		endShape();
	pop();	// end of whole squirtle
}

function moveSquirtle() {
  	//code for left leg movement
  	if (sqLegL < -PI/6)
  		movesqLegL = false;

  	if (sqLegL > PI/4)
  		movesqLegL = true;

  	if (movesqLegL == true)
  		sqLegL -= PI/50;
  	else
  		sqLegL += PI/50;

  	//code for right leg movement
  	if (sqLegR < -PI/4)
  		movesqLegR = true;

  	if (sqLegR > PI/6)
  		movesqLegR = false;

  	if (movesqLegR == true)
  		sqLegR += PI/50;
  	else
  		sqLegR -= PI/50;
}

function drawTear (tX, tY, tSC, tROT) {
  push();
    translate(tX, tY);
    scale(tSC);
    rotate(tROT);
    fill(0, 0, 200);
    noStroke();
      ellipse(0, 0, 18, 22);
      push();
        stroke(0, 0, 200);
        fill(0, 0, 200);
        beginShape();
          vertex(-8, -3);
          bezierVertex(-5, -14, 0, -20, 0, -20);
          bezierVertex(5, -14, 8.5, -3, 8, -3);
        endShape();
      pop();
  pop();
}

function drawPokeball(ballX, ballY, ballSc, ballReddY, ballBlackdY) {
    push();
        translate(ballX, ballY);
        scale(ballSc);
        noStroke();
        fill('#B41737')
        arc(0, ballReddY, 150, 150, 0, PI);
        fill('#B41737')
        arc(0, ballReddY, 150, 150, PI, 2*PI);
        fill(0, 0, 0);
        arc(0, 5*ballBlackdY/160, 150, ballBlackdY, PI, 2*PI);
        fill('#B6B5C6');
        arc(0, 0, 150, 150, 0, PI);
        stroke('#39313C');
        fill('#39313C');
        push();
            beginShape();
                vertex(-75, 10);
                bezierVertex(0, 20, 75, 10, 75, 10);
                bezierVertex(80, 0, 75, -10, 75, -10);
                vertex(75, -10);
                bezierVertex(0, 0, -75, -10, -75, -10);
                bezierVertex(-80, 0, -75, 10, -75, 10);
            endShape();
        pop();
        fill('#39313C');
        stroke('#39313C');
        arc(0, 0, 50, 50, PI, 2*PI);
        arc(0, 0, 50, 50, 0, PI);
        fill('#C7C8C3');
        arc(0, 0, 30, 30, PI, 2*PI);
        arc(0, 0, 15, 15 , PI, 2*PI);
        arc(0, 0, 30, 30, 0, PI);
        arc(0, 0, 15, 15 , 0, PI);
    pop();
}

function lightningAndWater() {
    push();
        noFill();
        stroke(253, 208, 35);
        //lightning
        beginShape();
            vertex(353, 323);
            vertex(343, 316);
            vertex(339, 322);
            vertex(325, 317);
            vertex(303, 339);
        endShape();
        beginShape();
            vertex(353, 323);
            vertex(349, 334);
            vertex(333, 335);
            vertex(332, 350);
            vertex(308, 373);
        endShape();
        beginShape();
            vertex(353, 323);
            vertex(330, 328);
            vertex(318, 339);
            vertex(311, 345);
        endShape();

        fill(75, 75, 200);
        noStroke();
        //water
        beginShape();
            vertex(420, 330);
            vertex(328, 380);
            vertex(311, 379);
            vertex(416, 330);
        endShape(CLOSE);
    pop();
}

function drawApple(x, y, sc, rot) {
  push();
  translate(x,y)
  scale(sc);
  rotate(rot);
  noStroke();

  //LEAF
  fill(52,113,30);
  beginShape();
    vertex(0,-30);
    bezierVertex(3,-31,5,-38,15,-33,19,-34);
  endShape();
  beginShape();
    vertex(0,-30);
    bezierVertex(3,-31,4,-25,15,-33,19,-34);
  endShape();

  //STEM
  fill(76,47,29);
  beginShape();
    curveVertex(4, 21);
    curveVertex(4, 21);
    curveVertex(2,-31);
    curveVertex(-4,-35);
    curveVertex(-5,-33);
    curveVertex(-2,-27);
    curveVertex(-1,-22);
    curveVertex(-1,-22);
  endShape();

  //APPLE
  fill(230,0,0);
  beginShape();
    curveVertex(-1,-22);
    curveVertex(-1,-22);
    curveVertex(13,-22);
    curveVertex(21,-13);
    curveVertex(24,2);
    curveVertex(14,20);
    curveVertex(0,24);
    curveVertex(-14,20);
    curveVertex(-24,8);
    curveVertex(-21,-15);
    curveVertex(-14,-22);
    curveVertex(-1,-22);
    curveVertex(-1,-22);
  endShape();
  pop();
}

function Particle(x , y) {
   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(.3, .7);

   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.r2 = 15;
   this.life = 110*1.75;
   this.life2 = 110*1.75;

   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= random(0, 2);
      this.life2 -= random(0, 2);
      this.r += random(-2, 2);
      this.r2 += random(-3, 3);
   };

   this.renderP = function()
   {
      noStroke();
      push();
         translate(this.locX, this.locY);
         fill(255, 255, 255, this.life2);
         ellipse(0, 0, this.r2); //outer circle
         fill(255, 255, 0, this.life);
         ellipse(0, 0, this.r);  //inner circle
      pop();
   };
}

function PSys(sX, sY, num) {
   this.particles = [];
   for (var i=0; i < num; i++)
   {
      this.particles.push(new Particle(sX, sY));
   }

   this.run = function()
   {
      for (var i=this.particles.length-1; i >= 0; i--)
      {
         this.particles[i].updateP();
         this.particles[i].renderP();

         if (this.particles[i].life <= 0 ||
             this.particles[i].life2 <= 0
         )
         {
            this.particles.splice(i, 1);
            this.particles.push(new Particle(sX+random(-75, 75), sY+random(-50, 50)))
         }
      }
   }
}