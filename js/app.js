(function() {
	const canvas = document.getElementsByTagName("canvas")[0];
	canvas.width = window.innerWidth - 100;
	canvas.height = window.innerHeight - 100;
	let context = canvas.getContext("2d");

	// Head
	drawPolygon(400, 0, 100, 100, 0, "olive");
	// Eye Left
	drawPolygon(410, 10, 15, 15, 0, "white");
	// Pupil Left
	drawPolygon(413, 13, 8, 8, 0, "black");
	// Eye Right
	drawPolygon(475, 10, 15, 15, 0, "white");
	// Pupil Right
	drawPolygon(478, 13, 8, 8, 0, "black");
	// Mouth
	drawPolygon(420, 60, 60, 20, 0, "black");

	// Neck
	drawPolygon(420, 100, 60, 30, 0, "brown");
	// Chest
	drawPolygon(340, 130, 220, 130, 0, "teal");
	// Stomach
	drawPolygon(380, 260, 140, 80, 0, "green");
	// Waist
	context.fillStyle = "green";
	context.moveTo(350, 340);
	context.lineTo(350, 400);
	context.lineTo(440, 420);
	context.lineTo(470, 420);
	context.lineTo(550, 400);
	context.lineTo(550, 340);
	context.fill();

	// Leg Left
	drawPolygon(440, 290, 90, 180, 15, "orange");
	// Leg right
	drawPolygon(340, 525, 90, 180, 345, "orange");
	// Foot Left
	drawPolygon(304, 560, 95, 50, 0, "brown");
	// Foot Right
	drawPolygon(503, 560, 95, 50, 0, "brown");

	// Left Shoulder
	drawPolygon(280, 130, 60, 45, 0, "brown");

	// Left Arm
	drawPolygon(280, 175, 50, 110, 0, "purple");

	// Left Hand
	drawPolygon(180, 365, 20, 50, 340, "olive");

	// Left Thumb
	drawPolygon(50, 410, 15, 30, 320, "olive");


	// Right Shoulder
	drawPolygon(560, 130, 60, 45, 0, "brown");

	// Right Arm
	drawPolygon(570, 175, 50, 110, 0, "purple");

	// Right Hand
	drawPolygon(640, 110, 20, 50, 15, "olive");

	// Right Thumb
	drawPolygon(640, -120, 15, 30, 35, "olive");



	function drawPolygon(xStart, yStart, xLength, yLength, rotation, colour) {
		context.save();

		context.fillStyle = colour;

		if (rotation) {
			context.rotate(Math.PI / 180 * rotation);
		}

		context.fillRect(xStart, yStart, xLength, yLength);

		context.restore();
	}
}());