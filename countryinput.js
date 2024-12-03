const form = document.querySelector('form');

form.addEventListener('submit', event => {event.preventDefault(); 
    const countryName = form.querySelector('#flag').value; 

    const flagUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(flagUrl).then(response=>response.json()).then(displayFlag);
});

function displayFlag(flagObj) {
    const imgContainer = document.querySelector('#imageContainer');
    imgContainer.innerHTML = ''; 

    
    for (const country of flagObj) {
        const flagUrl = country.flags.svg; 
        const countryName = country.name.common;

        const imgEl = document.createElement('img'); 
        const countryNameEl = document.createElement('h1');

        imgEl.src = flagUrl;
        imgEl.style.width = '150px'; 
        imgEl.style.margin = '10px';
        
        countryNameEl.textContent = countryName;
        countryNameEl.style.fontSize = '20px'; 
        countryNameEl.style.margin = '10px 0';

        imgContainer.append(imgEl, countryNameEl);
    }
}
