

const getWeather = () => {
    const city = document.getElementById('input-box').value;
    const APIkey = "584ab488127d19acf5485dba6de95d01"

    const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`

    fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data);
     

        const weatherResult =   document.getElementById("weather-result");

        const cityName = data.name;
        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const humidity = data.main.humidity;
         
        
        const country = data.sys.country;

        weatherResult.innerHTML = `
        <div class="weather-info">
            <h1>${cityName}, ${country}</h1>
            <h2>${temp}°C</h2>
            <h3>${weather}</h3>
            <h4>Humidity: ${humidity}%</h4>


           
        `

     

    })


}
  


