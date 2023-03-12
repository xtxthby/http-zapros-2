/*
 * - Cross-Origin Resource Sharing (CORS)
 *  - https://pokeapi.co/
 *  - https://darksky.net/dev
 * - Proxy
 *  - Хранение API ключей и секретов
 *  - https://lpj-weather-service.herokuapp.com/
 */
import '../css/common.css';


// робимо запрос, коли прийде зроби запрос і поверни
// все працює
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(r => r.json())
  .then(console.log);

// Але іноді не працює бо треба Proxy Server 
// бо бекенд працює з бекендом




// тут приклад звязку через свій бекенд
fetch(
  'https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331',
)
  .then(r => r.json())
  .then(console.log);






