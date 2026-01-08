/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

	canyon = {x_pos: width - 200, y_pos: floorPos_y, width: 100};

	collectable = {x_pos: 794, y_pos: 397, size: 100};

	mountain = {x_pos: 400, y_pos: floorPos_y, size: 100};
	cloud = {x_pos: 200, y_pos: 150, size: 100};
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	/*
	*****************
	MOUNTAIN
	*****************
	*/
	// Back mountain
	fill(130, 200, 150);
	triangle(
		mountain.x_pos - mountain.size * 2, mountain.y_pos,
		mountain.x_pos + mountain.size * 0.3, mountain.y_pos - mountain.size * 2.12,
		mountain.x_pos + mountain.size * 2, mountain.y_pos
	);
	// Middle mountain
	fill(90, 180, 120);
	triangle(
		mountain.x_pos - mountain.size * 1, mountain.y_pos,
		mountain.x_pos + mountain.size * 0.3, mountain.y_pos - mountain.size * 1.82,
		mountain.x_pos + mountain.size * 1.5, mountain.y_pos
	);
	// Front mountain
	fill(60, 160, 100);
	triangle(
		mountain.x_pos - mountain.size * 2, mountain.y_pos,
		mountain.x_pos - mountain.size * 0.3, mountain.y_pos - mountain.size * 1.32,
		mountain.x_pos + mountain.size * 1.1, mountain.y_pos
	);

	/*
	*****************
	CLOUD
	*****************
	*/
	// Cloud shadow
	fill(180, 200, 230);
	ellipse(cloud.x_pos - cloud.size * 0.30, cloud.y_pos + cloud.size * 0.19, cloud.size * 0.55, cloud.size * 0.45);
	ellipse(cloud.x_pos + cloud.size * 0.05, cloud.y_pos + cloud.size * 0.24, cloud.size * 0.70, cloud.size * 0.50);
	ellipse(cloud.x_pos + cloud.size * 0.40, cloud.y_pos + cloud.size * 0.19, cloud.size * 0.55, cloud.size * 0.45);
	// Cloud main body
	fill(255);
	ellipse(cloud.x_pos - cloud.size * 0.40, cloud.y_pos + cloud.size * 0.10, cloud.size * 0.55, cloud.size * 0.50);
	ellipse(cloud.x_pos, cloud.y_pos + cloud.size * 0.15, cloud.size * 0.70, cloud.size * 0.55);
	ellipse(cloud.x_pos + cloud.size * 0.40, cloud.y_pos + cloud.size * 0.10, cloud.size * 0.55, cloud.size * 0.50);
	ellipse(cloud.x_pos - cloud.size * 0.25, cloud.y_pos - cloud.size * 0.05, cloud.size * 0.50, cloud.size * 0.45);
	ellipse(cloud.x_pos + cloud.size * 0.25, cloud.y_pos - cloud.size * 0.05, cloud.size * 0.50, cloud.size * 0.45);
	ellipse(cloud.x_pos, cloud.y_pos - cloud.size * 0.15, cloud.size * 0.55, cloud.size * 0.50);
	/*
	*****************
	TREE
	*****************
	*/
	// Trunk
	fill(90, 70, 30);
	quad(treePos_x, treePos_y, treePos_x + 23, treePos_y, treePos_x + 18, floorPos_y, treePos_x - 13, floorPos_y);
	fill(110, 90, 35);
	quad(treePos_x + 19, treePos_y, treePos_x + 38, treePos_y, treePos_x + 42, floorPos_y, treePos_x + 12, floorPos_y);
	// Tree leaves
	fill(0, 140, 40);
	ellipse(treePos_x - 10, treePos_y - 10, 70, 60);
	ellipse(treePos_x + 50, treePos_y - 10, 70, 60);
	fill(30, 170, 50);
	ellipse(treePos_x - 15, treePos_y - 20, 65, 55);
	ellipse(treePos_x + 53, treePos_y - 20, 70, 55);
	fill(30, 170, 50);
	ellipse(treePos_x - 15, treePos_y - 20, 65, 55);
	fill(0, 140, 40);
	ellipse(treePos_x + 18, treePos_y - 45, 83, 62);
	fill(30, 170, 50);
	ellipse(treePos_x + 18, treePos_y - 60, 85, 70);
	fill(0, 140, 40);
	ellipse(treePos_x + 18, treePos_y - 85, 65, 55);
	fill(30, 170, 50);
	ellipse(treePos_x + 18, treePos_y - 95, 65, 55);

	/*
	*****************
	CANYON
	*****************
	*/
	fill(100, 155, 255);
	rect(canyon.x_pos, canyon.y_pos, canyon.width, 144);


	/*
	*****************
	COLLECTABLE
	*****************
	*/
	// Bone collectable
	fill(250, 245, 230);
	// Bone start
	ellipse(collectable.x_pos, collectable.y_pos, collectable.size * 0.12, collectable.size * 0.09);
	ellipse(collectable.x_pos, collectable.y_pos + collectable.size * 0.06, collectable.size * 0.12, collectable.size * 0.09);
	// Bone end
	ellipse(collectable.x_pos + collectable.size * 0.26, collectable.y_pos, collectable.size * 0.12, collectable.size * 0.09);
	ellipse(collectable.x_pos + collectable.size * 0.26, collectable.y_pos + collectable.size * 0.06, collectable.size * 0.12, collectable.size * 0.09);
	// Bone middle
	fill(255, 250, 240);
	rect(collectable.x_pos + collectable.size * 0.02, collectable.y_pos + collectable.size * 0.02, collectable.size * 0.28, collectable.size * 0.05);

	/*
	*****************
	GAME CHARACTER
	*****************
	*/
	// Ears
	fill(120, 80, 40);
	ellipse(gameChar_x + 17, gameChar_y - 36, 6, 11);
	ellipse(gameChar_x + 3, gameChar_y - 36, 6, 11);
	// Back Legs
	fill(140, 90, 40);
	rect(gameChar_x - 14, gameChar_y - 8, 5, 11, 2);
	rect(gameChar_x + 5, gameChar_y - 8, 5, 11, 2);
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x - 0, gameChar_y - 15, 38, 20);
	// Tail
	fill(120, 80, 40);
	ellipse(gameChar_x - 18, gameChar_y - 22, 6, 10);
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x + 10, gameChar_y - 28, 17, 17);
	// Front Legs
	fill(180, 130, 70);
	rect(gameChar_x - 10, gameChar_y - 8, 5, 11, 2);
	rect(gameChar_x + 9, gameChar_y - 8, 5, 11, 2);
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x + 10.5, gameChar_y - 26, 9, 7);
	// Nose
	fill(0);
	ellipse(gameChar_x + 10.5, gameChar_y - 26, 3.5, 3);
	// Mouth
	stroke(80, 50, 30);
	noFill();
	line(gameChar_x + 10.5, gameChar_y - 24.5, gameChar_x + 10.5, gameChar_y - 24);
	arc(gameChar_x + 10.5, gameChar_y - 24, 4, 2, 0, PI);
	noStroke();
	// Eye
	fill(0);
	ellipse(gameChar_x + 14, gameChar_y - 30.5, 3, 3);
	ellipse(gameChar_x + 7, gameChar_y - 30.5, 3, 3);

}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
