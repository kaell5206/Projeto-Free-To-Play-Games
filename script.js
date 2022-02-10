const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc'

const getAPI = async () => {
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
await getAPI();
}