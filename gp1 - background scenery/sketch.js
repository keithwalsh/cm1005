function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky

	// Cloud shadow
	fill(180, 200, 230);
	ellipse(170, 169, 55, 45);
	ellipse(205, 174, 70, 50);
	ellipse(240, 169, 55, 45);
	
	// Cloud main body
	fill(255);
	ellipse(160, 160, 55, 50);
	ellipse(200, 165, 70, 55);
	ellipse(240, 160, 55, 50);
	ellipse(175, 145, 50, 45);
	ellipse(225, 145, 50, 45);
	ellipse(200, 135, 55, 50);

	//2. a mountain in the distance

	// Back mountain
	fill(130, 200, 150);
	triangle(250, 432, 480, 220, 650, 432);
	// Middle mountain
	fill(90, 180, 120);
	triangle(350, 432, 480, 260, 600, 432);
	// Front mountain
	fill(60, 160, 100);
	triangle(250, 432, 420, 300, 560, 432);

	//3. a tree
	
	// Trunk
	fill(90, 70, 30);
	quad(912, 320, 935, 320, 930, 432, 907, 432);
	fill(110, 90, 35);
	quad(929, 320, 948, 320, 952, 432, 922, 432);
	
	// Tree leaves
	fill(0, 140, 40);
	ellipse(900, 310, 70, 60);
	ellipse(960, 310, 70, 60);
	fill(30, 170, 50);
	ellipse(895, 300, 65, 55);
	ellipse(963, 300, 70, 55);
	fill(30, 170, 50);
	ellipse(895, 300, 65, 55);
	fill(0, 140, 40);
	ellipse(930, 275, 83, 62);
	fill(30, 170, 50);
	ellipse(930, 260, 85, 70);
	fill(0, 140, 40);
	ellipse(930, 235, 65, 55);
	fill(30, 170, 50);
	ellipse(930, 225, 65, 55);

	//4. a canyon

	// Canyon
	fill(100, 155, 255);
	rect(70, 432, 70, 144);


	//5. a collectable token - eg. a jewel, fruit, coins

	// Bone collectable
	fill(250, 245, 230);
	
	// Bone start
	ellipse(394, 397, 12, 9);
	ellipse(394, 403, 12, 9);
	
	// Bone end
	ellipse(420, 397, 12, 9);
	ellipse(420, 403, 12, 9);
	
	// Bone middle
	fill(255, 250, 240);
	rect(396, 398, 28, 5);
}
