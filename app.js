const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => showCountries(data))
}
loadCountries();
const showCountries = (countries) => {
    const countryContainer = document.getElementById('countries');
    countries.forEach((country) => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadDetail('${country.name}')" >Country Details </button>`;
        countryContainer.appendChild(div);
    })
}
const loadDetail = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => showDetails(data[0]));
}

const showDetails = (country) => {
    const detailContainer = document.getElementById('detail');
    detailContainer.innerHTML = `<p>Name : ${country.name}</p>
                                 <p>Native Name : ${country.nativeName}</p>
                                 <p>Region : ${country.region}</p>
                                 <p>Population : ${country.population}</p>
                                 <img width="200px" src="${country.flag}">`;
    console.log(country);
}