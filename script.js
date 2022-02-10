
// Autorização da da API via https://rapidapi.com/digiwalls/api/free-to-play-games-database

const getAPI = async (genre) => {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "6302383e28msh44bad1d92dea4aep1f7ba7jsn2fcbedaab64d"
    }
  }
  const response = await fetch(url, options)
  const data = await response.json();
  console.log(data);
}

window.onload = async () => {
await getAPI('MMORPG');
}
