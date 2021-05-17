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
	let indexes = event.id.split("-");
	console.log(indexes);
	let session = DATABASE[indexes[0]].session[indexes[1]];
	let reserved = DATABASE[indexes[0]].session[indexes[1]].reserved;
	let sessionCount = session.seat;
	const root = document.getElementsByClassName("session-root");

	showSeat(sessionCount, root[indexes[0]]);
	showBooked(reserved);
	alertSeat(reserved);

	// let session = DATABASE[0].session[event.id];
	// let reserved = DATABASE[0].session[event.id].reserved;
	// showSeat(session);
	// showBooked(reserved);
	// alertSeat(reserved);
};


function showSeat (session, root) {
	let forArr = ``;
	for (let i = 0; i < session; i++) {
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


function loader() {
	const heading = Array.from(document.getElementsByClassName("el__heading"));
	const bg = Array.from(document.getElementsByClassName("el__bg"));
	let temp = '';

	for (let i = 0; i < DATABASE.length; i += 1) {
		heading[i].innerHTML = DATABASE[i].movie;
		// заголовки секций, название фильма
		temp = DATABASE[i].img;
		bg[i].style.backgroundImage = `url(${temp})`;
		bg[i].style.backgroundRepeat = "no-repeat";
		bg[i].style.backgroundPosition = "left"; 
		bg[i].style.backgroundSize = 'contain';
		bg[i].style.backgroundAttachment = 'fixed';
		// фоновые постеры для секций

		//детали фильма в каждую секцию

		//
	}
}

loader();


function renderSeans() {
	let seansRoot = Array.from(document.getElementsByClassName("seans"));
	let session = null;

	seansRoot.forEach(function (current, index) {
	session = DATABASE[index].session;
	let links = ``; 

	for (let i = 0; i < session.length; i++) {
		links += `<span class="el__sesion__link" id=${index+"-"+i} onclick="sessionClick(this)"> Сеанс ${session[i].date}  </span>`
	};

	//let session-root = `<div class="session-root" id="1"> </div>`;
	let div = document.createElement('div');
	div.className = "session-root";
	div.id = index;

	current.innerHTML = links;
	current.append(div);

	});
};

renderSeans();