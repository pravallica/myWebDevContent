function runExample5() {
    $("#search-for-places").mapsed({
    	// Adds the "+" button to the control bar at the top right of the map
		allowAdd: false,
		findGeoOnLoad: true,
		showOnLoad:
		[
		    // City Varieties
		    // Random made up CUSTOM place
		    {
		      // flag that this place should have the tooltip shown when the map is first loaded
		      autoShow: true,
		      lat: 17.011748,
		      lng: 81.798835,
		      name: "Bootstrap Guru",
		      street: "Srinivasa Nagar"
		    }
		],
	});
}
$(document).ready(function() {
	runExample5();
});

	
