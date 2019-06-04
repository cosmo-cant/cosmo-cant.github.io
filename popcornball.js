class bubble {
  constructor(x, y, r, c) { // we could add radius or r to the constructor
    this.x = x;
    this.y = y;
    //this.r = r;
    this.c = ([random(0, 255), random(0, 255), random(0, 255)])
    this.xspeed = random(2, 4);
    this.yspeed = -3;
    this.r = random(50,150);

  }
  move() {
    this.x += this.xspeed
    this.y += this.yspeed
  }
  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = (this.yspeed * -1) + random(-1, 1)

      this.xspeed += random(-0.01, 0.01)
    }
    
    }
  
  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.r, this.r);
  }

  intercects(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    if (d < (this.r + other.r)/2) {
      return true
    }else{
      return false
      }
    
  }
  colorchange(color){
  this.c = color
  } 
  
     
    
   //clicked(){
    //let d = dist(mouseX, mouseY, this.x, this.y)
    //if(d < this.r){
     //return(true)
      //this.c = 0
      
   // }
    //else{return false}
      
    
  
  
}//}