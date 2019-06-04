let balls = []; //makes an empty array to put objects in
let numBalls = 100;

let gravity = 9.8 / 60

function setup() {
  createCanvas(500, 700);
  frameRate(60)
  for (let i = 0; i < numBalls; i++) { //for the number of balls we want to make
    balls[i] = new PopcornBall( //puts a new ball object in the array at the position we're in in the loop
      random(width),
      random(height)
    );
  }
}

function draw() {
  background(155);
  textSize(100)
  text( balls.length,100,100,)
  for (var i of balls) { //goes through each object in the array and runs its code
    i.display();
    i.bounce();
    i.move();
    for(var other of balls){
    if(i.intercects(other) && i != other){
    i.ballbounce()
      //print("hit")
      other.ballbounce()
    }
    }
  }
}
function mousePressed(){
  for (let j = balls.length -1; j >= 0; j--) {
    
    if (balls[j].clicked()){
      print( j)
    balls.splice(j,1);
    }
  }
          
}
              