window.addEventListener('DOMContentLoaded', () => {
    const londonOutput = document.getElementById('output-london');
    const edinburghOutput = document.getElementById('output-edinburgh');

    const getSunriseSunset = (latitude, longitude, outputElement) => {
        const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const sunrise = data.results.sunrise;
                const sunset = data.results.sunset;

                outputElement.innerHTML = `<p>Sunrise: ${sunrise}, Sunset: ${sunset}</p>`;
            })
            .catch(error => {
                outputElement.innerHTML = '<p>An error occurred while fetching data from the API.</p>';
                console.error(error);
            });
    };

    if (londonOutput && edinburghOutput) {
        // Call the API for London
        getSunriseSunset(51.5074, -0.1278, londonOutput);

        // Call the API for Edinburgh
        getSunriseSunset(55.9533, -3.1883, edinburghOutput);
    } else {
        console.error('Output elements not found.');
    }
});
