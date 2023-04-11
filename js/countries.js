const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => createCountriesHTML(data));
};

const createCountriesHTML = (countries) => {
  const bla = countries.map(({ name, flags, capital, region }) => {
    return `
            <div class = "country">
                <img src="${flags.png}">
                <h3> ${name.common} </h3>
                <span>Capital: ${capital} </span>
                <span>Region: ${region}</span>
            </div>
        `;
  });
  const container = document.getElementById("countries");
  container.innerHTML = bla.sort().join(" ");
};

loadCountries();
