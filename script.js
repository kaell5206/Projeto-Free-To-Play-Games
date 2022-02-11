const section = document.querySelectorAll('.pointer');
const games = document.querySelector('.game-body');
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
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'card-img-top w-100 py-1';
  img.src = imageSource;
  return img;
}
const createGameCard = ({title, img, description, link}) => {
  const div = games.appendChild(createCustomElement('div','text-light card-bg card d-flex justify-content-center p-2 flex-column card__item'));
  div.appendChild(createProductImageElement(img));
  div.appendChild(createCustomElement('div', 'card-body text-dark d-flex gap-3 flex-column align-items-center'));

}

const getGenre = () => {
  section.forEach((div) => {
    div.addEventListener('click', (event) => {
    return getAPI(event.target.parentNode.id);
    })
    
  })  
}

// const onScreen = async () => {
//  const response = await getGenre();
//  console.log(response)
//  response.forEach( (item) => {
//   const obj = {title: item.title, img: item.thumbnail, description: item.short_description, link: item.game_url}
//   console.log(obj)
//  })
 
// }

window.onload = async () => {
getGenre();
// onScreen()
}
