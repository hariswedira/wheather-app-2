const key = 'E26dwgLvGt0nmZnpoBAUAYOd6qpEahAA';

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// getCity('jakarta').then(data => console.log(data)).catch(err => console.log(err));
// getWeather('208971').then(data => console.log(data)).catch(err => console.log(err));

// getCity('jakarta')
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(data => console.log(data))
//     .catch(err => console.log(err));