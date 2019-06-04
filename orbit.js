var X = 0;
var Y = 0;
var XSpeed = 0;
var YSpeed = 0;
var Xaccel = 0.01;
var Yaccel = 0.01;



function setup() {
  // create canvas
  createCanvas(400, 400);
frameRate(60);

}


function draw() {
  background(255);
    fill(255);
    rect((width/4),(height/4),(width/2),(height/2));
    fill(120,255,120);
    strokeWeight(4);
    ellipse(X,Y,30,30);
    X = X + XSpeed
    if(X > width){XSpeed=-1}
    if(X < 0){XSpeed=1}
    XSpeed = XSpeed + Xaccel
    if( X > ((width/2))){Xaccel = -0.1}
    if( X < ((width/2))){Xaccel = 0.1}
    Y = Y + YSpeed
    if(Y > height){YSpeed=-1}
    if(Y < 0){YSpeed=1}
    if( Y > ((height/2))){Yaccel = -0.1}
    if( Y < ((height/2))){Yaccel = 0.1}
    YSpeed = YSpeed + Yaccel
    //print(Xspeed);
}
