window.addEventListener("load", function() {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText);
            const iconCode = data.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/w/10d.png"
            document.getElementById("icon").setAttribute("src", iconUrl);
            document.getElementById("temp").innerHTML = data.main.temp + " °C";
            document.getElementById("pressure").innerHTML = data.main.pressure + " hPa";
            document.getElementById("description").innerHTML = data.weather[0].description;
            document.getElementById("humidity").innerHTML = data.main.humidity + " %";
            document.getElementById("wind-speed").innerHTML = data.wind.speed + " m/s";
            document.getElementById("wind-deg").innerHTML = data.wind.deg + " °";
        } else {
            console.log("Error: " + request.statusText);
        }
    };

    request.onerror = function() {
        console.log("Error: Unable to connect to server");
    };

    request.send();
})