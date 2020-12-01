const entities = [
	{
		city: "Rostov-on-Don<br />LCD admiral",
		square: "81 m2",
		time: "3.5 months",
		img: "./img/01.jpg",
	},
	{
		city: "Sochi<br />Thieves",
		square: "105 m2",
		time: "4 months",
		img: "./img/02.jpg",
	},
	{
		city: "Rostov-on-Don<br />Patriotic",
		square: "93 m2",
		time: "3 months",
		img: "./img/03.jpg",
	},
];
const img = document.querySelector(".projects__image");
const city = document.querySelectorAll(".projects__data")[0];
const square = document.querySelectorAll(".projects__data")[1];
const time = document.querySelectorAll(".projects__data")[2];

let currentIndex = 0;
let entitiesLength = entities.length;

const setEntity = (index) => {
	city.innerHTML = entities[index].city;
	square.innerHTML = entities[index].square;
	time.innerHTML = entities[index].time;
	img.style.backgroundImage = `url(${entities[index].img})`;

	items.forEach((item) => {
		item.style.color = "#5a5a5a";
		items[index].style.color = " #e3b873";
	});
};

// clicking on arrows
const prev = document.querySelector(".projects__arrow-left");
const next = document.querySelector(".projects__arrow-right");

prev.addEventListener("click", () => {
	if (currentIndex === 0) {
		currentIndex = entitiesLength - 1;
	} else {
		currentIndex -= 1;
	}
	setEntity(currentIndex);
	dots.forEach((dot, j) => {
		dots[j].classList.remove("dot-active");
	});
	dots[currentIndex].classList.add("dot-active");
});

next.addEventListener("click", () => {
	if (currentIndex === entitiesLength - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}
	setEntity(currentIndex);
	dots.forEach((dot, j) => {
		dots[j].classList.remove("dot-active");
	});
	dots[currentIndex].classList.add("dot-active");
});

// Clicking on links
const items = document.querySelectorAll(".projects__item a");

items.forEach((item, i) => {
	item.addEventListener("click", () => {
		items.forEach((item, j) => {
			items[j].style.color = "#5a5a5a";
		});
		currentIndex = i;
		setEntity(currentIndex);
		dots.forEach((dot, j) => {
			dots[j].classList.remove("dot-active");
		});
		dots[currentIndex].classList.add("dot-active");
	});
});

// Clicking on dots
const dots = document.querySelectorAll(".projects__dot");

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		dots.forEach((dot, j) => {
			dots[j].classList.remove("dot-active");
		});
		dot.classList.add("dot-active");
		currentIndex = i;
		setEntity(currentIndex);
	});
});
