const address = window.document.location;

const URL = address.search.slice(1);

const arrURL = URL.split(';');

const movieData = {};

for (let k = 0; k < arrURL.length; k += 1) {
  const curr = arrURL[k].split('=');
  // eslint-disable-next-line prefer-destructuring
  movieData[curr[0]] = curr[1];
}

const contain = window.document.getElementById('cont');
contain.innerHTML = `
	<div id="wrapper">
	<div id="blur">
	<div id="content">
	<h1 class="title" id="movieName">Тут будет название!</h1>
	<div id="place"><p id="row"></p></div>
	<p class="title" id="text">Приятного просмотра</p></div>
	<iframe id="moviePlayer" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div></div>
	`;

const wrapper = window.document.getElementById('wrapper');
const movieLink = window.document.getElementById('moviePlayer');
const movieName = window.document.getElementById('movieName');
const row = window.document.getElementById('row');

window.top.document.title = decodeURI(movieData.movieName);
wrapper.style.backgroundImage = `url(${movieData.movieImg})`;
movieLink.src = movieData.movieLink;
movieName.innerHTML = decodeURI(movieData.movieName);
row.innerHTML = `Ваш ряд - ${movieData.movieRow}, место - ${movieData.movieSeat}`;
