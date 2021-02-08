
let products = [
		{name: "BMW", price: '2000$', src: "img/gallery/small/1.jpg"},
		{name: "LADA", price: '100$', src: "img/gallery/small/2.jpg"},
		{name: "TESLA", price: '3000$', src: "img/gallery/small/3.jpg"},
	]
let basketSum = 0;

function init(){
	
	let gallery = document.getElementById('gallery');
	for (let i = 0; i < products.length; i++) {
		let product = document.createElement('div');
		product.className = "product";
		gallery.appendChild(product);
		let span = document.createElement('span');
		span.innerHTML = `${products[i].name}`;
		product.appendChild(span);
		let img = document.createElement('img');
		img.className = "small_picture";
		img.src = `${products[i].src}`;
		img.id = `image_${i+1}`;
		product.appendChild(img);
		let spanPrice = document.createElement('span');
		spanPrice.innerHTML = `${products[i].price}`;
		product.appendChild(spanPrice);
		let button = document.createElement('button');
		button.id = i;
		button.innerHTML = "Купить";
		button.onclick = bought;
		product.appendChild(button);
	}
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = changeBigPicture;
		
	}
	let prevButton = document.querySelector('.prev');
	prevButton.onclick = prev;
	let nextButton = document.querySelector('.next');
	nextButton.onclick = next;
}
function changeBigPicture(eventObj){
	var appDiv = document.getElementById("big_picture");
	appDiv.innerHTML = "";	
	var eventElement = eventObj.target;
	var imageNameParts = eventElement.id.split("_");
	var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
	appDiv.dataset.curent = imageNameParts[1];
	var imageDomElement = document.createElement("img");
	imageDomElement.src = src;
	imageDomElement.onerror = imgNotFound;
	appDiv.appendChild(imageDomElement);
}
//1
let imgNotFound = () => {
	var appDiv = document.getElementById("big_picture");
	appDiv.innerHTML = "";
	let text = document.createElement("span");
	text.innerHTML = 'Картинка не найдена';
	appDiv.appendChild(text);
}
//2
let bought = (e) => {
	let ul = document.getElementById('list');
	let price = document.getElementById('price');
	console.log(products[e.target.id].price);
	let li = document.createElement('li');
	li.innerHTML=`${products[e.target.id].name}`;
	ul.appendChild(li);
	basketSum += parseInt(products[e.target.id].price);
	price.innerHTML = basketSum + '$';
}
//3
let prev = (e) => {
	let appDiv = document.getElementById("big_picture");
	let currentValue = 1;
	if (appDiv.dataset.curent == 1) {
		appDiv.dataset.curent = 3;
		currentValue = 3;
	} else {
		currentValue = --appDiv.dataset.curent;
	}

	appDiv.innerHTML = "";
	let src = "img/gallery/big/" + currentValue + ".jpg";
	let imageDomElement = document.createElement("img");
	imageDomElement.src = src;
	appDiv.appendChild(imageDomElement);
}
let next = (e) => {
	let appDiv = document.getElementById("big_picture");
	let currentValue = 1;
	if (appDiv.dataset.curent == 3) {
		appDiv.dataset.curent = 1;
		currentValue = 1;
	} else {
		currentValue = ++appDiv.dataset.curent;
	}

	appDiv.innerHTML = "";
	let src = "img/gallery/big/" + currentValue + ".jpg";
	let imageDomElement = document.createElement("img");
	imageDomElement.src = src;
	appDiv.appendChild(imageDomElement);
}
window.onload = init;
