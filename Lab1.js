
function setup() {
	createCanvas(400, 400);
}

function draw() {
    background(0);


    //BACKGROUND

    strokeWeight(3);
    stroke(0);
    fill(239, 138, 54); //orange
        ellipse(50,100,200,150); // oval left top 

    fill(150,241,89); //green
        ellipse(250,60,100,150); // oval bottom left

    fill(250,0,250); //pink
        triangle(20, 0, 20, 100, 300, 0) // triangle on left side

    fill(0,0,250); //blue
        ellipse(50, 150, 200, 130);// oval on right side

    fill(150,241,89); //green
        ellipse(100,280,200,150); // oval bottom left

    fill(240,0,0); //red
        rect(0,0,45,400) // rectangle on left side

    fill(123,83,224); //purple
        ellipse(0, 10,90,90); //circles on the left side
    fill(255,246,129); // yellow
        ellipse(0, 100,90,90);
    fill(113,188,245); //light blue
        ellipse(0, 190,90,90);
    fill(239, 138, 54); //orange
        ellipse(0, 280,90,90);

    fill(237,122,159); //pinks
        triangle(45, 350, 45, 200, 130, 200) // triangle on left side

    fill(255,246,129); // yellow
        rect(270,0,200,100) // rectangle on right side

    fill(225,0,0); //red
        rect(270,100,200,100) // rectangle on right side

    fill(123,83,224); //purple
        ellipse(335, 230,200,130);// oval on right side

    fill(0,0,250); //blue
        triangle(30, 380, 401, 370, 400, 200) // triangle on right side

    fill(113,188,245); //light blue
        ellipse(200,380,600,150); // ground

    fill(237,122,159); //pink
        ellipse(380, 50,90,140);// circle on right side
    


    //PENGUIN

    fill(82, 93, 91); // grey
    stroke(0);
    strokeWeight(5);
        ellipse(250, 54, 20, 20) // right ear
        ellipse(150, 54, 20, 20) // left ear

    fill(82, 93, 91); // grey
        triangle(195, 38, 205, 38, 198, 20) // hair 1
        triangle(190, 38, 200, 38, 185, 25) // hair 2

    strokeWeight(5);
    push(); 
    translate(width / 2, height / 2);
    rotate(PI / 3.0);
    ellipse(20, -110, 40, 100); //right arm
    pop();

    strokeWeight(5);
    fill(82, 93, 91); // grey
        triangle(230, 300, 230, 260, 300, 300) // tail

    strokeWeight(5);
    fill(82, 93, 91); // grey
    push(); 
    translate(width / 2, height / 2);
    rotate(-PI / 3.0);
    ellipse(-20, -110, 40, 100); // left arm
    pop();

    strokeWeight(5);
    fill(176, 67, 45); //orange
        triangle(150, 325, 180, 325, 165, 295) // left feet
        triangle(220, 325, 250, 325, 235, 295) // right feet
   
    strokeWeight(5);
    fill(82, 93, 91); // grey
        rect(115,100,170,150) // grey rectangle body

    strokeWeight(2.5);
    fill(82, 93, 91); //grey
        ellipse(200.5, 100, 172, 130); //grey head

    strokeWeight(5);
    stroke(1);
    fill(82, 93, 91); //grey
        ellipse(200, 250, 170, 130); //grey bottom body



    //OVERLAP
    noStroke();
    fill(82, 93, 91); // grey
        ellipse(250, 54, 20, 20) // right ear
        ellipse(150, 54, 20, 20) // left ear

    fill(82, 93, 91); // grey
        triangle(195, 38, 205, 38, 198, 20) // hair 1
        triangle(190, 38, 200, 38, 185, 25) // hair 2

    push(); //right arm
    translate(width / 2, height / 2);
    rotate(PI / 3.0);
    ellipse(20, -110, 40, 100);
    pop();

    fill(82, 93, 91); // grey
        triangle(230, 300, 230, 260, 300, 300) // tail

    fill(82, 93, 91); // grey
    push(); // left arm
    translate(width / 2, height / 2);
    rotate(-PI / 3.0);
    ellipse(-20, -110, 40, 100);
    pop();   

    fill(82, 93, 91); // grey
        rect(115,100,170,150) // grey rectangle body

    fill(176, 67, 45); //orange
        triangle(150, 325, 180, 325, 165, 295) // left feet
        triangle(220, 325, 250, 325, 235, 295) // right feet


    //FACE

    fill(82, 93, 91); //grey
        ellipse(200, 250, 170, 130); //grey bottom body

    noStroke();
    fill(255); //white
        ellipse(200, 120, 155, 80); // white head
        ellipse(165, 105, 95, 85); // white left eye
        ellipse(235, 105, 95, 85); // white right eye

    noFill();
        ellipse(200, 100, 170, 130); // head outline

    fill(255); //white
        ellipse(200, 220, 160, 170); // white body

    fill(238, 214, 227); // pink
        ellipse(250, 115, 25, 15); // right cheek
        ellipse(150, 115, 25, 15); // left cheek

    fill(176, 67, 45); //orange
        triangle(190, 115, 210, 115, 200, 130) // nose

    stroke(0);
    strokeWeight(4);
    noFill();
    arc(228, 105, 35, 35, PI + QUARTER_PI, PI + QUARTER_PI + QUARTER_PI + QUARTER_PI); //right eye
    arc(172, 105, 35, 35, PI + QUARTER_PI, PI + QUARTER_PI + QUARTER_PI + QUARTER_PI); //left eye




}