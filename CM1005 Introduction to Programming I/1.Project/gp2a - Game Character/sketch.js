var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;

	// Ears
	fill(120, 80, 40);
	push();
	translate(gameChar_x + 8.5, gameChar_y - 41.5);
	rotate(radians(-36));
	ellipse(0, 0, 5, 11);
	pop();
	push();
	translate(gameChar_x - 8, gameChar_y - 41.5);
	rotate(radians(36));
	ellipse(0, 0, 5, 11);
	pop();
    // Back Legs
	fill(140, 90, 40);
	push();
	translate(gameChar_x + 4, gameChar_y - 6);
	rotate(radians(-30));
	rect(0, 0, 5, 11, 2);
	pop();
	push();
	translate(gameChar_x - 8, gameChar_y - 8.5);
	rotate(radians(30));
	rect(0, 0, 5, 11, 2);
	pop();
	// Tail
	stroke(120, 80, 40);
	strokeWeight(3);
	noFill();
	bezier(
		gameChar_x + 0, gameChar_y - 9,
		gameChar_x - 14, gameChar_y - 6,
		gameChar_x - 19, gameChar_y - 21,
		gameChar_x - 16, gameChar_y - 23
	);
	noStroke();
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x - 0, gameChar_y - 16, 26, 30);
	strokeWeight(1);
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x + 0, gameChar_y - 38, 17, 18);
	// Front Legs
	fill(180, 130, 70);
	stroke(0);
	strokeWeight(0.6);
	rect(gameChar_x - 9, gameChar_y - 15, 5, 18, 5);
	rect(gameChar_x + 4, gameChar_y - 15, 5, 18, 2);
	noStroke();
	strokeWeight(1);
	fill(180, 130, 70)
	push();
	translate(gameChar_x + 2, gameChar_y - 18);
	rotate(radians(-25));
	rect(0, 0, 5, 11, 2);
	pop();
	push();
	translate(gameChar_x - 4, gameChar_y - 20);
	rotate(radians(45));
	rect(0, 0, 5, 11, 2);
	pop();
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x + 0, gameChar_y - 35, 11, 9);
	// Tongue
	fill(255, 100, 100);
	push();
	translate(gameChar_x - 0.5, gameChar_y - 32);
	rotate(radians(30));
	ellipse(0, 0, 1.5, 2);
	pop();
	// Mouth
	stroke(80, 50, 30);
	noFill();
	line(gameChar_x + 0, gameChar_y - 34.5, gameChar_x + 0, gameChar_y - 34);
	arc(gameChar_x + 0, gameChar_y - 34, 5, 2, 0, PI);
	noStroke();
	// Nose
	fill(0);
	ellipse(gameChar_x + 0, gameChar_y - 36, 3.5, 3);
	// Eye
	fill(0);
	ellipse(gameChar_x + 3.5, gameChar_y - 40.5, 3, 3);
	ellipse(gameChar_x - 3.5, gameChar_y - 40.5, 3, 3);
	fill(250, 213, 184);
	ellipse(gameChar_x + 3.9, gameChar_y - 40.75, 0.9, 0.9);
	ellipse(gameChar_x - 3, gameChar_y - 40.75, 0.9, 0.9);
	
	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	
	// Ears (perked up for jump)
	fill(120, 80, 40);
	ellipse(gameChar_x + 18.5, gameChar_y - 51, 6, 12);
	ellipse(gameChar_x + 1.5, gameChar_y - 51, 6, 12);
	// Back Legs (spread outward diagonally)
	fill(140, 90, 40);
	push();
	translate(gameChar_x - 16, gameChar_y - 21);
	rotate(radians(-35));
	rect(0, 0, 5, 11, 2);
	pop();
	push();
	translate(gameChar_x + 9, gameChar_y - 23);
	rotate(radians(35));
	rect(0, 0, 5, 11, 2);
	pop();
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x - 0, gameChar_y - 28, 38, 20);
	// Tail
	fill(120, 80, 40);
	ellipse(gameChar_x - 18, gameChar_y - 38, 6, 14);
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x + 10, gameChar_y - 42, 17, 17);
	// Front Legs
	fill(180, 130, 70);
	push();
	translate(gameChar_x - 10, gameChar_y - 19);
	rotate(radians(-30));
	rect(0, 0, 5, 11, 2);
	pop();
	push();
	translate(gameChar_x + 11, gameChar_y - 23);
	rotate(radians(30));
	rect(0, 0, 5, 11, 2);
	pop();
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x + 10.5, gameChar_y - 39, 9, 7);
	// Nose
	fill(0);
	ellipse(gameChar_x + 10.5, gameChar_y - 39, 3.5, 3);
	// line between nose and mouth
	stroke(80, 50, 30);
	line(gameChar_x + 10.5, gameChar_y - 37.5, gameChar_x + 10.5, gameChar_y - 35.5);
	// Mouth
	stroke(80, 50, 30);
	noFill();
	arc(gameChar_x + 10.5, gameChar_y - 37.5, 5, 4, 0, PI);
	noStroke();
	// Eye
	fill(0);
	ellipse(gameChar_x + 14, gameChar_y - 43.5, 3, 3);
	ellipse(gameChar_x + 7, gameChar_y - 43.5, 3, 3);


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;

	// Left Ear
	fill(120, 80, 40);
	ellipse(gameChar_x - 17, gameChar_y - 36, 6, 11);
	// Back Legs
	fill(140, 90, 40);
	push();
	translate(gameChar_x + 10, gameChar_y - 8);
	rotate(radians(-18));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x - 10, gameChar_y - 8);
	rotate(radians(-18));
	rect(0, 0, 5, 12, 2);
	pop();
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x - 0, gameChar_y - 15, 38, 20);
	// Tail
	fill(120, 80, 40);
	ellipse(gameChar_x + 18, gameChar_y - 22, 6, 10);
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x - 10, gameChar_y - 28, 17, 17);
	// Front Legs
	fill(180, 130, 70);
	push();
	translate(gameChar_x + 9, gameChar_y - 9);
	rotate(radians(30));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x - 12, gameChar_y - 9);
	rotate(radians(30));
	rect(0, 0, 5, 12, 2);
	pop();
	// Right Ear
	fill(120, 80, 40);
	ellipse(gameChar_x - 3, gameChar_y - 36, 6, 11);
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x - 16, gameChar_y - 26, 9, 7);
	// Nose
	fill(0);
	ellipse(gameChar_x - 19, gameChar_y - 26, 3.5, 3);
	// Eye
	fill(0);
	ellipse(gameChar_x - 12, gameChar_y - 31, 3, 3);


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;

	// Right Ear
	fill(120, 80, 40);
	ellipse(gameChar_x + 17, gameChar_y - 36, 6, 11);
	// Back Legs
	fill(140, 90, 40);
	push();
	translate(gameChar_x - 14, gameChar_y - 9);
	rotate(radians(18));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x + 6, gameChar_y - 9);
	rotate(radians(18));
	rect(0, 0, 5, 12, 2);
	pop();
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x + 0, gameChar_y - 15, 38, 20);
	// Tail
	fill(120, 80, 40);
	ellipse(gameChar_x - 18, gameChar_y - 22, 6, 10);
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x + 10, gameChar_y - 28, 17, 17);
	// Front Legs
	fill(180, 130, 70);
	push();
	translate(gameChar_x - 12, gameChar_y - 7);
	rotate(radians(-30));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x + 8, gameChar_y - 7);
	rotate(radians(-30));
	rect(0, 0, 5, 12, 2);
	pop();
	// Left Ear
	fill(120, 80, 40);
	ellipse(gameChar_x + 3, gameChar_y - 36, 6, 11);
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x + 16, gameChar_y - 26, 9, 7);
	// Nose
	fill(0);
	ellipse(gameChar_x + 19, gameChar_y - 26, 3.5, 3);
	// Eye
	fill(0);
	ellipse(gameChar_x + 12, gameChar_y - 31, 3, 3);


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;

	// Right Ear
	fill(120, 80, 40);
	ellipse(gameChar_x + 17, gameChar_y - 50, 6, 12);
	// Back Legs
	fill(140, 90, 40);
	push();
	translate(gameChar_x - 14, gameChar_y - 22);
	rotate(radians(25));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x - 6, gameChar_y - 21);
	rotate(radians(35));
	rect(0, 0, 5, 12, 2);
	pop();
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x + 0, gameChar_y - 28, 38, 20);
	// Tail
	fill(120, 80, 40);
	push();
	translate(gameChar_x - 18, gameChar_y - 36);
	rotate(radians(-20));
	ellipse(0, 0, 6, 12);
	pop();
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x + 10, gameChar_y - 42, 17, 17);
	// Front Legs
	fill(180, 130, 70);
	push();
	translate(gameChar_x + 6, gameChar_y - 22);
	rotate(radians(-35));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x + 13, gameChar_y - 24);
	rotate(radians(-45));
	rect(0, 0, 5, 12, 2);
	pop();
	// Left Ear
	fill(120, 80, 40);
	ellipse(gameChar_x + 3, gameChar_y - 50, 6, 12);
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x + 16, gameChar_y - 40, 9, 7);
	// Nose
	fill(0);
	ellipse(gameChar_x + 19, gameChar_y - 40, 3.5, 3);
	// Eye
	fill(0);
	ellipse(gameChar_x + 12, gameChar_y - 45, 3, 3);


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;

	// Left Ear
	fill(120, 80, 40);
	ellipse(gameChar_x - 17, gameChar_y - 50, 6, 12);
	// Back Legs
	fill(140, 90, 40);
	push();
	translate(gameChar_x + 12, gameChar_y - 22);
	rotate(radians(-25));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x + 4, gameChar_y - 21);
	rotate(radians(-35));
	rect(0, 0, 5, 12, 2);
	pop();
	// Body
	fill(180, 130, 70);
	ellipse(gameChar_x + 0, gameChar_y - 28, 38, 20);
	// Tail
	fill(120, 80, 40);
	push();
	translate(gameChar_x + 18, gameChar_y - 36);
	rotate(radians(20));
	ellipse(0, 0, 6, 12);
	pop();
	// Head
	fill(180, 130, 70);
	ellipse(gameChar_x - 10, gameChar_y - 42, 17, 17);
	// Front Legs
	fill(180, 130, 70);
	push();
	translate(gameChar_x - 6, gameChar_y - 22);
	rotate(radians(35));
	rect(0, 0, 5, 12, 2);
	pop();
	push();
	translate(gameChar_x - 13, gameChar_y - 24);
	rotate(radians(45));
	rect(0, 0, 5, 12, 2);
	pop();
	// Right Ear
	fill(120, 80, 40);
	ellipse(gameChar_x - 3, gameChar_y - 50, 6, 12);
	// Snout
	fill(210, 170, 120);
	ellipse(gameChar_x - 16, gameChar_y - 40, 9, 7);
	// Nose
	fill(0);
	ellipse(gameChar_x - 19, gameChar_y - 40, 3.5, 3);
	// Eye
	fill(0);
	ellipse(gameChar_x - 12, gameChar_y - 45, 3, 3);

}
