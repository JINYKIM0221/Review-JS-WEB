const weather = document.querySelector("#weather span:first-child");//html에 id=weather 구역 첫번째 span에 넣음
const city = document.querySelector("#weather span:last-child");//html에 id=weather 구역 마지막 span에 넣음
const API_KEY = "cb4504d85bb4580da33c4b2c509b26f2";//웹사이트에서 고유 api키를 가져옴

function onGeoOk(position) {
  const lat = position.coords.latitude;//position.coords.latitude을 통해 위도를 가져옴
  const lon = position.coords.longitude;//position.coords.longitude을 통해 경도를 가져옴
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)//fetch함수로 url에서 날씨,지역 관련 정보를 다 가져온다
    .then((response) => response.json())//만약 respone됐다면 json()을 통해 정보를 데이터로 다 가져온다
    .then((data) => {
      city.innerText = data.name; //html city구역에 data중 name이라는 것을 다 가져옴
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;// html weather구역에 data.weather[0].main,data.main.temp가져옴
    });
}//성공했을 때 함수



function onGeoError() {
  alert("Can't find you. No weather for you.");
}//실패 했을 때 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//navigator.geolocation.getCurrentPosition을통해 현재 지역의 위치정보를 가져옴
//getCurrentPosition("성공했을 때 함수","실패 했을 때 함수")가 필요