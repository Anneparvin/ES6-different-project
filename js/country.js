const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);
        countryDiv.innerHTML =`
        <h3>name:${country.name.common}</h3>
        <h3>capital:${country.capital ?country.capital[0]:"no capital"}</h3>
        <button onclick ="loadCountryDetails('${country.cca2}')">Deatail</button>

        `;
        countriesContainer.appendChild(countryDiv);
    })
}
const loadCountryDetails =(code)=>{
    const url=(`https://restcountries.com/v3.1/alpha/${code}`)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountriesDetail(data[0]))

}
const displayCountriesDetail =country =>{
    console.log(country);
const countryDetail = document.getElementById('country-detail');
countryDetail.innerHTML=`
<h2>name:${country.name.common}</h2>
<h2>Capital: ${country.capital ? country.capital[0]:"no capital"}</h2>
<img src ="${country.flags.png}">
<img src ="${country.maps.googleMaps[0]}">

`
}


loadCountries();