function setup()
{
    var res1, res2;

    createCanvas(1000,600);
    background(255);
    noStroke();
    frameRate(4);

  /////SKY/////
  for (var py=2; py<410; py+=5)
  {
    for (var px=2; px<width; px+=8)
    {
      res1=impLine(0,410,600,410,px,py);
      d = distance(px,py,px,410);

      if (res1<0)
      {
        fill(255+random(-10,10)-d/2, 100+random(-50,50)+d/10, 100+random(-10,10)+d/5);
        ellipse(px+random(-2,2),py+random(-2,2),30,10);

      }
    }
  }

  /////building bottom lower level/////
  for (var py=200; py<410; py+=2)
  {
    for (var px=29; px<450; px+=2)
    {
      res1=impLine(0,352,600,352,px,py);

      if (res1>0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }

  /////building bottom/////
  for (var py=300; py<410; py+=2)
  {
    for (var px=2; px<375; px+=2)
    {
      res1=impLine(0,300,600,300,px,py);
      d = distance(px,py,px,410);

      if (res1>0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }

  /////building bottom higher level/////
  for (var py=200; py<410; py+=2)
  {
    for (var px=29; px<340; px+=2)
    {
      res1=impLine(0,267,600,267,px,py);
      d = distance(px,py,px,410);

      if (res1>0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }


  /////building tall tower/////
  for (var py=15; py<300; py+=2)
  {
    for (var px=135; px<190; px+=2)
    {
      res1 = impLine(33,height,160,15,px,py);
      res2 = impLine(322,height,160,15,px,py);
      d = distance(px,py,px,410);

      if (res1>0 && res2<0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }

  /////building short tower right/////
  for (var py=15; py<350; py+=2)
  {
    for (var px=200; px<254; px+=2)
    {
      res1 = impLine(30,height,234,208,px,py);
      res2 = impLine(430,height,234,208,px,py);
      d = distance(px,py,px,410);

      if (res1>0 && res2<0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }

  /////building short tower left/////
  for (var py=15; py<350; py+=2)
  {
    for (var px=50; px<110; px+=2)
    {
      res1 = impLine(0,481,100,164,px,py);
      res2 = impLine(197,472,100,164,px,py);
      d = distance(px,py,px,410);

      if (res1>0 && res2<0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }

  /////small building 1 /////
  for (var py=300; py<height; py+=2)
  {
    for (var px=750; px<800; px+=2)
    {
      res1=impLine(0,410,600,410,px,py);
      d = distance(px,py,px,410);

      if (res1<0)
      {
        fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
        ellipse(px+random(-12,12),py+random(-2,2),10,10);
      }
    }
  }

  /////small building 2 /////
    for (var py=200; py<height; py+=2)
    {
      for (var px=850; px<950; px+=2)
      {
        res1=impLine(0,410,600,410,px,py);
        d = distance(px,py,px,410);

        if (res1<0)
        {
          fill(49+random(-20,20), 20+random(-20,20), 25+random(-20,20));
          ellipse(px+random(-12,12),py+random(-2,2),10,10);
        }
      }
    }

}

function draw()
{

  /////SKY reflection/////
  for (var py=415; py<height+10; py+=5)
  {
    for (var px=2; px<width; px+=8)
    {
      res1=impLine(0,410,600,410,px,py);
      d = distance(px,py,px,410);

      if (res1>0)
      {
        fill(255+random(-10,10)-d/2, 100+random(-50,50)+d/10, 0+random(-10,10)+d/5);
        ellipse(px+random(-2,2),py+random(-2,2),30,10);

      }
    }
  }

   /////water/////
   for (var py=580; py<height+5; py+=15)
   {
     for (var px=0; px<width; px+=15)
     {
       res1=impLine(0,530,600,530,px,py);
       d = distance(px,py,px,410);

       if (res1>0)
       {
         fill(82+random(-40,40), 115+random(-40,40), 168+random(-40,40));
         ellipse(px+random(-80,80),py+random(-80,80),50,10);
       }
     }
   }

   /////building relfection of tower blue/////
    for (var py=410; py<height+5; py+=8)
    {
      for (var px=145; px<205; px+=8)
      {
        res1=impLine(0,410,600,410,px,py);
        d = distance(px,py,px,410);

        if (res1>0)
        {
          fill(82+random(-40,40), 115+random(-40,40), 168+random(-40,40));
          ellipse(px+random(-22,22),py+random(-2,2),30,10);
        }
      }
    }

   /////building relfection of tower/////
   for (var py=395; py<height+5; py+=8)
   {
     for (var px=150; px<200; px+=8)
     {
       res1=impLine(0,410,600,410,px,py);
       d = distance(px,py,px,410);

       if (res1>0)
       {
         fill(70+random(-10,10), 40+random(-10,10), 45+random(-10,10));
         ellipse(px+random(-12,12),py+random(-2,2),30,10);
       }
     }
  }

     /////building relfection /////
     for (var py=410; py<430; py+=12)
     {
       for (var px=2; px<450; px+=5)
       {
         res1=impLine(0,410,600,410,px,py);
         d = distance(px,py,px,410);

         if (res1>0)
         {
           fill(70+random(-10,10), 40+random(-10,10), 45+random(-10,10));
           ellipse(px+random(-22,22),py+random(-12,12),30,10);
         }
       }
     }

    /////small building 1 reflection /////
    for (var py=410; py<430; py+=12)
    {
      for (var px=750; px<800; px+=5)
      {
        res1=impLine(0,410,600,410,px,py);

        if (res1>0)
        {
          fill(70+random(-10,10), 40+random(-10,10), 45+random(-10,10));
          ellipse(px+random(-22,22),py+random(-12,12),30,10);
        }
      }
    }

   /////small building 2 reflection /////
   for (var py=410; py<480; py+=12)
   {
     for (var px=850; px<950; px+=5)
     {
       res1=impLine(0,410,600,410,px,py);

       if (res1>0)
       {
         fill(70+random(-10,10), 40+random(-10,10), 45+random(-10,10));
         ellipse(px+random(-22,22),py+random(-12,12),30,10);
       }
     }
   }

}


function impCircle(px,cx,py,cy,rad) // point x, circlex, point y, circle y, radius
{
  return ((px-cx)*(px-cx)+(py-cy)*(py-cy)-rad*rrad);
}

function impLine(x0,y0,x1,y1,px,py)
{
  return ((y0-y1)*px + (x1-x0)*py + x0*y1 - x1*y0);
}

function distance(x0,y0,x1,y1)
{
  return sqrt((pow(x0-x1),2) + pow((y0-y1),2));
}
