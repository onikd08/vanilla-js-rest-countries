const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => createCountriesHTML(data));
};

const createCountriesHTML = (countries) => {
  const bla = countries.map((country) => {
    return `
            <div class = "country">
                <img src="${country.flags.png}">
                <h3> ${country.name.common} </h3>
                <span>Capital: ${country.capital} </span>
            </div>
        `;
  });
  const container = document.getElementById("countries");
  container.innerHTML = bla.join(" ");
};

loadCountries();
