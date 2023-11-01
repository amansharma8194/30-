const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const inputEl = document.querySelector('.search-box');
const ulEl = document.querySelector('.suggestions');
fetch(endpoint)
    .then(dataStream => dataStream.json())
    .then(resp => cities.push(...resp));

function findCities(query){
    const regex = new RegExp(query, 'gi')
    return cities.filter(cityData => cityData.city.match(regex) || cityData.state.match(regex))
}
function searchCity(){
    const filteredCities = findCities(this.value)
    ulEl.innerHTML = filteredCities.map(cityData => {
        const regex = RegExp(this.value, 'gi');
        const cityName = cityData.city.replace(regex, `
            <span class='hl' >${this.value}</span>
        `)
        const stateName = cityData.state.replace(regex, `
            <span class='hl'>${this.value}</span>
        `)

        return (
            `<li>
                <span class='name'>${cityName}, ${stateName}</span>
                <span class='population'>${cityData.population}</span>
            </li>`
        )
}).join('');
}
inputEl.addEventListener('change', searchCity)
inputEl.addEventListener('keyup', searchCity)
