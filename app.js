const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const url =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states%2Bcities.json";

const states = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => states.push(...data));

function findMatches(wordToMatch, state) {
  return state.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.name.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, states);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const stateName = place.name.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
        <li>
          <span class="name">${stateName}</span>

        </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
