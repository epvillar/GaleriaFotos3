
const reviews = [

{
	id: 1, 
	name: "roberto nickson",
	title: "winter in whistler village, canada",
	date: "published on june 25, 2018",
	img: "https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
	text: 
	"I love this photo"
},

{
	id: 2, 
	name: "daniel sessler",
	title: "Mother nature in Iceland",
	date: "published on june 25, 2018",
	img: "https://images.unsplash.com/photo-1635961328069-e9c9f4d0b22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	text: 	"Mother nature at its best"
},

{
	id: 3, 
	name: "else-marie de leeuw",
	title: "gerlitzen, Treffen am osslacher see, austria",
	date: "published on january 15, 2018",
	img: "https://images.unsplash.com/photo-1516015222231-943dc82860bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
	text: 
	"This photo made my day"
},

{
	id: 4, 
	name: "jonatan pie",
	title: "Little Rebba",
	date: "published on january 13, 2017",
	img: "https://images.unsplash.com/photo-1484312152213-d713e8b7c053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
	text: 
	"Coming to beg for some extra snacks"
},

{
	id: 5, 
	name: "alberto restifo",
	title: "frozen mountainous landscape",
	date: "published on december 19, 2014",
	img: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
	text: 
	"Few things more beautiful"
},

{
	id: 6, 
	name: "guille posse",
	title: "snowy forest under the stars",
	date: "published on september 13, 2017",
	img: "https://images.unsplash.com/photo-1505322101000-19457cff32ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	text: "I love Bariloche´s sky"
},

{
	id: 7, 
	name: "else-marie de leeuw",
	title: "gerlitzen, Treffen am osslacher see, austria",
	date: "published on january 20, 2018",
	img: "https://images.unsplash.com/photo-1516015222231-943dc82860bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
	text: "I just went skying"
},

{
	id: 8, 
	name: "kalen emsley",
	title: "oahu, hawaii, usa",
	date: "published on july 11, 2021",
	img: "https://images.unsplash.com/photo-1626049789315-2d5f1b656454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
	text: "Beautiful Hawaii"
},

{
	id: 9, 
	name: "neil bates",
	title: "frozen switzerland",
	date: "published on november 6, 2021",
	img: "https://images.unsplash.com/photo-1636192677130-83a4cbd0f7d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
	text: "Best of nature"
},

{
	id: 10, 
	name: "sam mgrdichian",
	title: "joshua tree national park, twentynine palms, usa",
	date: "published on march 17, 2021",
	img: "https://images.unsplash.com/photo-1615988380644-0a3a13b5feba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	text: 
	"One of my favourites"
},


]

const img = document.getElementById("photo-img");
const author = document.getElementById("author");
const date = document.getElementById("date");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
	showPhoto(currentItem);
});

function showPhoto(currentItem){
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	date.textContent = item.date;
	info.textContent = item.text;
};

nextBtn.addEventListener('click', function(){
	currentItem++;
	if(currentItem > reviews.length -1){
		currentItem = 0;
	}
	showPhoto(currentItem);
});

prevBtn.addEventListener('click', function(){
	currentItem--;
	if(currentItem < 0){
		currentItem = reviews.length-1;
	}
	showPhoto(currentItem);
});











