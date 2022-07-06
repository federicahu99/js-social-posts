/*
 Milestone 1
    Creiamo il nostro array di oggetti che rappresentano ciascun post.
    Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
    - id del post, numero progressivo da 1 a n
    - nome autore,
    - foto autore,
    - data in formato americano (mm-gg-yyyy),
    - testo del post,
    - immagine (non tutti i post devono avere una immagine),
    - numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
 Milestone 2
    Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
 Milestone 3
    Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/

// creo array  
const infos = [
    {
    idNumber: 568, 
    author: 'Kevin Smith', 
    photo: 'https://unsplash.it/300/300?image=15', 
    date: '12-07-2021', 
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum nam harum, minima expedita inventore...', 
    likes: 51
}
]

// recupero dal dom
const container = document.getElementById('container');

let post = '';

for (i=0 ; i < infos.length; i++) {
    post += 
    `<div class="header-card">
     <img src="" alt="" class="profile-picture">
     <div class="author"> ${infos[i]['author']} </div>
     <div class="date"> ${[infos[i]['date']]}</div>
     </div>
     <div class="center-card">
     <figure>
       <img src="${infos[i]['photo']}" alt="photo${i}" class="post-img">
     </figure>
     <div class="caption">${[infos[i]['caption']]}</div>
     </div>
     <div class="footer-card">
     <button> Mi piace </button>
     <div class='likes'> Likes: ${[infos[i]['likes']]}</div>
     </div>`;
    container.innerHTML += post;
}

