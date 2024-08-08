// Geolocation script to find nearby tracks

function success(pos) {

    // Get user's latitude & longitude

    console.log(pos);
    let lat = pos.coords.latitude;
    let lng = pos.coords.longitude;
    let loc = "";
    const pleaseNoSteal = "QUl6YVN5QzN2U2NyVEJzSXhjUXVIWTduTjA1VmFBdVNtS2F4MTM4";


    // Reverse Geocode to get City

    const reverseGeocode = `
    https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${atob(pleaseNoSteal)}
    `;
    fetch(reverseGeocode)
    .then(response => response.json() )
    .then(data => {
        let loc = data.plus_code.compound_code;
        console.log(loc);

        // Find nearby kart tracks in City

        const map = `
        <p>Showing go-kart tracks near ${lat} ${lng} (${loc}):</p>
        <iframe width="100%" height="720" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=go-kart%20tracks%20near%20${loc}&key=${atob(pleaseNoSteal)}"></iframe> 
        `;

        console.log(map);

        document.getElementById("map").innerHTML = map;
    })
    .catch(err => {
        console.warn(err.message);
        document.getElementById("map").innerHTML = error;
    });
}


function error(err) {
    const denied = `
    <p class="text-danger">Please allow me to see your location to use this feature! :(</p>
    `;

    document.getElementById("map").innerHTML = denied;
    console.log(err);
}

const options = {
    enableHighAccuracy: true,
    timeout: 10000
};


// Button that gets location

var button = document.getElementById("getLocation");

button.addEventListener('click', event=>{
    const loading = `
    <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    `;
    const error = `<p class="text-danger">Error, please try again... :(</p>`;
    document.getElementById("map").innerHTML = loading;


    if (!navigator.geolocation) {
        document.getElementById("map").innerHTML = error;
        throw new Error("No geolocation :(");
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
})

