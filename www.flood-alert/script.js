function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showAlert);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showAlert(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Sample function to simulate a flood alert check
    checkFloodAlert(latitude, longitude);
}

function checkFloodAlert(latitude, longitude) {
    // Placeholder for actual API call to a flood alert service
    const alertMessage = `No flood alert in your area at coordinates: 
                          Lat: ${latitude.toFixed(2)}, 
                          Lon: ${longitude.toFixed(2)}`;

    document.getElementById("alert-message").textContent = alertMessage;
async function checkFloodAlert(latitude, longitude) {
    const alertMessageElement = document.getElementById("alert-message");
    alertMessageElement.textContent = "Checking for flood alerts in your area...";

    try {
        // Replace this URL with your actual API endpoint
        const response = await fetch
        
        if (!response.ok) {
            throw new Error("Failed to fetch flood alert data");
        }

        const data = await response.json();
        
        // Process response to check if there’s a flood alert
        if (data.alert) {  // This key might differ based on API's response structure
            alertMessageElement.textContent = "Flood alert in your area! Stay safe!";
        } else {
            alertMessageElement.textContent = "No flood alerts for your area.";
        }
    } catch (error) {
        console.error("Error fetching flood alert data:", error);
        alertMessageElement.textContent = "Unable to check flood alerts at this time.";
    }
} fetch
    // .then(response => response.json())
    // .then(data => {
    //    if (data.alert) {
    //       document.getElementById("alert-message").textContent = "Flood alert in your area! Stay safe!";
    //    } else {
    //       document.getElementById("alert-message").textContent = "No flood alerts for your area.";
    //    }
    // })
    // .catch(error => {
    //    console.error("Error fetching flood alert data:", error);
    // });
}
