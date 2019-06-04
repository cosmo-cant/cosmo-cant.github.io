let balls = []; //makes an empty array to put objects in
let numBalls = 10;



function setup() {
  createCanvas(500, 500);
  frameRate(60)
  for (let i = 0; i < numBalls; i++) { //for the number of balls we want to make
    balls[i] = new bubble( //puts a new ball object in the array at the position we're in in the loop
      random(width),
      random(height)
    );
  }
}

function draw() {
  background(155);
  textSize(100)
  
  for (var i of balls) { //goes through each object in the array and runs its code
    
    let overlapping = false;
   
    for(var other of balls){
      
    if(i.intercects(other) && i != other){
      
      overlapping = true
    
    }
      
      
    }
    if (overlapping) {i.colorchange(255);}
    else{i.colorchange(0)}
    
    i.move()
    i.display();
    i.bounce();
  }
  
//}
//function mousePressed(){
  //for (let j = balls.length -1; j >= 0; j--) {
    
   // if (balls[j].clicked()){
   //   print( j)
   // balls.splice(j,1);
  // }
  //}
          
}
              