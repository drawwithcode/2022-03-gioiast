let myImage1;
let myImage2;
let myImage3;
let myImage4;
let myImage5;
let mic;

function preload() {
	myImage1 = loadImage("./libraries/assets/dog.png");
	myImage2 = loadImage("./libraries/assets/mouth.png");
	myImage3 = loadImage("./libraries/assets/multiplemouth.png");
	myImage4 = loadImage("./libraries/assets/scream.png");
	myImage5 = loadImage("./libraries/assets/protest.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	

}

function draw() {
	
	var myText1 = "RAISE"
	var myText2 = "YOUR"
	var myText3 = "VOICE"
	var myText4= "Click to interact with your microphone."

	if (mic) {
		const micLevel = mic.getLevel();
		let vol = map(micLevel, 0, 1, 0, 1000);
		imageMode(CENTER);
		image(myImage4, 800, 600, myImage4.width / 10 + vol, myImage4.height / 10 + vol)
	    image(myImage1, 300, 300, myImage1.width / 10 + vol, myImage1.height / 10 + vol)
	    image(myImage2, 900, 200, myImage2.width / 10 + vol, myImage2.height / 10 + vol)
	    image(myImage3, mouseX, mouseY, myImage3.width / 8 + vol, myImage3.height / 8 + vol)
	    image(myImage5, 1000, 400, myImage5.width / 10 + vol, myImage5.height / 10 + vol)

		let myColor = map(micLevel, 0, 1, 0, 255);
		textFont("Lato");
	    textAlign(CENTER);
	    textSize(180);
	    fill(myColor);
	    noStroke();
	    text(myText1, windowWidth / 2 - 180, windowHeight / 2 - 150);
	    text(myText2, windowWidth / 2 + 180, windowHeight / 2 );
	    text(myText3, windowWidth / 2 - 80, windowHeight / 2 + 150);

	}

	    textFont("Lato");
		textAlign(CENTER);
	    textSize(24);
	    fill(255);
	    text(myText4, windowWidth / 2, windowHeight / 2 + 200);

    
}

function mousePressed() {
	userStartAudio();
	mic = new p5.AudioIn();
	  mic.start();
}