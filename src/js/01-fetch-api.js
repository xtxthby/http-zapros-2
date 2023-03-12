/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
// підключаємо html розмітку
import pokemonCardTpl from '../templates/pokemon-card.hbs';
// дві функціі які ми винесли в окремі файли
import API from './api-service';
import getRefs from './get-refs';
// з імпорту я викликаю getRefs в нову змінну refs
const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  // це імпорт
  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}





// =========================================
// Параметри запиту

pokemon?limit=100000&offset=0.
mysite.com / api / pokemon ? імя = значення & імя=значення
  // це ми просимо перші 10 покемонов
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(r => r.json())
  .then(console.log);

  // запрос де віддають картинки


const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    // це ключ без якого небуде кіна, шучу, доступу до файла
    Authorization: '4330ebfabc654a6992c2aa792f3173a3',
  },
}; 
fetch(url, options)
  .then(r => r.json())
  .then(console.log);











// перша частина теорії


// піди на бекенд і візми по цій адресі покемона

// const r = fetch('https://pokeapi.co/api/v2/pokemon/{id or name}/');
// замысть {id or name}  треба поставити ID
// const r = fetch('https://pokeapi.co/api/v2/pokemon/2/');
// // вона поверне проміс
// console.log(r);

// тепер ми можемо присобачити then подивимося імя параметру
// fetch('https://pokeapi.co/api/v2/pokemon/2/').then(data => {
//   console.log(data);
//   // прийшла відповідь Response  це обєкт без даних але є боді тобіш тіло
//   // а в ньому body : ReadableStream , і щоб отримати дані треба розкоду
//   // -вати за допомогою blob - це для відео,картинок  ,
//   // json -це json, text - це текст
// });




//  тепер підставимо ці дані

// fetch('https://pokeapi.co/api/v2/pokemon/2/').then(response => {
//   // console.log(response.json());
//   // отримаємо Promise {<pending>}
//   // ми його повертаємо у слідуючий then
//   return response.json();
  
// }).then(pokemon => {
//   // і тепер тут буде покемон з даними
//   console.log(pokemon);
//   // кидаємо відповідь від сервера  в розмітці HTML
//   const markup = pokemonCardTpl(pokemon);
//   console.log(markup);
// }).catch(error => {
//   cohsole.log(error);
// });








// підключаємо до розмітки

// const refs = {
//   cardContainer: document.querySelector('.js-card-container')
// }


// fetch('https://pokeapi.co/api/v2/pokemon/2/').then(response => {
//   // console.log(response.json());
//   // отримаємо Promise {<pending>}
//   // ми його повертаємо у слідуючий then
//   return response.json();
  
// }).then(pokemon => {
//   // і тепер тут буде покемон з даними
//   console.log(pokemon);
//   // кидаємо відповідь від сервера  в розмітці HTML
//   const markup = pokemonCardTpl(pokemon);
//   console.log(markup);
//   // після того як зробили розмітку привязуємо їїдо HTML
//   refs.cardContainer.innerHTML = markup;
// }).catch(error => {
//   cohsole.log(error);
// });



// // тепер переробимо на окремі функції
// fetchPokemon();
// function fetchPokemon() {
//   fetch('https://pokeapi.co/api/v2/pokemon/2/').then(response => {
//   // console.log(response.json());
//   // отримаємо Promise {<pending>}
//   // ми його повертаємо у слідуючий then
//   return response.json();
  
// }).then(pokemon).catch(error => {
//   cohsole.log(error);
// });
// }
// // це те що в then 2
// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// } 





// // тепер переробимо на окремі функції 2
// fetchPokemon()
//   .then(renderPokemonCard)
//   .catch(error => cohsole.log(error));

// // тут функція повинна повертати тільки проміс,
// // а те що було передамо функції з верху яку викликали
// function fetchPokemon() {
//   fetch('https://pokeapi.co/api/v2/pokemon/2/').then
//   (response => {
//     return response.json();
//   });
// }
// // це те що в then 2
// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// } 





// // тепер переробимо на окремі функції 2
// // тут можемо вибірати покемона по номеру який перейде в ID
// fetchPokemon(3)
//   .then(renderPokemonCard)
//   .catch(error => cohsole.log(error));

// // додамо ID
// function fetchPokemon(pokemonId) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then
//   (response => {
//     return response.json();
//   });
// }
// // це те що в then 2
// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// } 









// // Підключаемось до головної розмітки HTML
// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelectorAll('.js-search form'),
// }
// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   // ===query=== це імя нашого інпута і внього значення
//   const searchQuery = form.elements.query.value
//   // тут можемо вибірати покемона по значенню яке буде записано в інпуті
//   fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     // сюди ще можна кинути alert модалку 
//     .catch(error => cohsole.log(error))
//     // по виконанню роботи прибери поле в інпуті
//     .finally(() => {
//       form.reset();
//     });
// }

// // додамо ID
// function fetchPokemon(pokemonId) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then
//     (response => {
//       // дивимося що там є, там ok: false якщо 404
//       // раніше цього не було і треба було фіксити
//       console.log(response);
//     return response.json();
//     });
// }
// // це те що в then 2
// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// } 





// // виносимо в окрему функцію catch
// // Підключаемось до головної розмітки HTML
// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelectorAll('.js-search form'),
// }
// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   // ===query=== це імя нашого інпута і внього значення
//   const searchQuery = form.elements.query.value
//   // тут можемо вибірати покемона по значенню яке буде записано в інпуті
//   fetchPokemon(searchQuery)
//     .then(renderPokemonCard) 
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// // додамо ID
// function fetchPokemon(pokemonId) {
//   // виносимо в додаткову змінну
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
//   return fetch(url).then(response => response.json());
//   // return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
//   // .then(response => response.json());
// }
// // це те що в then 2
// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   cohsole.log(error);
//   alert('Щось не так');
// }




// далі розносимо по папках функціі і підключаємо
