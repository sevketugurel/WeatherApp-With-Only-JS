const InputTextDOM = document.getElementById("InputText")
const btnDOM = document.querySelector(".btn")

btnDOM.addEventListener('click',() => {
    getData(InputTextDOM.value)
})

function getData(name){
    const API = "";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
    fetch(baseURL).then(res =>res.json())
        .then(data => {
            console.log(data)
            const {name,sys:{country},main:{temp,feels_like},weather:[{description}]} = data;

            const cityDOM = document.querySelector("#sehir")
            const sicaklikDOM = document.querySelector("#sicaklik")
            const havaDurumuDOM = document.querySelector("#havaDurumu")
            const hissedilenDOM = document.querySelector("#hissedilen")
            const weatherİconDOM = document.querySelector(".weather-icon")
            cityDOM.textContent = `${name},${country}`.toUpperCase();
            sicaklikDOM.textContent = `${temp}°C`;
            havaDurumuDOM.textContent = `${description}`.toUpperCase();
            hissedilenDOM.textContent = `${feels_like}°C`;

        })
        .catch(err => console.warn(err))
}
