function setup()
{
	//create a square canvas
	createCanvas(800, 800);
	//only draw once since it's a static image
	noLoop();
}

function draw()
{
	//De Stijl color palette
	let mondRed = color(220, 30, 30);
	let mondYellow = color(245, 210, 50);
	let mondBlue = color(30, 60, 160);
	let mondWhite = color(250, 245, 235);
	let mondBlack = color(15, 15, 15);
	
	//cream background
	background(mondWhite);
	
	//thick black stroke for grid lines
	strokeWeight(12);
	stroke(mondBlack);
	
	//large red rectangle - top left area
	fill(mondRed);
	rect(0, 0, 450, 350);
	
	//white rectangle - top right
	fill(mondWhite);
	rect(450, 0, 250, 200);
	
	//small yellow rectangle - top right corner
	fill(mondYellow);
	rect(700, 0, 100, 200);
	
	//white rectangle - middle right
	fill(mondWhite);
	rect(450, 200, 350, 150);
	
	//large white rectangle - middle area
	fill(mondWhite);
	rect(0, 350, 300, 300);
	
	//blue rectangle - bottom left
	fill(mondBlue);
	rect(0, 650, 300, 150);
	
	//white rectangle - center bottom
	fill(mondWhite);
	rect(300, 350, 350, 250);
	
	//yellow rectangle - right side
	fill(mondYellow);
	rect(650, 350, 150, 250);
	
	//white rectangle - bottom center
	fill(mondWhite);
	rect(300, 600, 200, 200);
	
	//small red rectangle - bottom right area
	fill(mondRed);
	rect(500, 600, 150, 100);
	
	//white rectangle - bottom right
	fill(mondWhite);
	rect(650, 600, 150, 100);
	
	//blue rectangle - bottom right corner
	fill(mondBlue);
	rect(650, 700, 150, 100);
	
	//small white rectangle
	fill(mondWhite);
	rect(500, 700, 150, 100);
}
