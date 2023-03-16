const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".cities");

const apiKey = '4d8fb5b93d4af21d66a2948710284366'
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const value = input.value
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            const { main, name, sys, weather } = data
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`
            const li = document.createElement('city')
            li.innerHTML = `
            <li class="city">
            <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
            </h2>
            <span class="city-temp">${Math.round(main.temp)}<sup>°C</sup></span>
            <figure>
                <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
                <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
            </li>
        `
            list.appendChild(li)
        })
        .catch(function () {
            msg.textContent = 'Please search for a valid city'
        })
    msg.textContent = "";
    form.reset();
    input.focus();
})