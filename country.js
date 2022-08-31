const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}
const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
countries.forEach(country =>{
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    console.log(country);
    countryDiv.innerHTML =`
<h3>name: ${country.name.common}</h3>
<p>capital: ${country.capital ? country.capital[0]:"no capital"}</p>
<button onclick="loadCountryDetail('${country.cca2}')">Deatailz</button>
    `
    countriesContainer.appendChild(countryDiv);
})
}
const loadCountryDetail = (code) =>{
const url =`https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res => res.json())
.then(data =>displayCountryDeatil(data[0]))

}
const displayCountryDeatil = (country) =>{
    console.log(country);
const countryDetail = document.getElementById('country-detail')
countryDetail.innerHTML = `
<h2>Deatailz: ${country.name.common}</h2>
<h2>capital: ${country.capital[0]}</h2>
<img src="${country.flags.png}">
`
}
loadCountries();

