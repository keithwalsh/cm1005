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

	/*
	*****************
	MOUNTAINS
	*****************
	*/
	// Back mountain
	fill(130, 200, 150);
	triangle(210, 432, 486, 177.6, 690, 432);
	// Back mountain - snow cap with zig-zag edge
	fill(255);
	beginShape();
	vertex(486, 177.6);   // peak of mountain
	vertex(434.4, 225.6);   // left side down
	vertex(456, 213.6);   // zig up
	vertex(464.4, 231.6);   // zag down
	vertex(474, 216);   // zig up
	vertex(492, 231.6);   // zag down
	vertex(501.6, 220.8);   // zig up
	vertex(529.2, 231.6);   // zag down
	vertex(529.2, 231.6);   // right side
	endShape(CLOSE);
	// Middle mountain
	fill(90, 180, 120);
	triangle(325, 432, 481, 225.6, 625, 432);
	// Middle mountain - snow cap with zig-zag edge
	fill(247);
	beginShape();
	vertex(481, 225.6);   // peak of mountain
	vertex(453.4, 261.6);   // left side down
	vertex(469, 253.2);   // zig up
	vertex(472.6, 261.6);   // zag down
	vertex(479.8, 253.2);   // zig up
	vertex(487, 261.6);   // zag down
	vertex(489.4, 249.6);   // zig up
	vertex(506.2, 261.6);   // zag down
	vertex(506.2, 261.6);   // right side
	endShape(CLOSE);
	// Front mountain
	fill(60, 160, 100);
	triangle(219, 432, 423, 273.6, 591, 432);
	// Front mountain - snow cap with zig-zag edge
	fill(230);
	beginShape();
	vertex(423, 273.6);   // peak of mountain
	vertex(380.4, 307.2);   // left side down
	vertex(408.6, 294);   // zig up
	vertex(411, 309.6);   // zag down
	vertex(423, 295.2);   // zig up
	vertex(427.8, 303.6);   // zag down
	vertex(433.8, 296.4);   // zig up
	vertex(450.6, 300);   // zag down
	vertex(450.6, 300);   // right side
	endShape(CLOSE);

	/*
	*****************
	TREE
	*****************
	*/
	// Trunk
	fill(140, 90, 40);
	beginShape();
	vertex(668, 350);
	bezierVertex(675, 375, 670, 415, 653, 432);
	vertex(710, 432);
	bezierVertex(690, 405, 688, 375, 701, 340);
	endShape(CLOSE);
	// Trunk highlight
	fill(168, 103, 39);
	beginShape();
	vertex(690, 370);
	bezierVertex(685, 375, 680, 415, 700, 425);
	vertex(710, 432);
	bezierVertex(690, 405, 693, 382, 693.5, 369);
	endShape(CLOSE);
	// Branches
	fill(140, 90, 40);
	push(); translate(650, 340);
	rotate(radians(-60));
	rect(0, 0, 12, 35, 2);
	pop();
	push(); translate(710, 330);
	rotate(radians(60));
	rect(0, 0, 12, 35, 2);
	pop();
	push(); translate(681, 320);
	rotate(radians(10));
	rect(0, 0, 12, 35, 2);
	pop();
	// Tree leaves
	fill(25, 138, 70);
	ellipse(608, 305, 54, 50);
	ellipse(640, 316, 63, 50);
	ellipse(680, 314, 41, 36);
	ellipse(719, 318, 63, 50);
	ellipse(757, 305, 54, 50);
	fill(29, 165, 74);
	ellipse(610, 299, 41, 40);
	ellipse(640, 307, 50, 50);
	ellipse(680, 307, 41, 36);
	ellipse(719, 310, 54, 50);
	ellipse(757, 301, 45, 42);
	ellipse(626, 271, 50, 45);
	ellipse(741, 271, 50, 45);
	fill(78, 182, 72);
	ellipse(635, 270, 45, 43);
	ellipse(624, 295, 40, 30);
	ellipse(734, 270, 45, 43);
	ellipse(745, 295, 40, 30);
	ellipse(653, 245, 45, 43);
	ellipse(714, 245, 45, 43);
	fill(121, 195, 79);
	ellipse(671, 245, 50, 47);
	ellipse(698, 245, 50, 47);
	ellipse(685, 233, 50, 47);
	fill(78, 182, 72);
	ellipse(689, 253, 50, 45);
	fill(121, 195, 79);
	ellipse(648, 278, 50, 47);
	ellipse(680, 272, 63, 60);
	ellipse(715, 278, 50, 47);
	fill(78, 182, 72);
	ellipse(638, 305, 32, 24);
	ellipse(662, 293, 40, 30);
	ellipse(689, 294, 45, 36);
	ellipse(716, 302, 45, 36);


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
