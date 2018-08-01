
    var text = document.getElementById("userInput");
	var manufacturer = [" Madz One", "Nimbus", "Coker ", "Kris Holm"];
	text.addEventListener("keydown", function(e) {
		if (e.keyCode === 13) {
		 showMessage(e); 
		}
	});

function showMessage(e){
		if( e.target.value <= 5 ){
		document.getElementById("demo").innerHTML = manufacturer[e.target.value];
		}
}

document.getElementById("myFavoriteUnicycle").addEventListener("click", alertFunction);
function alertFunction() {
	alert("Kris Holm");
}

function unicycleTire() {
	var time = new Date().getHours();
	if (time < 20) {
		document.getElementById("demo2").innerHTML = "Nimbus";
	} else if (time > 21) {
		document.getElementById("demo2").innerHTML = "Madz One";
	} else {
		document.getElementById("demo2").innerHTML = "Kris Holm";
	}
}
/*
 * declare map as a global variable
 */
var map;
/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function() {
	/*
	 * create map
	 */
	var map = new google.maps.Map(document.getElementById("map_div"), {
		center: new google.maps.LatLng(33.808678, -117.918921),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	/*
	 * create infowindow (which will be used by markers)
	 */
	var infoWindow = new google.maps.InfoWindow();
	/*
	 * marker creater function (acts as a closure for html parameter)
	 */
	function createMarker(options, html) {
		var marker = new google.maps.Marker(options);
		if (html) {
			google.maps.event.addListener(marker, "click", function() {
				infoWindow.setContent(html);
				infoWindow.open(options.map, this);
			});
		}
		return marker;
	}
	/*
	 * add markers to map
	 */
	var marker0 = createMarker({
		position: new google.maps.LatLng(33.808678, -117.918921),
		map: map,
		icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
	}, "<h1>Madz One</h1><p>This is home to Madz One Unicycles</p>");
	var marker1 = createMarker({
		position: new google.maps.LatLng(33.818038, -117.928492),
		map: map
	}, "<h1>Nimbus</h1><p>This is home to Nimbus Unicycles</p>");
	var marker2 = createMarker({
		position: new google.maps.LatLng(33.803333, -117.915278),
		map: map
	}, "<h1>Kris Holm</h1><p>This is home to Kris Holm Unicycles</p>");
});