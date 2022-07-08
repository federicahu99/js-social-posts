
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

// funzioni 

function createPost () {
  let post = '';
  post += 
  `<div class="post">
      <div class="post__header">
          <div class="post-meta">
              <div class="post-meta__icon">
                  <img class="profile-pic" src="${[infos[i]['picture']]}" alt="${[infos[i]['picture']]}" />
              </div>
              <div class="post-meta__data">
              <div class="post-meta__author">${[infos[i]['author']]}</div>
              <div class="post-meta__time">${[infos[i]['date']]}</div>
          </div>
      </div>
    </div>

    <div class="post__text">
      Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
      voluptate recusandae architecto. Et nihil ullam aut alias.
    </div>
    <div class="post__image">
      <img src="${[infos[i]['photo']]}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
      <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone</div>
      </div>
    </div>
  </div>
  </div>`;
  container.innerHTML += post;
}

function likeAPicture() {
    newLike = ++infos.likes;
    infos.push(newLike);
}

// creo array  
const infos = [
    {
    idNumber: 568, 
    author: 'Kevin Smith', 
    photo: 'https://unsplash.it/300/300?image=15', 
    picture: 'https://picsum.photos/200/200/?blur',
    photo: 'https://picsum.photos/seed/picsum/600/300', 
    date: '12-07-2021', 
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum nam harum, minima expedita inventore...', 
    likes: 51
    }, 
    {
    idNumber: 553, 
    author: 'Lauren Green', 
    picture: 'https://picsum.photos/200/200/?blur',
    photo: 'https://picsum.photos/seed/picsum/500/300', 
    date: '09-07-2021', 
    caption: 'Quia cum nam harum, minima expedita inventore...', 
    likes: 198
    }
]

// recupero dal dom
const container = document.getElementById('container');

for (i=0 ; i <= infos.length; i++) {
  createPost();
}

// evento
const btns = document.querySelectorAll('js-like-button')

for (const bnt of btns) {
  bnt.addEventListener('click', () => {
      btn.classList.add('like-button--liked')
  })
}

