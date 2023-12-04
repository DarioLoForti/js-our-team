// MILESTON 0

//  definisco array di oggetti

let employees = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg"
    },

    {
        name : "Angela Carroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg",
    },

    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "walter-gordon-office-manager.jpg",
    },

    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        image : "angela-lopez-social-media-manager.jpg",
    },

    {
        name : "Scott Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg",
    },

    {
        name : "Barbara ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg"
    },
];
console.log(employees);

// MILESTON 1
let impiegati = [];
// stampo innconsole tramite cilco for in informazioni di ogni impiegato
for(let key in employees){
    console.log(employees[key]);
}

// MILESTON 2

// stampo su DOM informazioni impiegati tramite stringhe;

let contendCard = document.getElementById("content-card");

for(i=0; i<=employees.length; i++){
    
    let div = document.createElement("content-card");
    div.classList.add("col-4");
    div.classList.add("m-5");
    div.classList.add("text-white");
   
    
    contendCard.appendChild(div);
    
    let card = document.createElement("div");
    card.classList.add("div");
    div.appendChild(card);

    let nome = `<h3>${employees[i].name}</h3>`;
    let role = `<h4>${employees[i].role}</h4>`;
    let image = `<img src=./img/${employees[i].image} alt="${employees[i].name}">`;
    

    card.innerHTML = image + "<br>" + nome + "<br>" + role;
    console.log(card);
}
