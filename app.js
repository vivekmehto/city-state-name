const url =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states%2Bcities.json";

const cities = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => cities.push(...data));
