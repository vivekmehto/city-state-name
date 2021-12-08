const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const url =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states%2Bcities.json";

const cities = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, city) {
  return city.filter((name) => {
    const regex = new RegExp(wordToMatch, "gi");
    return name.match(regex) || cities.name.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
        </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
