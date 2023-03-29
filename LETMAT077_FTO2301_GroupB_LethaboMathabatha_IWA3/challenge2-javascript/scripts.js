import { role as roleNwabisa, display as ceo } from "./nwabisa.js";
import { role as roleJohannes, display as int } from "./johannes.js";
import { role as roleAlex, display as hom } from "./alex.js";

document.querySelector("#nwabisa").textContent = ceo;
document.querySelector("#johannes").textContent = int;
document.querySelector("#alex").textContent = hom;

console.log("Roles: " + roleNwabisa + ", " + roleJohannes + ", " + roleAlex);
