var today = new Date();
var x = today.getHours();
var y = today.getMinutes();
var noon = " AM";
	x = hourTime(x);
	y = minuteTime(y);

function hourTime(y) { // change to military time
	if (y > 12) {y = y-12} {
		noon = " PM";
		return y;
		console.log(noon);
	}  
}	

function minuteTime(b) {
    if (b < 10) {b = "0" + b};  // add zero in front of numbers < 10
    return b;
}


function dateTime() {
	var textEl = document.getElementById("txt-time");
    textEl.setAttribute("value" , x + ":" + y + noon);
}