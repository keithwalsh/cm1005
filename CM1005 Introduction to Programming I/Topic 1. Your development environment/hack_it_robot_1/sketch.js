// setup() is a p5.js function that runs once when the program starts
function setup()
{
	// createCanvas(width, height) creates a drawing area of 500x500 pixels
	createCanvas(500, 500);
}

// draw() is a p5.js function that runs continuously in a loop (about 60 times per second)
function draw()
{
	// strokeWeight(weight) sets the thickness of lines/borders to 6 pixels
	strokeWeight(6);

	// --- ROBOT'S HEAD ---
	// fill(grayscale) sets the fill color to light gray (200 out of 255)
	fill(200);
	// rect(x, y, width, height, cornerRadius) draws a rectangle
	// Starting at position (100, 100), 300 pixels wide and tall, with rounded corners of radius 20
	rect(100, 100, 300, 300, 20);


	// --- ROBOT'S ANTENNA ---
	// fill(red, green, blue) sets fill to yellow (full red + full green + no blue)
	fill(250, 250, 0);
	// ellipse(centerX, centerY, width, height) draws a circle/oval
	// Draws a 60x60 pixel circle centered at (250, 70) - the antenna ball
	ellipse(250, 70, 60, 60);

	// fill() sets the color to magenta/purple (red + blue, no green)
	fill(200, 0, 200);
	// Draws a rectangle for the antenna base connecting ball to head
	// Positioned at (210, 80), 80 pixels wide and 30 pixels tall
	rect(210, 80, 80, 30);

	// --- ROBOT'S EYES ---
	// fill(255) sets the fill color to white (maximum brightness)
	fill(255);
	// Draws the left eye - a white circle at position (175, 200), 80x80 pixels
	ellipse(175, 200, 80, 80);
	// point(x, y) draws a single point (the pupil) at the center of the left eye
	point(175, 200);
	// Draws the right eye - a white circle at position (325, 200), 80x80 pixels
	ellipse(325, 200, 80, 80);
	// Draws a point (pupil) at the center of the right eye
	point(325, 200);


	// --- ROBOT'S NOSE ---
	// fill(red, green, blue) sets the fill color to bright red
	fill(255, 0, 0);
	// triangle(x1, y1, x2, y2, x3, y3) draws a triangle using three vertex points
	// Creates a downward-pointing triangle: top point at (250, 220), bottom corners at (200, 300) and (300, 300)
	triangle(250, 220, 200, 300, 300, 300);

	// --- ROBOT'S EARS ---
	// Uses the previous fill color (red) - draws left ear rectangle at (80, 180), 30x100 pixels
	rect(80, 180, 30, 100);
	// Draws right ear rectangle at (390, 180), 30x100 pixels
	rect(390, 180, 30, 100);

	// --- ROBOT'S MOUTH ---
	// noFill() removes fill color so the shape will only have an outline (no solid color inside)
	noFill();
	// beginShape() starts recording vertices for a custom shape
	beginShape();
	// vertex(x, y) adds a point to the shape - these create a zigzag/wavy mouth pattern
	vertex(175, 340);  // First point - left side of mouth, up position
	vertex(200, 370);  // Second point - down position (creates first "tooth")
	vertex(225, 340);  // Third point - up position
	vertex(250, 370);  // Fourth point - down position (middle "tooth")
	vertex(275, 340);  // Fifth point - up position
	vertex(300, 370);  // Sixth point - down position
	vertex(325, 340);  // Seventh point - right side of mouth, up position
	// endShape() finishes the shape and draws the connected line segments
	endShape();
}
