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
	drawPolygon(420, 60, 60, 20, "black");

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