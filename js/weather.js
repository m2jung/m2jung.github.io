const API_KEY = "079a10d62ac2923d1027c59c3df10f44";
function geoOk(position) { //위치 연결성공
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url) //url의 정보를 서버를 통해 가져온다
    .then ((Response)=> Response.json())
    .then ((data)=>{
        const weather= document.querySelector("#weather span:last-child");
        const city= document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main; 
        temp.innerText = `${data.main.temp} °C`;
    });
} 
function geoError() { //위치 연결실패
    alert("Unable to get weather information for your area :(");
} 
navigator.geolocation.getCurrentPosition(geoOk,geoError); //브라우저의 위치 좌표 표시 코드