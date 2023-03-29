export const firstname = "Nwabisa";
export const surname = "Gabe";
export let role = "CEO";

export const display= firstname + " " + surname + " (" + role + ")";
document.querySelector('#nwabisa').innerText = display;