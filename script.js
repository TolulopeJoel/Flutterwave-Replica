function countryOptions() {
    const countryName = document.getElementById('countryName'),
        dropdown = document.getElementById('countries'),
        dropdownItem = document.querySelectorAll('.location__dropdown-item'),
        locationFlag = document.querySelector('.location-flag'),
        locationName = document.querySelector('#countryName'),
        countryList = { 'cm': 'Cameroon', 'mw': 'Malawi', 'gh': 'Ghana', 'gb': 'United Kingdom', 'us': 'United States', 'ng': 'Nigeria', 'mu': 'Mauritius', 'zm': 'Zambia', 'tz': 'Tanzania', 'za': 'South Africa', 'rw': 'Rwanda', 'eu': 'Rest of Europe', 'ke': 'Kenya', 'ci': 'Ivory Coast', 'ug': 'Uganda' };
    let counter = 1;
    countryName.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(countryList.length)
        counter++;
        if (counter % 2 == 0) {
            dropdown.style.display = 'block';
        } else if (counter % 2 == 1) {
            dropdown.style.display = 'none';
        }

        for (let item of dropdownItem) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                itemValue = item.getAttribute('value');
                locationName.innerHTML = `${countryList[itemValue]}`
                locationFlag.src = `./images/flags/${itemValue}.svg`
            })
        }
    });
}
