// Geolocation script to find nearby tracks

function success(pos) {
    console.log(pos);
    let lat = pos.coords.latitude;
    let lng = pos.coords.longitude;
    const pleaseNoSteal = "QUl6YVN5QzN2U2NyVEJzSXhjUXVIWTduTjA1VmFBdVNtS2F4MTM4";

    const markup = `
    <p>Showing go-kart tracks near ${lat} ${lng}:</p>
    <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=go-kart%20tracks%20near%20${lat}%20${lng}&key=${atob(pleaseNoSteal)}"></iframe> 
    `;

    console.log(markup);

    document.getElementById("map").innerHTML = markup;
}


function error(err) {
    console.log(err);
}

const options = {
    enableHighAccuracy: true,
};

// Add API key to Google Maps iframe



// Button that gets location

var button = document.getElementById("getLocation");

button.addEventListener('click', event=>{
    if (!navigator.geolocation) {
        throw new Error("No geolocation :(");
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
})

