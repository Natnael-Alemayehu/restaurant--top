import { sayabout } from './about';
import { homeContent } from './home';
import { saymenu } from './menu';

import restaurant from './restaurant.jpg';

const home_btn = document.querySelector("#home");
const about_btn = document.querySelector("#about");
const menu_btn = document.querySelector("#menu");

home_btn.addEventListener('click', homeContent);
menu_btn.addEventListener('click', saymenu);
about_btn.addEventListener('click', sayabout);


const div = document.querySelector("#content");

const h1 = document.createElement("h1");

h1.textContent = "Homepage";

const p = document.createElement("p");
p.textContent = "Welcome to the prestigious and amazing made up restaurant!"

const restaurant_image = document.createElement("img");
restaurant_image.src = restaurant;
restaurant_image.alt = "This is the image of the restaurant from the inside.";
// console.log(restaurant_image);

div.appendChild(h1);
div.appendChild(p);
div.appendChild(restaurant_image);