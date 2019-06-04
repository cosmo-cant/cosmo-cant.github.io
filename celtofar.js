let input, button, greeting;
function setup() {
// create canvas
createCanvas(710, 400);
    background(255)

input = createInput();
input.position(20, 65);

button = createButton('convert');
button.position(input.x + input.width, 65);
button.mousePressed(greet);

greeting = createElement('h2', 'celsius to farenheit converter');
greeting.position(20, 5);

textAlign(CENTER);
textSize(50);
}
function greet() {
var f = convert(input.value())
background(255)

text(f,200,200)

}

    
    function convert(celsius){
    var farenheit = (celsius * 9/5) + 32
    return farenheit
    }