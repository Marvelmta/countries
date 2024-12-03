const form = document.querySelector('form');

form.addEventListener('submit', event => {event.preventDefault(); 
    const language = form.querySelector('#language').value; 

    form.reset();

    const apiUrl = `https://restcountries.com/v3.1/lang/${language}`;

    fetch(apiUrl).then(response => response.json()).then(displayCountryInfo).catch( error => { console.log(error)});    
});

function displayCountryInfo(countries) {
    const imgContainer = document.querySelector('#imageContainer');
    imgContainer.innerHTML = ''; 

    for (const country of countries) {
        const flagUrl = country.flags.svg; 
        const countryName = country.name.official; 
        const subregion = country.subregion; 

        const imgEl = document.createElement('img'); 
        imgEl.src = flagUrl;
        imgEl.style.width = '150px'; 
        imgEl.style.margin = '10px'; 

        const countryNameEl = document.createElement('h1');
        countryNameEl.textContent = countryName;
        countryNameEl.style.fontSize = '20px'; 
        countryNameEl.style.margin = '10px 0';

        const subregionEl = document.createElement('p');
        subregionEl.textContent = `Subregion: ${subregion}`;
        subregionEl.style.margin = '5px 0';

        imgContainer.append(countryNameEl, imgEl, subregionEl);
    }
};
