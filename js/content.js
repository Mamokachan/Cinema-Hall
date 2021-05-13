const DATABASE = [
{
movie: 'Violet Evergarden',
detail: 'This film is about',
img: 'https://i.pinimg.com/736x/7b/cc/be/7bccbe401356030ac24957163b2a3235.jpg',
session: [{
		date: 15.04,
		seat: 50,
		reserved: [0, 15, 23, 34, 47],
		},
		{
		date: 16.04,
		seat: 30,
		reserved: [2, 9, 16, 27, 29],
		},
		{
		date: 17.04,
		seat: 40,
		reserved: [1, 7, 14, 20, 32],
	}]
},
{
movie: 'The Godness is blesing this world',
detail: 'This film is about something else',
img: 'https://disotzov.ru/wp-content/uploads/2020/03/Kono_Subarashii_Sekai_ni_Shukufuku_wo-e1547068131999.jpg',
session: [{
	date: 16.04,
	seat: 30,
	reserved: [1, 3, 4, 6],
	}]
},
{
movie: 'No Game no life',
detail: 'This film is about something cool',
img: 'https://i1.wp.com/manga-home.com/wp-content/uploads/2017/03/No-Game-No-Life.jpg',
session: [{
	date: 17.04,
	seat: 50,
	reserved: [1, 4, 8, 9],
	}]
},

{
movie: 'Main',
detail: 'This film is about something cool',
img: 'https://ninotaku.de/wp-content/uploads/2020/07/noragami-1160x1642.jpg',
session: [{
	date: 17.04,
	seat: 50,
	reserved: [1, 4, 8, 9],
	}]
},

{
movie: 'Naruto',
detail: 'This film is about something cool',
img: 'https://anime-look.ru/wp-content/uploads/2019/07/1-51.jpg',
session: [{
	date: 17.04,
	seat: 30,
	reserved: [1, 4, 8, 9],
	}]
},
];



function showBooked(places) {
	const cinema = document.getElementById("cinemahall");

	const seats = document.getElementsByClassName("seat");
	let arr = Array.from(seats);

	arr.forEach((current, index) => {
	for (let i = 0; i < places.length; i++) {
		if (index === places[i]) current.classList.toggle("booked");
		}
	});

};

function sessionClick(event) {
	let session = DATABASE[0].session[event.id];
	let reserved = DATABASE[0].session[event.id].reserved;
	showSeat(session);
	showBooked(reserved);
	alertSeat(reserved);
};

function showSeat (session) {
	const root = document.getElementById("session-root");
	const seatsCount = session.seat;
	let forArr = ``;
	for (let i = 0; i < seatsCount; i++) {
	forArr += `<div class="seat" id=${i}> </div>`;
	}
	let cinemahall = `
	<div class=".mw-session">
	<div id="cinemahall"> 
		${forArr}
		</div>
	</div>
	`;
	root.innerHTML = cinemahall;
}

function alertSeat(reserved) {
	const seats = document.getElementsByClassName("seat");
	const seatsArr = Array.from(seats);
	let show = seatsArr.forEach((eachSeat, idex) => 
		eachSeat.addEventListener('click', function clickID () { 
			const curSeatID = this.id;
			const curSeatIdInt = parseInt(curSeatID);
			console.log(reserved.includes(curSeatIdInt));
			reserved.includes(curSeatIdInt) ?
				alert(`You have clicked on the ${curSeatIdInt+1} seat and it is booked! Please, choose another one.`) : 
				alert(`You have clicked on the ${curSeatIdInt+1} seat and it is empty! Feel free to book it!`) ;
			 
		  } )
		);
}

// !


function loader() {
	const heading = document.getElementsByClassName("el__heading");
	let arr = Array.from(heading);
	arr.forEach((current, index) => {
		current.innerHTML = DATABASE[index].movie;
	} )
}

loader();


function background() {
	const bg = document.getElementsByClassName("el__bg");
	let arr = Array.from(bg);
	let temp = '';
	for (let i = 0; i < 5; i += 1) {
		temp = DATABASE[i].img;
		arr[i].style.backgroundImage = `url(${temp})`;
		arr[i].style.backgroundRepeat = "no-repeat";
		arr[i].style.backgroundPosition = "left"; 
		arr[i].style.backgroundSize = 'contain';
		arr[i].style.backgroundAttachment = 'fixed';
	  }
}


background();


function renderSeans() {
	let seansRoot = document.getElementsByClassName("seans");
	let arr = Array.from(seansRoot);

	arr.forEach(function (current, index) {
	let session = DATABASE[index].session;
	let links = ``;
	
		for (let i = 0; i < session.length; i++) {
			links += `<span class="el__sesion__link" id="${i}" onclick="sessionClick(this)"> Сеанс ${session[i].date} <br> </span>`
		}
		current.innerHTML = links;
	});
};

renderSeans();