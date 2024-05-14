'use strict';


// creo l'array di oggetti con le informazioni fornite

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'WaBarbare Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]


// con ciclo for stampo in console tutti i dati del singolo membro del team con INTERPOLAZIONE
for (let i = 0; i < team.length; i++) {
    console.log(`
    Nome: ${team[i].name}, 
    Ruolo: ${team[i].role}, 
    Foto: ${team[i].photo} `);
}


// definisco variabile  per creare una ul in HTML
const ul = document.querySelector('.list');


// con ciclo for stampo nel DOM i dati dei membri del team
for (let i = 0; i < team.length; i++) {
    // creo li in HTML
    const li = document.createElement('li');
    // definisco variabile che indichi gli indici dell'array
    const infoTeam = team[i];
    // definisco variabile per creare un h2 in HTML
    const h2 = document.createElement('h2');
    // appendo su h2 l'oggetto name e role
    h2.append(`${infoTeam.name} , ${infoTeam.role}`);
    // appendo h2 a li
    li.append(h2);
    // appendo li a ul
    ul.append(li);


    // // definisco variabile photo e creo elemento 'p' in HTML
    // const photo = document.createElement('p');
    // // definisco testo html = oggetto photo, variante di append
    // photo.innerText = (infoTeam.photo);
    // // appendo photo a li
    // li.append(photo);
    
    
    // creo un elemento img in HTML
    const img = document.createElement('img');
    // setto l'attributo src dell'immagine
    img.src = `img/${infoTeam.photo}`;
    // setto l'attributo alt dell'immagine
    img.alt = `${infoTeam.name} photo`;
    // appendo img a li
    li.append(img);
    
}

   
// con ciclo for...in
// for ( let key in team) {
//     console.log(team[key]);
// }

