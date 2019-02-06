var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y+100);
}

//Groot variables
var grootLHrot = 0;
var grootLHmove;
var grootX, grootY;
var moveGroot;

//Julie variables
var julieX, julieY, julieDX;
var julieLLrot, julieRLrot, julieLLmove, julieRLmove; //left leg, right leg
var julieHead;
var julieAnimate = false;
var julieGauntletX = 275;
var julieGauntletY = 470;

//Ironman Variables
var ironManLoc;

//Thanos Variables
var thanos;

//Global Variables that store scene values.
var scene = [];
var sceneCount = 0;
var dialogueBox = true;
var spiderManDeathScene = false;
var grootDeathScene = false;
var thanosDeathScene = false;
var gauntletAnimation = false;
var fireworksExplode = false;
var julieGauntUp = false;
var fireWcount = 0;
var fireW1;
var fireW2;
var fireW3;
var fireW4;
var fireW5;
var fireW6;
var fireW7;
var fireW8;
var fireW9;
var fireW10;

function preload() {
    winningScene = loadImage('congratsScreen.png');
    grootScenery = loadImage('grootScenery.jpg');
    startpageScenery = loadImage('startpage.png');
    thanosScenery = loadImage('thanosScenery.png');
    thanos = loadImage('thanos.png')
    julieHead = loadImage('julie.png');
    spidermanScenery = loadImage('spidermanScenery.png');
    spidermanHead = loadImage('spidermanHead.png');
}

function setup() {
    cnv = createCanvas(900, 600);
    centerCanvas();

    //groot
    grootX=50;
    grootY=50;
    moveGroot = true;

    //julie
    julieX=150;
    julieY=400;
    julieDX = 2.5;
    julieLLrot=-PI/15;
    julieRLrot=PI/10;
    julieLLmove=false;
    julieRLmove=false;

    //Ironman
    ironManLoc = createVector(100, 300);

    //Scene Initialization code
    for (i=0; i<6; i++)
        scene.push(false);
    scene[0] = true;

    //Fireworks Initilization code
    fireW1 = new PSys(random(100, width-100), random(height-100), 15);
    fireW2 = new PSys(random(100, width-100), random(height-100), 15);
    fireW3 = new PSys(random(100, width-100), random(height-100), 15);
    fireW4 = new PSys(random(100, width-100), random(height-100), 15);
    fireW5 = new PSys(random(100, width-100), random(height-100), 15);
    fireW6 = new PSys(random(100, width-100), random(height-100), 15);
    fireW7 = new PSys(random(100, width-100), random(height-100), 15);
    fireW8 = new PSys(random(100, width-100), random(height-100), 15);
    fireW9 = new PSys(random(100, width-100), random(height-100), 15);
    fireW10 = new PSys(random(100, width-100), random(height-100), 15);
}

function draw() {
    //Title screen
    if (scene[0]) {
        image(startpageScenery, 0, 0, width, height);
    }

    //Instruction
    else if (scene[1]) {
        drawPokemonScenery();
        if (dialogueBox) {
            push();
                stroke(0);
                strokeWeight(2);
                fill(255,180);
                rect(250, 20, 630, 530);
                fill(255, 0, 0);
                rect(840, 20, 40, 40);
                fill(0);
                line(850, 30, 870, 50);
                line(870, 30, 850, 50);

                fill(0);
                strokeWeight(1);
                textSize(20);
                textAlign(LEFT);
                textFont('Georgia');
                text('In a universe full of suffering, Thanos, a god-like being, travels', 295, 85);
                text('from world to world to collect the cosmic "infinity stones" for a', 270, 110);
                text('gauntlet that would make him powerful enough to wipe out half of', 270, 135);
                text('the population.', 270, 160);

                text('The Marvel heroes need your help! Play the game and prevent', 295, 210);
                text('Thanos from gathering all the "infinity stones" by answering all the', 270, 235);
                text('questions.', 270, 260);

                text('The fate of the universe rests in your hands.', 290, 310);

                textAlign(CENTER);
                textSize(55);
                text('CLICK THE RED BOX', 565, 415);
                text('TO CONTINUE', 565, 475);
            pop();
        }
        drawJulie(julieX, julieY, 1)
        //Julie moving forward
        if (julieAnimate && julieX < width+125) {
            julieX += julieDX*2;
            moveJulieLL();
            moveJulieRL();
        }
        else if (julieX >= width+125) {
            julieAnimate = false;
            if (!julieAnimate) {
                sceneCount++
                scene[sceneCount-1] = false;
                scene[sceneCount] = true;
                julieX = 150;
                dialogueBox = true;
            }
        }
    }

    //Level 1
    else if (scene[2]) {
        image(spidermanScenery,0,0,width,height);
        fill(255);
        rect(30,30,840,100);
        rect(650,200,200,80);
        rect(650,300,200,80);
        rect(650,400,200,80);

        fill(0);
        textSize(25);
        textAlign(CENTER);
        textFont('Georgia');
        text("In Avengers: Infinity War, what does Spider-Man tell", 450, 65);
        text("Tony Stark before he disappears into ashes?", 450, 105);

        textSize(18);
        text('"Mr. Stark, I just want a', 750, 235);
        text('good grade in this class"', 750, 255);
        textSize(20);
        text('"Mr. Stark, I don\'t', 750, 334);
        text('feel so good"', 750, 359);
        text('"Mr. Stark, I need', 750, 433);
        text('to take a nap"', 750, 458);

        drawSpiderman(530,400,1,0);
        push();
        scale(0.8);
        drawIronMan(400,600);
        pop();

        drawJulie(julieX, julieY, 1)
        //Julie moving forward
        if (julieAnimate && julieX < width+125) {
            julieX += julieDX;
            moveJulieLL();
            moveJulieRL();
        }
        else if (julieX >= width+125) {
            julieAnimate = false;
            if (!julieAnimate) {
                sceneCount++
                scene[sceneCount-1] = false;
                scene[sceneCount] = true;
                julieX = 150;
                dialogueBox = true;
            }
        }
    }

    //Level 2
    else if (scene[3]) {
        image(grootScenery,0,0,width,height);
        fill(255);
        rect(30,30,840,100);
        rect(650,200,200,80);
        rect(650,300,200,80);
        rect(650,400,200,80);

        fill(0);
        textSize(25);
        textAlign(CENTER);
        textFont('Georgia');
        text("In Guardians of the Galaxy Vol. I,", 450, 65);
        text("how did Groot turn into Baby Groot?", 450, 105);

        textSize(18);
        text('He sacrificed his life to', 750, 235);
        text('save the other guardians', 750, 255);
        textSize(20);
        text('He went back', 750, 334);
        text('in time', 750, 359);
        text('He used a', 750, 433);
        text('magical spell', 750, 458);

        drawGroot(300,400,1);
        moveGrootlefthand();

        drawJulie(julieX, julieY, 1)
        //Julie moving forward
        if (julieAnimate && julieX < width+125) {
            julieX += julieDX;
            moveJulieLL();
            moveJulieRL();
        }
        else if (julieX >= width+125) {
            julieAnimate = false;
            if (!julieAnimate) {
                sceneCount++
                scene[sceneCount-1] = false;
                scene[sceneCount] = true;
                julieX = 150;
                dialogueBox = true;
            }
        }
    }

    //Level 3
    else if (scene[4]) {
        image(thanosScenery,0,0,width,height);
        fill(255);
        rect(30,30,840,100);
        rect(650,200,200,80);
        rect(650,300,200,80);
        rect(650,400,200,80);

        fill(0);
        textSize(25);
        textAlign(CENTER);
        textFont('Georgia');
        text("What is the name of the Marvel Comic legend who has made", 450, 65);
        text("an appearance in all the films of the Marvel Cinematic Universe?", 450, 105);

        textSize(18);
        text('Robert Downey Jr.', 750, 248);
        textSize(20);
        text('Steve Rogers', 750, 348);
        text('Stan Lee', 750, 448);

        drawThanos(350, 250, .6);

        drawJulie(julieX, julieY, 1)
        //Julie moving forward
        if (julieAnimate && julieX < width+125) {
            julieX += julieDX;
            moveJulieLL();
            moveJulieRL();
        }
        else if (julieX >= width+125) {
            julieAnimate = false;
            if (!julieAnimate) {
                sceneCount++
                scene[sceneCount-1] = false;
                scene[sceneCount] = true;
                julieX = 150;
            }
        }
    }

    //Win Screen
    else if (scene[5]) {
        if (gauntletAnimation)
            background(0);
        else {
            image(winningScene,0,0,width,height);

            fill(255);
            rect(650,430,200,50);
            rect(650,500,200,50);

            fill(0);
            textSize(20);
            text("YES",745,455);
            text("DEFINITELY YES",742,526);
        }

        push();
        scale(0.5)
        drawIronMan(180,1000);
        pop();

        drawGroot(210,445,0.7);

        drawJulie(336,446,0.7)
        drawSpiderman(500, 445, .8);

        if (gauntletAnimation) {
            drawJulieWinGauntlet(julieGauntletX, julieGauntletY, 0.25);

            fireWcount++
            if (fireWcount%(60) == 0) {
                fireW1 = new PSys(random(100, width-100), random(height-100), 15);
                fireW2 = new PSys(random(100, width-100), random(height-100), 15);
                fireW3 = new PSys(random(100, width-100), random(height-100), 15);
                fireW4 = new PSys(random(100, width-100), random(height-100), 15);
                fireW5 = new PSys(random(100, width-100), random(height-100), 15);
                fireW6 = new PSys(random(100, width-100), random(height-100), 15);
                fireW7 = new PSys(random(100, width-100), random(height-100), 15);
                fireW8 = new PSys(random(100, width-100), random(height-100), 15);
                fireW9 = new PSys(random(100, width-100), random(height-100), 15);
                fireW10 = new PSys(random(100, width-100), random(height-100), 15);
            }
            fireW1.run();
            fireW2.run();
            fireW3.run();
            fireW4.run();
            fireW5.run();
            fireW6.run();
            fireW7.run();
            fireW8.run();
            fireW9.run();
            fireW10.run();

            if (julieGauntletY > 465 && julieGauntUp)
                julieGauntletY -= .25;
            else
                julieGauntUp = false;
            if (julieGauntletY < 470 && !julieGauntUp)
                julieGauntletY += .25
            else
                julieGauntUp = true;
        }
    }

    //Death Screen
    else if (scene[6]) {
        background(0);
        if (spiderManDeathScene) {
            drawDeathSpiderman();
        }
        if (grootDeathScene) {
            drawDeathGroot();
        }
        if (thanosDeathScene) {
            drawDeathThanos();
        }
    }
}

function mouseClicked() {
    if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height && sceneCount == 0) {
        sceneCount++
        scene[sceneCount-1] = false;
        scene[sceneCount] = true;
    }
    else if (sceneCount == 1) {
        if (mouseX >= 840 && mouseX <= 880 && mouseY >= 20 && mouseY <= 60) {
            dialogueBox = false;
            julieAnimate = true;
        }
    }
    else if (sceneCount == 2) {
        if (mouseX >= 650 && mouseX <= 850 && mouseY >= 200 && mouseY <= 280) {
            scene[sceneCount] = false;
            sceneCount = 6;
            scene[sceneCount] = true;
            spiderManDeathScene = true;
        }
        else if (mouseX >= 650 && mouseX <= 850 && mouseY >= 300 && mouseY <= 380) {
            julieAnimate = true;
        }
        else if (mouseX >= 650 && mouseX <= 850 && mouseY >= 400 && mouseY <= 480) {
            scene[sceneCount] = false;
            sceneCount = 6;
            scene[sceneCount] = true;
            spiderManDeathScene = true;
        }
    }
    else if (sceneCount == 3) {
        if (mouseX >= 650 && mouseX <= 850 && mouseY >= 200 && mouseY <= 280) {
            julieAnimate = true;
        }
        else if (mouseX >= 650 && mouseX <= 850 && mouseY >= 300 && mouseY <= 380) {
            scene[sceneCount] = false;
            sceneCount = 6;
            scene[sceneCount] = true;
            grootDeathScene = true;
        }
        else if (mouseX >= 650 && mouseX <= 850 && mouseY >= 400 && mouseY <= 480) {
            scene[sceneCount] = false;
            sceneCount = 6;
            scene[sceneCount] = true;
            grootDeathScene = true;
        }
    }
    else if (sceneCount == 4) {
        if (mouseX >= 650 && mouseX <= 850 && mouseY >= 200 && mouseY <= 280) {
            scene[sceneCount] = false;
            sceneCount = 6;
            scene[sceneCount] = true;
            thanosDeathScene = true;
        }
        else if (mouseX >= 650 && mouseX <= 850 && mouseY >= 300 && mouseY <= 380) {
            scene[sceneCount] = false;
            sceneCount = 6;
            scene[sceneCount] = true;
            thanosDeathScene = true;
        }
        else if (mouseX >= 650 && mouseX <= 850 && mouseY >= 400 && mouseY <= 480) {
            julieAnimate = true;
        }
    }
    else if (sceneCount == 5) {
        if (mouseX >= 650 && mouseX <= 850 && mouseY >= 430 && mouseY <= 480) {
            gauntletAnimation = true;
            julieGauntUp = true;
            fireworksExplode = true;
        }
        if (mouseX >= 650 && mouseX <= 850 && mouseY >= 500 && mouseY <= 550) {
            gauntletAnimation = true;
            julieGauntUp = true;
            fireworksExplode = true;
        }
    }
    else if (sceneCount == 6) {
        scene[sceneCount] = false;
        spiderManDeathScene = false;
        grootDeathScene = false;
        thanosDeathScene = false;
        sceneCount = 0;
        scene[sceneCount] = true;
    }
}

function drawIronMan(x, y) {
    push();
        translate(x, y);
        stroke(0);
        strokeWeight(2);
        var mouseXX = mouseX - x;
        var mouseYY = mouseY - y;

        //Front chest and Core
        push();
            //Armor Piece
            beginShape();
                fill(211, 38, 24);
                vertex(-45, -50);
                bezierVertex(0, -30, 45, -50, 45, -50);
                bezierVertex(40, -10, 55, 10, 50, 45);
                bezierVertex(25, 50, 10, 60, 10, 60);
                bezierVertex(0, 55, -10, 60, -10, 60);
                bezierVertex(-25, 50, -50, 45, -50, 45);
                bezierVertex(-50, -10, -40, 10, -45, -50);
            endShape(CLOSE);
            //Line below arc reactor
            beginShape();
                vertex(-44, -15);
                bezierVertex(-30, -10, -30, 15, 0, 13);
                bezierVertex(30, 15, 30, -10, 44, -15);
            endShape();
            //Grey Shoulder piece of Armor
            beginShape();
                fill(163, 165, 144);
                vertex(-44, -38);
                vertex(-30, -40);
                vertex(-30, -45);
                vertex(-45, -50);
                vertex(-44, -38);
            endShape();
            beginShape();
                vertex(44, -38);
                vertex(30, -40);
                vertex(30, -45);
                vertex(45, -50);
                vertex(44, -38);
            endShape();
            //Lines defining the armor
            beginShape();
                noFill();
                vertex(-15, 11);
                bezierVertex(-25, 60, 25, 60, 15, 11);
            endShape();
            beginShape();
                vertex(-16, 21);
                bezierVertex(0, 30, 16, 21, 16, 21);
            endShape();
            beginShape();
                vertex(-50, 25);
                bezierVertex(0, 50, 50, 25, 50, 25);
            endShape();
            //Orange Decal on Armor
            beginShape();
                fill(255, 178, 15);
                vertex(-48, 11);
                vertex(-25, 20);
                vertex(-15, 11);
                vertex(-23, 8);
                vertex(-32, 16);
            endShape();
            beginShape();
                fill(255, 178, 15);
                vertex(48, 11);
                vertex(25, 20);
                vertex(15, 11);
                vertex(23, 8);
                vertex(32, 16);
            endShape();
            //Left Leg
            beginShape();
                fill(211, 38, 24);
                vertex(-50, 45);
                vertex(-50, 90);
                bezierVertex(-75, 115, -5, 100, -5, 100);
                vertex(0, 58);
                bezierVertex(-25, 45, -50, 45, -50, 45);
            endShape();
            beginShape();
                vertex(-50, 90);
                bezierVertex(-25, 95, -5, 88, -5, 88);
            endShape();
            beginShape();
                vertex(-50, 75);
                vertex(-35, 77);
                vertex(-30, 82);
                vertex(-25, 82);
                vertex(-20, 77);
                vertex(-3, 75);
                vertex(0, 58);
                bezierVertex(-25, 45, -50, 45, -50, 45);
            endShape(CLOSE);
            beginShape();
                vertex(-35, 77);
                vertex(-30, 72);
                vertex(-25, 72);
                vertex(-20, 77);
            endShape();
            //Orange Leg Decal
            beginShape();
                fill(255, 178, 15);
                vertex(-30, 72);
                vertex(-40, 46);
                bezierVertex(-50, 45, -50, 45, -50, 45);
                vertex(-50, 75);
                vertex(-35, 77);
            endShape();
            beginShape();
                vertex(-25, 72);
                vertex(-15, 52);
                vertex(0, 58);
                vertex(-3, 75);
                vertex(-20, 77);
                vertex(-25, 72);
            endShape();
            //Grey Leg decal
            beginShape();
                fill(163, 165, 144);
                vertex(-25, 72);
                vertex(-30, 72);
                vertex(-40, 46);
                vertex(-15, 52);
            endShape(CLOSE);
            //Right Leg
            beginShape();
                fill(211, 38, 24);
                vertex(50, 45);
                vertex(50, 90);
                bezierVertex(75, 115, 5, 100, 5, 100);
                vertex(0, 58);
                bezierVertex(25, 45, 50, 45, 50, 45);
            endShape();
            beginShape();
                vertex(50, 90);
                bezierVertex(25, 95, 5, 88, 5, 88);
            endShape();
            beginShape();
                vertex(50, 75);
                vertex(35, 77);
                vertex(30, 82);
                vertex(25, 82);
                vertex(20, 77);
                vertex(3, 75);
                vertex(0, 58);
                bezierVertex(25, 45, 50, 45, 50, 45);
            endShape(CLOSE);
            beginShape();
                vertex(35, 77);
                vertex(30, 72);
                vertex(25, 72);
                vertex(20, 77);
            endShape();
            //Orange Leg Decal
            beginShape();
                fill(255, 178, 15);
                vertex(30, 72);
                vertex(40, 46);
                bezierVertex(50, 45, 50, 45, 50, 45);
                vertex(50, 75);
                vertex(35, 77);
            endShape();
            beginShape();
                vertex(25, 72);
                vertex(15, 52);
                vertex(0, 58);
                vertex(3, 75);
                vertex(20, 77);
                vertex(25, 72);
            endShape();
            //Grey Leg decal
            beginShape();
                fill(163, 165, 144);
                vertex(25, 72);
                vertex(30, 72);
                vertex(40, 46);
                vertex(15, 52);
            endShape(CLOSE);
            //Left Arm
            beginShape();
                fill(211, 38, 24);
                vertex(-45, -50);
                bezierVertex(-40, 0, -51, 55, -51, 55);
                bezierVertex(-85, 60, -95, 40, -95, 40);
                bezierVertex(-85, -10, -45, -50, -45, -50);
            endShape();
            beginShape();
                vertex(-70, 9);
                vertex(-75, 24);
                vertex(-80, 24);
                vertex(-87, 41);
            endShape();
            beginShape();
                vertex(-94, 35);
                bezierVertex(-80, 50, -50, 47, -50, 47);
                bezierVertex(-80, 50, -94, 35, -94, 35);
            endShape();
            //Orange Decal Arm
            beginShape();
                fill(255, 178, 15);
                vertex(-63, -27);
                bezierVertex(-60, -20, -45, -14, -45, -14);
                vertex(-46, 12);
                bezierVertex(-70, 15, -80, 0, -80, 0);
                bezierVertex(-77, -9, -63, -27, -63, -27);
            endShape();
            //Right Arm
            beginShape();
                fill(211, 38, 24);
                vertex(45, -50);
                bezierVertex(40, 0, 51, 55, 51, 55);
                bezierVertex(85, 60, 95, 40, 95, 40);
                bezierVertex(85, -10, 45, -50, 45, -50);
            endShape();
            beginShape();
                vertex(70, 9);
                vertex(75, 24);
                vertex(80, 24);
                vertex(87, 41);
            endShape();
            beginShape();
                vertex(94, 35);
                bezierVertex(80, 50, 50, 47, 50, 47);
                bezierVertex(80, 50, 94, 35, 94, 35);
            endShape();
            //Orange Decal Arm
            beginShape();
                fill(255, 178, 15);
                vertex(63, -27);
                bezierVertex(60, -20, 45, -14, 45, -14);
                vertex(46, 12);
                bezierVertex(70, 15, 80, 0, 80, 0);
                bezierVertex(77, -9, 63, -27, 63, -27);
            endShape();
            //Ear piece
            beginShape();
                fill(211, 38, 24);
                vertex(90, -150);
                vertex(100, -140);
                vertex(95, -97);
                vertex(86, -90);
            endShape();
            beginShape();
                vertex(-90, -150);
                vertex(-100, -140);
                vertex(-95, -97);
                vertex(-86, -90);
            endShape();
            //Head
            beginShape();
                fill(211, 38, 24);
                vertex(-70, -60);
                bezierVertex(0, -20, 70, -60, 70, -60);
                bezierVertex(120, -125, 70, -210, 70, -210);
                bezierVertex(0, -250, -70, -210, -70, -210);
                bezierVertex(-120, -125, -70, -60, -70, -60);
            endShape();
            //Line above mask
            beginShape();
                vertex(-20, -190);
                bezierVertex(0, -200, 20, -190, 20, -190);
            endShape();
            //Mask
            beginShape();
                fill(255, 178, 15);
                vertex(-45, -50);
                vertex(-60, -80);
                vertex(-75, -90);
                bezierVertex(-105, -120, -70, -190, -70, -190);
                vertex(-25, -205);
                vertex(-10, -170);
                vertex(10, -170);
                vertex(25, -205);
                vertex(70, -190);
                bezierVertex(105, -120, 75, -90, 75, -90);
                vertex(60, -80);
                vertex(45, -50);
                bezierVertex(0, -30, -45, -50, -45, -50);
            endShape();
            //Mouth
            beginShape();
                vertex(-35, -48);
                vertex(-30, -60);
                vertex(30, -60);
                vertex(35, -48);
            endShape();
            //Eyes
            beginShape();
                fill(255, 250, 237);
                vertex(-12, -122);
                vertex(-15, -115);
                bezierVertex(-65, -95, -75, -120, -70, -135);
                bezierVertex(0, -105, 70, -135, 70, -135);
                bezierVertex(75, -120, 65, -95, 15, -115);
                vertex(12, -122);
            endShape();
            //Arc Reactor
            ellipse(0, -15, 25);
        pop();
    pop();
}

function drawGroot(grootX,grootY,grootSC)
{
  push();
    translate(grootX,grootY);
    scale(grootSC);
    stroke(0);
    fill(179,100,43);
    strokeWeight(3);

    fill(179,100,43);
    strokeWeight(2)
    // right arm
    push();
      translate(30,40);
      rotate(-PI/8);
      ellipse(0,35,30,90)
      line(-14,34,14,40)

    pop();

    // left arm
    push();
      translate(-30,39);
      rotate(grootLHrot);
      ellipse(0,35,30,90)
      fill(0);
      line(-12,60,13,53)
      line(-15,38,-6,32)
    pop();

    beginShape(); //body
      curveVertex(-30,30);
      curveVertex(-30,30);
      curveVertex(-30,125);
      curveVertex(0,133);
      curveVertex(30,125);
      // curveVertex(30,81);
      curveVertex(30,30);
      curveVertex(30,30);
    endShape();

    ellipse(0,-10,100,100); //head

    beginShape();
      curveVertex(-49,0); //top of head
      curveVertex(-49,0);
      curveVertex(-55,-65);
      curveVertex(-37,-68);
      curveVertex(-34,-60);
      curveVertex(-36,-81);
      curveVertex(-16,-82);
      curveVertex(0,-85);
      curveVertex(11,-61);
      curveVertex(24,-72);
      curveVertex(48,-66);
      curveVertex(49,0);
      curveVertex(49,0);
    endShape();

    fill(0);
    noStroke();
    ellipse(-24,-12,25); //left eye
    ellipse(24,-12,25); //right eye

    fill(255);
    ellipse(-29,-15,9);
    ellipse(-21,-7,5);
    ellipse(21,-15,9);
    ellipse(29,-7,5);

    fill(0);
    stroke(0);
    strokeWeight(3);
    beginShape(); // mouth
      curveVertex(-7,14);
      curveVertex(-7,14);
      curveVertex(7,14);
      curveVertex(0,21);
      curveVertex(-7,14);
      curveVertex(-7,14);
    endShape();

    strokeWeight(2);
    //head
    line(-28,-81,-16,-36);
    line(-16,-82,-18,-66);
    line(47,-65,38,-46);
    line(-51,-70,-45,-52);
    line(34,-71,32,-60);

    //body
    line(1,41,0,62);
    line(-30,62,30,62);
    line(-17,63,-15,80);
    line(-15,80,12,85);
    line(12,85,13,101);
    line(31,104,23,101);
    line(23,101,1,105);
    line(0,105,-32,97);
    strokeWeight(7)
    line(1,107,1,130);

  pop();
}

function moveGrootlefthand()
{
  if (grootLHrot < PI/10)
  {
    grootLHmove = false;
  }

  if (grootLHrot > PI/2)
  {
    grootLHmove = true;
  }

  if (grootLHmove == true)
  {
    grootLHrot -= PI/100;
  }

  else
  {
    grootLHrot += PI/100;
  }
}

function drawJulie(julieX, julieY, julieSC)
{
  push();
    translate(julieX,julieY);
    scale(julieSC);
    noStroke();


    fill(184,147,86);
    // ellipse(0,8,100,90); //hair

    // fill(248,223,204);
    // ellipse(0,15,80,70); //head
    // rect(-12,46,24,10); //neck
    ellipse(-28,132,15,15); //lefthand
    ellipse(28,132,15,15); //righthand

    // fill(0);
    // ellipse(-16,16,10); //left eye
    // ellipse(16,16,10); //right eye

    // noFill();
    // stroke(0);
    // strokeWeight(1);
    // arc(0,30,10,10,PI/4,3*PI/4) //mouth
    // arc(-16.5,12,10,10,5*PI/4,7*PI/4) //left eyebrow
    // arc(16.5,12,10,10,5*PI/4,7*PI/4) //right eyebrow

    noStroke();

    // legs
    fill(30,0,225);
    beginShape();
      curveVertex(-24,140);
      curveVertex(-24,140);
      curveVertex(-23,147);
      curveVertex(0,150);
      curveVertex(21,147);
      curveVertex(21,137);
      curveVertex(-23,140);
      curveVertex(-23,140);
    endShape();

    //left leg
    push();
      translate(-22,135);
      rotate(julieLLrot);
      rect(0,0,20,60);
        fill(0);
      ellipse(10,60,20);
    pop();

    //right leg
    fill(30,0,225);
    push();
      translate(1,135);
      rotate(julieRLrot);
      rect(0,0,20,60);
      fill(0);
      ellipse(10,60,20)
    pop();

    fill(205,202,202);
    //body
    beginShape();
      curveVertex(-12,53);
      curveVertex(-12,53);
      curveVertex(-32,63);
      curveVertex(-37,123);
      curveVertex(-28,128);
      curveVertex(-22,130);
      curveVertex(-12,53);
      curveVertex(-12,53);
    endShape();

    beginShape();
      curveVertex(12,53);
      curveVertex(12,53);
      curveVertex(32,63);
      curveVertex(37,123);
      curveVertex(28,128);
      curveVertex(22,130);
      curveVertex(12,53);
      curveVertex(12,53);
    endShape();

    beginShape();
      curveVertex(-12,54);
      curveVertex(-12,54);
      curveVertex(-23,134);
      curveVertex(-23,142);
      curveVertex(25,141);
      curveVertex(25,81);
      curveVertex(13,54);
      curveVertex(-12,54);
      curveVertex(-12,54);
    endShape();

    rect(-18,53,32,40)

    beginShape();
      curveVertex(-27,129);
      curveVertex(-27,129);
      curveVertex(-23,144);
      curveVertex(0,144);
      curveVertex(-4,128);
      curveVertex(-27,129);
      curveVertex(-27,129);
    endShape();

  // fill(184,147,86);
  // beginShape(); //bangs
  //   curveVertex(20,-15);
  //   curveVertex(20,-15);
  //   curveVertex(-4,-4);
  //   curveVertex(-29,-1);
  //   curveVertex(-41,13);
  //   curveVertex(-42,-2);
  //   curveVertex(20,-15);
  //   curveVertex(20,-15);
  // endShape();
  // quad(-37,-2,22,-15,15,-31,-36,-18)

  push();
    scale(.5)
    image(julieHead,-100,-90,200,230);
  pop();

  fill(0);
  textSize(8);
  textFont("Helvetica");
  textAlign(CENTER);
  text("<b>Be</b>",0,78);

  pop();
}

function moveJulieLL()
{
  if (julieLLrot < -PI/10)
  {
    julieLLmove = false
  }

  if (julieLLrot > PI/10)
  {
    julieLLmove = true
  }

  if (julieLLmove == true)
  {
    julieLLrot -= PI/200;
  }

  else
  {
    julieLLrot += PI/200;
  }
}

function moveJulieRL()
{
  if (julieRLrot < -PI/10)
  {
    julieRLmove = false
  }

  if (julieRLrot > PI/10)
  {
    julieRLmove = true
  }

  if (julieRLmove == true)
  {
    julieRLrot -= PI/200;
  }

  else
  {
    julieRLrot += PI/200;
  }
}

function drawPokemonScenery() {
    drawBackgroundGradient(0, 0, width, 400, color(132, 215, 229), color(204, 240, 238), 'X_AXIS');
    drawBackgroundGradient(0, 325, width, 175, color(46, 112, 138), color(25, 69, 104), 'Y_AXIS');
    drawBackgroundGradient(0, 500, width, 100, color(47, 142, 100), color(28, 91, 83), 'X_AXIS');
    drawBackgroundTrees(0, 150);
    drawTree(0, 150);
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

function drawBackgroundTrees(x, y) {
    push();
        translate(x, y);
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

function drawTree(x, y) {
    push();
        translate(x, y);
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
            bezierVertex(268-x, 255-y, 289-x, 202-y, 221, -10);
            bezierVertex(50-x, 10-y, -11, -13, -11, -13);
            bezierVertex(-9, 50, -8, 59, -8, 59);
            bezierVertex(37, 104, 120, 118, 120, 118);
        endShape();
    pop();
}

function drawSpiderman(sX, sY, sSC, sROT) {
    push();
      translate(sX, sY);
      scale(sSC);
      rotate(sROT);

        //HEAD (origin)
        stroke(150, 0, 0);
        strokeWeight(3);
        fill(180, 0, 0);
          ellipse(0, 20, 60, 80);
        //BODY
        push();
          translate(0, 45);
          fill(180, 0, 0);
          noStroke();
            rect(-40, 0, 80, 80);
            push();
              fill(0, 0, 255);
              ellipse(0, 73, 30, 20);
              ellipse(0, 70, 80, 30);
            pop();
            //LEFT ARM
            push();
              rotate(PI/3);
                rect(-20, 35, 25, 45);
            pop();
            // RIGHT ARM
            push();
              rotate(-PI/3);
                rect(-5, 35, 25, 40);
            pop();
            //HANDS
            push();
              ellipse(-70, 30, 25, 25);
              ellipse(70, 30, 25, 25);
            pop();
            //right finger
            push();
              rotate(PI/2);
              ellipse(22, -79, 8, 30);
            pop();
            push();
              rotate(-PI/2.2);
              ellipse(-17, 82, 8, 27);
            pop();
            push();
              rotate(-PI/3);
              ellipse(10, 84, 8, 25);
            pop();
            push();
              rotate(-PI/3.5);
              ellipse(15, 82, 8, 25);
            pop();
              ellipse(66, 40, 8, 25);
            //left fingers
            push();
              rotate(PI/2);
              ellipse(22, 79, 8, 30);
            pop();
            push();
              rotate(PI/2.2);
              ellipse(17, 82, 8, 27);
            pop();
            push();
              rotate(PI/3);
              ellipse(-10, 84, 8, 25);
            pop();
            push();
              rotate(PI/3.5);
              ellipse(-15, 82, 8, 25);
            pop();
              ellipse(-66, 40, 8, 25);
        pop();
          //LEGS
          push();
            translate(-10, 125);
            fill(180, 0, 0);
            noStroke();
              //LEFT LEG
              push();
              fill(0, 0, 255);
              rotate(PI/12);
                rect(-30, -5, 30, 50, 5);
              fill(180, 0, 0);
                  rect(-30, 25, 30, 16);
              pop();
              //RIGHT LEG
              push();
              fill(0, 0, 255);
              rotate(-PI/12);
                rect(20, 0, 30, 50, 5);
              fill(180, 0, 0);
                rect(20, 30, 30, 18);
              pop();
              ellipse(-28, 38, 35, 18);
              ellipse(48, 38, 35, 18);
              fill(0, 0, 255);
              rect(-30, -25, 80, 20);
          pop();
          //DETAILS
          push();
            translate(0, 60);
          //WEB DETAILS
            push();
              noFill();
              stroke(0);
              strokeWeight(1);
                line(-38, -9, -38, 40);
                line(-30, -8, -30, 40);
                line(-20, -4, -20, 40);
                line (-10, -2, -10, 40);
                line(0, -2, 0, 40);
                line (10, -2, 10, 40);
                line(20, -4, 20, 40);
                line(30, -8, 30, 40);
                line(38, -9, 38, 40);
                //
                line(-45, 81, -45, 110);
                line(-35, 84, -35, 110);
                line(-25, 88, -25, 107);
                //
                line(45, 81, 45, 110);
                line(35, 84, 35, 110);
                line(25, 87, 25, 108);
                //arm details
                line(-37, -10, -69, 7);
                line(-38, -1, -64, 12);
                line(-38, 7, -62, 18);
                line(37, -10, 69, 7);
                line(38, -1, 64, 12);
                line(38, 7, 62, 18);
                line(-40, -15, -68, 0);
                line(40, -15, 67, 0);
                line(-40, 40, 39, 40);
                //curve lines
                arc(-33.5, -2, 8, 8, 0, PI);
                arc(-24.5, -1, 10, 8, 0, PI);
                arc(-14.5, 0, 10, 8, 0, PI);
                arc(-4.5, 0, 10, 8, 0, PI);
                arc(5.5, 0, 10, 8, 0, PI);
                arc(15.5, 0, 10, 8, 0, PI);
                arc(25.5, 0, 10, 8, 0, PI);
                arc(34.5, 0, 8, 8, 0, PI);
                //
                arc(-33.5, 8, 8, 8, 0, PI);
                arc(-24.5, 8, 10, 8, 0, PI);
                arc(-14.5, 8, 10, 8, 0, PI);
                arc(-4.5, 8, 10, 8, 0, PI);
                arc(5.5, 8, 10, 8, 0, PI);
                arc(15.5, 8, 10, 8, 0, PI);
                arc(25.5, 8, 10, 8, 0, PI);
                arc(34.5, 8, 8, 8, 0, PI);
                //
                arc(-14.5, 16, 10, 8, 0, PI);
                arc(-4.5, 16, 10, 8, 0, PI);
                arc(5.5, 16, 10, 8, 0, PI);
                arc(15.5, 16, 10, 8, 0, PI);
                //
                arc(-14.5, 24, 10, 8, 0, PI);
                arc(-4.5, 24, 10, 8, 0, PI);
                arc(5.5, 24, 10, 8, 0, PI);
                arc(15.5, 24, 10, 8, 0, PI);
                //
                arc(-14.5, 32, 10, 8, 0, PI);
                arc(-4.5, 32, 10, 8, 0, PI);
                arc(5.5, 32, 10, 8, 0, PI);
                arc(15.5, 32, 10, 8, 0, PI);
                //
                arc(-39.5, 90, 10, 8, 0, PI);
                arc(-29.5, 90, 10, 8, 0, PI);
                arc(30.5, 90, 10, 8, 0, PI);
                arc(40.5, 90, 10, 8, 0, PI);
                //
                arc(-49.5, 100, 9, 8, 0, PI);
                arc(-39.5, 98, 10, 8, 0, PI);
                arc(-29.5, 98, 10, 8, 0, PI);
                arc(30.5, 98, 10, 8, 0, PI);
                arc(40.5, 98, 10, 8, 0, PI);
                arc(49.5, 100, 9, 8, 0, PI);
                //
                arc(-39.5, 106, 10, 8, 0, PI);
                arc(-29.5, 106, 10, 8, 0, PI);
                arc(30.5, 106, 10, 8, 0, PI);
                arc(40.5, 106, 10, 8, 0, PI);
              // arm curves
              push();
                  rotate(-PI/4);
                arc(-31, -32, 10, 7, PI/2, 3*PI/2);
                arc(-41, -36, 10, 7, PI/2, 3*PI/2);
                arc(-35, -25, 10, 7, PI/2, 3*PI/2);
                arc(-45, -29, 10, 7, PI/2, 3*PI/2);
              pop();
              push();
                  rotate(PI/4);
                arc(30, -32, 10, 7, 3*PI/2, PI/2);
                arc(40, -36, 10, 7, 3*PI/2, PI/2);
                arc(34, -25, 10, 7, 3*PI/2, PI/2);
                arc(44, -29, 10, 7, 3*PI/2, PI/2);
              pop();
            pop();
            //SPIDER
              push();
                noStroke();
                fill(0);
                  ellipse(0, 15, 8, 15);
                  ellipse(0, 20, 10, 10);
                  ellipse(5, 15, 8, 2); //leg right
                  ellipse(-5, 15, 8, 2); //leg Left
                  ellipse(9, 12, 1.8, 6);
                  ellipse(7.5, 13, 1.8, 6);
                  ellipse(-9, 12, 1.8, 6);
                  ellipse(-7.5 , 13, 1.8, 6);
                  ellipse(-9, 23, 1.8, 8);
                  ellipse(-8, 22, 1.8, 6);
                  ellipse(9, 23, 1.8, 8);
                  ellipse(8, 22, 1.8, 6);
                  push();
                    rotate(PI/3);
                    ellipse(14, 15, 1.8, 9);
                  pop();
                  push();
                    rotate(-PI/3);
                    ellipse(-14, 16, 1.8, 9);
                  pop();
             pop();
             //BLUE DETAILS
             push();
                fill(0, 0, 255);
                noStroke();
                quad(20, 16, 40, 9, 40, 35, 21, 35);
                quad(-20, 16, -40, 9, -40, 35, -21, 35);
                quad(40, 9, 62, 20, 62, 27, 39, 13);
                quad(-40, 9, -62, 20, -62, 27, -39, 13);
             pop();
        pop();

        //HEAD IMAGE
        image(spidermanHead, -90, -90, 180, 150);

  pop();
  }

function drawThanos(tX, tY, tSc)
{
    push();
        translate(tX, tY);
        scale(tSc);

        noStroke();
        fill(41, 83, 141);  //blue
        beginShape();                                   //left arm
            vertex(112, 209);
            bezierVertex(-20, 280, 101, 339, 101, 339);
        endShape();
        fill(252, 221, 16);
        quad(108, 267, 50, 291, 70, 321, 108, 302);
        beginShape();
            curveVertex(63, 308);
            curveVertex(63, 308);
            curveVertex(57, 314);
            curveVertex(55, 328);
            curveVertex(74, 349);
            curveVertex(104, 348);
            curveVertex(117, 301);
        endShape(CLOSE);

        fill(41, 83, 141);
        quad(110, 230, 290, 230, 300, 340, 100, 340);   //torso

        quad(89, 362, 76, 409, 168, 415, 225, 335);     //left leg
        quad(311, 362, 325, 409, 230, 415, 175, 335);   //right leg

        fill(252, 221, 16);
        beginShape();
            vertex(172, 354);
            bezierVertex(201, 412, 230, 354, 230, 354);
        endShape();

        quad(77, 402, 171, 411, 164, 431, 68, 431);     //left boot
        fill(41, 83, 141);
        beginShape();
            vertex(77, 402);
            bezierVertex(120, 412, 170, 411, 170, 411);
        endShape();
        fill(252, 221, 16);
        quad(68, 431, 164, 431, 162, 436, 74, 438);
        quad(74, 438, 162, 436, 159, 443, 60, 444);
        quad(159, 443, 60, 444, 64, 453, 158, 454);
        beginShape();
            vertex(64, 453);
            bezierVertex(110, 463, 158, 454, 158, 454);
        endShape();
        noFill();
        stroke(210, 185, 2);
        beginShape();
            vertex(74, 438);
            bezierVertex(79, 438, 82, 441, 82, 441);
        endShape();
        beginShape();
            vertex(74, 438);
            bezierVertex(80, 435, 85, 439, 85, 439);
        endShape();

        noStroke();
        fill(252, 221, 16);
        quad(230, 415, 324, 404, 333, 434, 242, 437);   //right boot
        beginShape();
            vertex(230, 415);
            bezierVertex(262, 399, 324, 404, 324, 404);
        endShape();
        beginShape();
            vertex(324, 404);
            bezierVertex(338, 432, 334, 458, 334, 458);
        endShape();
        quad(242, 437, 333, 434, 333, 437, 240, 439);
        quad(240, 439, 333, 437, 333, 440, 242, 442);
        quad(242, 442, 333, 440, 333, 445, 238, 448);
        quad(238, 448, 333, 445, 334, 457, 240, 457);
        beginShape();
            vertex(240, 457);
            bezierVertex(286, 475, 334, 457, 334, 457);
        endShape();
        noFill();
        stroke(210, 185, 2);
        beginShape();
            vertex(242, 442);
            bezierVertex(280, 426, 309, 441, 309, 441);
        endShape();
        beginShape();
            vertex(242, 437);
            bezierVertex(292, 419, 314, 438, 314, 438);
        endShape();

        noStroke();
        fill(41, 83, 141);
        quad(100, 340, 85, 365, 145, 380, 175, 340);    //left coat flap
        quad(300, 340, 315, 365, 255, 380, 225, 340);   //right coat flap
        quad(175, 340, 225, 340, 245, 355, 155, 355);   //middle coat flap

        fill(252, 221, 16); //gold
        quad(85, 365, 145, 380, 149, 375, 88, 360);     //left bottom border
        quad(145, 380, 140, 378, 161, 350, 164, 355);   //left side border
        quad(161, 350, 164, 355, 236, 355, 239, 350);   //middle border
        quad(236, 355, 239, 350, 261, 378, 255, 380);   //right side border
        quad(315, 365, 255, 380, 251, 375, 312, 360);   //right bottom border

        rect(188, 245, 24, 105);    //middle stripe
        quad(98, 340, 302, 340, 301, 335, 99, 335);     //belt
        stroke(210, 185, 2);        //gold stroke color
        rect(182, 331, 36, 13, 2);                      //belt buckle

        noStroke();
        fill(252, 221, 16);
        arc(200, 180, 260, 150, PI/15, 14*PI/15);       //neck

        image(thanos, 135, 40, 130, 210);

        ellipse(315, 275, 130, 80);                     //gauntlet
        ellipse(315, 250, 130, 80);
        fill(252, 221, 16);
        noStroke();
        quad(250, 253, 240, 211, 385, 190, 380, 249);
        fill(244, 187, 35);
        ellipse(316, 265, 54, 38);
        fill(148, 194, 96);         //green stone
        ellipse(316, 265, 44, 28);
        push();
            translate(266, 230);    //red stone
            rotate(-PI/10);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(234, 53, 62);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(297, 228);   //purple stone
            rotate(-PI/25);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(200, 149, 208);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(328, 225);    //blue stone
            rotate(PI/30);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(125, 137, 213);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(359, 223);    //yellow stone
            rotate(PI/13);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(237, 213, 117);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(363, 255);    //light blue stone
            rotate(-PI/6);
            fill(244, 187, 35);
            ellipse(0, 0, 32, 21);
            fill(137, 195, 207);
            ellipse(0, 0, 25, 14);
        pop();
        fill(252, 221, 16);
        stroke(210, 185, 2);
        beginShape();               //first finger
            vertex(240, 211);
            bezierVertex(242, 166, 242, 143, 325, 125);
            bezierVertex(341, 195, 341, 190, 341, 198);
        endShape();
        beginShape();
            vertex(281, 204);       //second finger
            bezierVertex(271, 173, 271, 139, 279, 135);
            bezierVertex(279, 135, 289, 131, 300, 129);
            bezierVertex(300, 129, 308, 143, 312, 200);
        endShape();
        beginShape();
            vertex(301, 131);       //third finger
            bezierVertex(301, 126, 307, 124, 307, 124);
            bezierVertex(307, 124, 318, 120, 329, 124);
            bezierVertex(329, 124, 339, 162, 341, 195);
        endShape();
        beginShape();               //fourth finger
            vertex(340, 198);
            bezierVertex(330, 126, 327, 125, 336, 123);
            bezierVertex(336, 123, 341, 120, 358, 122);
            bezierVertex(364, 125, 362, 127, 372, 192);
        endShape();
        beginShape();
            vertex(368, 165);       //thumb
            bezierVertex(385, 160, 388, 173, 388, 173);
            bezierVertex(388, 173, 394, 210, 394, 210);
            bezierVertex(394, 210, 396, 236, 380, 249);
        endShape();
    pop();
}

function drawDeathSpiderman()
{
    fill(255);
    textSize(60);
    textAlign(CENTER);
    textFont('Georgia');
    text('THANOS HAS KILLED YOU.', 450, 250);

    textSize(40);
    text('(You didn\'t feel so good)', 450, 350);
}

function drawDeathGroot()
{
    fill(255);
    textSize(60);
    textAlign(CENTER);
    textFont('Georgia');
    text('THANOS HAS KILLED YOU.', 450, 250);

    textSize(32);
    text('(I am Groot. I am Groot. I am Groot.)', 450, 350);
    text('Translation: You should try harder next time.', 450, 385);
}

function drawDeathThanos()
{
    fill(255);
    textSize(60);
    textAlign(CENTER);
    textFont('Georgia');
    text('THANOS HAS KILLED YOU.', 450, 250);

    textSize(40);
    text('(He snapped.)', 450, 350);
}

function drawJulieWinGauntlet(x, y, sc) {
    push();
        translate(x, y);
        scale(sc);
        ellipse(315, 275, 130, 80);                     //gauntlet
        ellipse(315, 250, 130, 80);
        fill(252, 221, 16);
        noStroke();
        quad(250, 253, 240, 211, 385, 190, 380, 249);
        fill(244, 187, 35);
        ellipse(316, 265, 54, 38);
        fill(148, 194, 96);         //green stone
        ellipse(316, 265, 44, 28);
        push();
            translate(266, 230);    //red stone
            rotate(-PI/10);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(234, 53, 62);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(297, 228);   //purple stone
            rotate(-PI/25);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(200, 149, 208);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(328, 225);    //blue stone
            rotate(PI/30);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(125, 137, 213);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(359, 223);    //yellow stone
            rotate(PI/13);
            fill(244, 187, 35);
            ellipse(0, 0, 30, 40);
            fill(237, 213, 117);
            ellipse(0, 0, 20, 30);
        pop();
        push();
            translate(363, 255);    //light blue stone
            rotate(-PI/6);
            fill(244, 187, 35);
            ellipse(0, 0, 32, 21);
            fill(137, 195, 207);
            ellipse(0, 0, 25, 14);
        pop();
        fill(252, 221, 16);
        stroke(210, 185, 2);
        beginShape();               //first finger
            vertex(240, 211);
            bezierVertex(242, 166, 242, 143, 325, 125);
            bezierVertex(341, 195, 341, 190, 341, 198);
        endShape();
        beginShape();
            vertex(281, 204);       //second finger
            bezierVertex(271, 173, 271, 139, 279, 135);
            bezierVertex(279, 135, 289, 131, 300, 129);
            bezierVertex(300, 129, 308, 143, 312, 200);
        endShape();
        beginShape();
            vertex(301, 131);       //third finger
            bezierVertex(301, 126, 307, 124, 307, 124);
            bezierVertex(307, 124, 318, 120, 329, 124);
            bezierVertex(329, 124, 339, 162, 341, 195);
        endShape();
        beginShape();               //fourth finger
            vertex(340, 198);
            bezierVertex(330, 126, 327, 125, 336, 123);
            bezierVertex(336, 123, 341, 120, 358, 122);
            bezierVertex(364, 125, 362, 127, 372, 192);
        endShape();
        beginShape();
            vertex(368, 165);       //thumb
            bezierVertex(385, 160, 388, 173, 388, 173);
            bezierVertex(388, 173, 394, 210, 394, 210);
            bezierVertex(394, 210, 396, 236, 380, 249);
        endShape();
    pop();
}

function windowResized() {
  centerCanvas();
}

function Particle(x, y, theta, r, g, b) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelR = 5; //gravity
   this.velR = random(1, 5);

   // note this particle only can vary its blue color
   // - change this to include red and green
   this.locX = x + 1*cos(theta);
   this.locY = y + 1*sin(theta);
   this.r = 8.0;
   this.life = 255;

   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velR += this.accelR;
      this.locX = x + this.velR*cos(theta);
      this.locY = y + this.velR*sin(theta);
      this.life -= 255/25;
   };

   // function to draw a particle
   this.renderP = function()
   {
      noStroke();
      push();
         fill(r, g, b, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, numOfParticles)
{
   this.colorR = random(255);
   this.colorG = random(255);
   this.colorB = random(255);
  // the data - lots of particles
   this.particles = [];
   for (i=0; i<2*PI; i+=2*PI/numOfParticles) {
       this.particles.push(new Particle(sX, sY, i, this.colorR, this.colorG, this.colorB));
   }


   // function defining what to do each frame
   this.upParticledY = 0;
   this.upParticledYRand = random(10, 15);
   this.upParticle = true;
   this.run = function()
   {
      if (this.upParticle == true) {
          fill(this.colorR, this.colorG, this.colorB);
          ellipse(sX, height-this.upParticledY, 8, 16);
          if (this.upParticledY <= height-sY)
              this.upParticledY += this.upParticledYRand;
          else if (this.upParticledY > height-sY)
              this.upParticle = false;
      }
      else if (this.upParticle == false) {
          for (var i=0; i < this.particles.length; i++)
          {
             //update each particle per frame
             this.particles[i].updateP();
             this.particles[i].renderP();
          }
      }
   }
}
