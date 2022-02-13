/**
 * @jest-environment jsdom
 */
const fetch = require('node-fetch');
const { createGameCard, getAPI, getAPIDefault } = require("./script");
const obj = {
  title: 'Naruto Online',
  img: 'https://www.freetogame.com/g/365/thumbnail.jpg',
  description: 'A free-to-play MMO based on the popular anime series and manga, developed',
  link:'https://www.freetogame.com/open/naruto-online',
}
const obj2 = ({title, img, description, link}) => {

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
};


describe('1 - Verifica a função createGameCard', () => {
  it('Teste se createGameCard é uma função', () => {
    expect(typeof createGameCard).toEqual('function');
  });
  it('Teste se createGameCard cria os elementos ao ser chamado', () => {
    expect(createGameCard(obj)).toEqual(obj2(obj));
  })
});

describe('2 - Teste a função getAPI', () => {
  it('Execute a função getAPI com o argumento do item "Shooter" e teste se fetch foi chamada', async () => {
    expect.assertions(1);
    await getAPI("Shooter");
    expect(fetch).toHaveBeenCalled();
    });
});

describe('3 - Teste a função getAPIDefault', () => {
  it('Execute a função getAPIDefault e teste se fetch foi chamada', async () => {
    expect.assertions(1);
    await getAPIDefault()
    expect(fetch).toHaveBeenCalled();
    });
});
