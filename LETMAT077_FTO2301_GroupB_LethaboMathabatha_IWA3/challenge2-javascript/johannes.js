export const firstname = "Johannes";
export const surname = "Potgieter";
export let role = "Intern";

export const display= firstname + " " + surname + " (" + role + ")";
document.querySelector('#johannes').innerText = display;