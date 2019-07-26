const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const detail = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUi = (data) => {
    const {
        cityDet,
        weather
    } = data;

    detail.innerHTML = `
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);

    card.classList.remove('d-none');
};

const updateCity = async (city) => {
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);

    return {
        cityDet,
        weather
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err));
});