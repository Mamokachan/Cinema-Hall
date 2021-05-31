let address = document.location;

let URL = address.search.slice(1);

let arrURL = URL.split(';');

let movieData = { };

for (let k = 0; k < arrURL.length; k += 1) {
	let curr = arrURL[k].split('=');
	movieData[curr[0]] = curr[1];
}


let contain = document.getElementById("cont");
contain.innerHTML = `
	<div id="wrapper">
	<div id="blur">
	<div id="content">
	<h1 class="title" id="movieName">Тут будет название!</h1>
	<div id="place"><p id="row"></p></div>
	<p class="title" id="text">Приятного просмотра</p></div>
	<iframe id="moviePlayer" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div></div>
	`


let wrapper = document.getElementById("wrapper");
let movieLink = document.getElementById("moviePlayer");
let movieName = document.getElementById("movieName");
let row = document.getElementById("row");

window.top.document.title = decodeURI(movieData.movieName);
wrapper.style.backgroundImage = `url(${movieData.movieImg})`;
movieLink.src = movieData.movieLink;
movieName.innerHTML = decodeURI(movieData.movieName);
row.innerHTML = `Ваш ряд - ${movieData.movieRow}, место - ${movieData.movieSeat}`;
