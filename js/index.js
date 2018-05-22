$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#greenButton').click(switchGreen);

function switchGray() {
	console.log("gray")
  $('body').attr('id', 'grayButton');
}

function switchWhite() {
  $('body').attr('id', 'whiteButton');
}

function switchBlue() {
  $('body').attr('id', 'blueButton');
}

function switchGreen() {
  $('body').attr('id', 'greenButton');
}
