(function(window, document) {
	var getCoords = document.getElementById('getCoords');
	var showCoords = document.getElementById('showCoords');
	function getLocation() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, error);
		}else {
			showCoords.innerHTML = 'Geolocation is not supported by your browser.';
		}
	}
	function showPosition(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var altitude = position.coords.altitude;
		if(altitude == "") {
			altitude = "Latitude not available";
		}
		showCoords.innerHTML = 'Latitude ' + latitude + '<br/>Longitude: ' + longitude + '<br/> Altitude: ' + altitude;
	}
	function error(e) {
		showCoords.innerHTML = 'Error: ' + e.message;
	}
	addEventListener('click', getLocation);
})(window, document);