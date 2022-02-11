const gameSection = document.querySelector('.game-body');
const popular = document.querySelector('#popularity')

const getAPIDefault = async () => {
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity'
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "6302383e28msh44bad1d92dea4aep1f7ba7jsn2fcbedaab64d"
    }
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

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
  return data;
}

const createGameCard = ({title, img, description, link}) => {

  const divSection = document.createElement('div');
  divSection.classList.add('text-light','card-bg', 'card', 'd-flex', 'justify-content-center', 'p-2', 'flex-column', 'card__item');
  const divGameBody = document.createElement('div');
  divGameBody.classList.add('card-body', 'text-dark', 'd-flex', 'gap-3', 'flex-column', 'align-items-center', 'justify-content-around', 'container');
  const gameName = document.createElement('h1');
  gameName.classList.add('card-title', 'fs-3');
  const gameDescription = document.createElement('p');
  gameDescription.classList.add('card-text', 'fs-5', 'd-flex', 'justify-content-center', 'text-center');
  const gameLink = document.createElement('a');
  gameLink.classList.add('btn', 'btn-primary', 'fs-5');
  gameLink.innerHTML = 'Jogue agora!';
  const image = document.createElement('img');
  image.classList.add('card-img-top', 'w-100', 'py-1');

  image.src = img;
  divSection.appendChild(image);
  divSection.appendChild(divGameBody)
  gameName.innerText = title;
  divGameBody.appendChild(gameName);
  gameDescription.innerText = description;
  divGameBody.appendChild(gameDescription);
  gameLink.href = link;
  gameLink.setAttribute('target','_blank')
  divGameBody.appendChild(gameLink);
  return divSection
}

const getGenre = async () => {
 
  const section = document.querySelectorAll('.pointer');
  await section.forEach((div) => {
    div.addEventListener('click', async (event) => {
    const data = await getAPI(event.target.parentNode.id);
    gameSection.innerHTML = '';
    popular.innerText = event.target.parentNode.id.toUpperCase();
    data.slice(0,10).
    forEach( (item) => {
      const obj = {title: item.title, img: item.thumbnail, description: item.short_description, link: item.game_url}
      gameSection.appendChild(createGameCard(obj));
    })    
    })
  })  
}

const defaultLoad = async () => {

  const dataDefaultLoad = await getAPIDefault();
  dataDefaultLoad.slice(0,10).
      forEach( (item) => {
        const obj = {title: item.title, img: item.thumbnail, description: item.short_description, link: item.game_url}
        gameSection.appendChild(createGameCard(obj));
      })    
}

window.onload = async () => {
await defaultLoad()
await getGenre();

}