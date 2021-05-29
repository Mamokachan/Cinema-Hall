let address = document.location;
console.log(address.search);

let URL = address.search.slice(1);
console.log(URL);

let arrURL = URL.split(';');
console.log(arrURL);

let movieData = { };

for (let k = 0; k < arrURL.length; k += 1) {
	let curr = arrURL[k].split('=');
	console.log(curr);
	movieData[curr[0]] = curr[1];
}

console.log(movieData);

let contain = document.getElementById("cont");
contain.innerHTML = `
	<div id="wrapper">
	<div id="blur">
	<div id="content"><p class="title"></p>
	<h1 class="title" id="movieName">Тут будет название!</h1>
	<p class="title" id="row"></p>
	<p class="title" id="seat"></p>
	<p class="title">Приятного просмотра</p></div>
	<iframe id="moviePlayer" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div></div>
	`


let wrapper = document.getElementById("wrapper");
let movieLink = document.getElementById("moviePlayer");
let movieName = document.getElementById("movieName");
let row = document.getElementById("row");
let seat = document.getElementById("seat");

wrapper.style.backgroundImage = `url(${movieData.movieImg})`;
movieLink.src = movieData.movieLink;
movieName.innerHTML = decodeURI(movieData.movieName);
row.innerHTML = `Ваш ряд - ${movieData.movieRow}`;
seat.innerHTML = `Ваше место - ${movieData.movieSeat}`;
