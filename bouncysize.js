let y= 0, yspeed= 0,yaccel= 0.098/30;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
    for(var i = 0; i <= width; i+= 25){
       
    ellipse(i,y,50*yspeed,50*yspeed);
        y += yspeed
        yspeed += yaccel
        if( y > height-5){yspeed = yspeed *-0.9}
        if( y < -10){yspeed = yspeed *-0.9}
        fill(Math.abs(100*yspeed))
        
    }
}
function mousePressed(){y = 0}