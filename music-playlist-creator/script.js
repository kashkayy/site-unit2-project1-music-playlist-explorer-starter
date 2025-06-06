// Declaring all important variables.
const wrapper = document.querySelector('.wrapper');
const songsLst = document.getElementById('info-box');
const modal = document.getElementById('playlist-modal');
const modalContentElement = document.querySelector('.modal-content')
const closeBtn = document.getElementById('close-modal');
const artistName = document.getElementById('artist-name');
const songName = document.getElementById('song-name');
const playlistTitle = document.getElementById('playlist-title');
const creatorName = document.getElementById('creator-name');
const playlistImage = document.getElementById('playlist-image');
const shuffleBtn = document.createElement('button');
playlists.forEach((playlist, playlistIndex) => {
  const article = document.createElement('article');
  article.classList.add('play');
  article.dataset.playlist = playlistIndex;
  article.innerHTML = `
    <img class="playlistpreview" src="${playlist['art']}" />
    <div class="playlist-info">
        <h3>${playlist['title']}</h3>
        <p>${playlist['author']}</p>
        <button class="heart-button"><i class="fa-regular fa-heart"></i></button>
        <p class="likecount">${Math.floor(Math.random() * 100)}</p>
    </div>
    `;

  wrapper.appendChild(article);
});

const heartButtons = document.querySelectorAll('.heart-button');
const likeCounts = document.querySelectorAll('.likecount');
heartButtons.forEach((button, index) => {
  let isLiked = false;
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    let currentCount = parseInt(likeCounts[index].textContent);
    if (!isLiked) {
      likeCounts[index].textContent = currentCount + 1;
      isLiked = true;
      const heartIcon = button.querySelector('i');
      heartIcon.classList.remove('fa-regular');
      heartIcon.classList.add('fa-solid');
    } else {
      likeCounts[index].textContent = currentCount - 1;
      isLiked = false;
      const heartIcon = button.querySelector('i');
      heartIcon.classList.remove('fa-solid');
      heartIcon.classList.add('fa-regular');
    }
  });
});

const cards = document.querySelectorAll('.play');
const songImg = document.getElementById('song-img');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    const playlistIndex = card.dataset.playlist;
    const playlist = playlists[playlistIndex];
    modalContentElement.id = playlist.id
    playlistTitle.textContent = playlist.title;
    creatorName.textContent = playlist.author;
    playlistImage.src = playlist.art;
    // const shuffleBtnDiv = document.createElement('div');
    // shuffleBtnDiv.id = 'shuffle-btn';
    shuffleBtn.id = 'shuffle'
    songsLst.innerHTML = '';
    playlist.songs.forEach((song) => {
      const songsCard = document.createElement('div');
      songsCard.classList.add('song-list');
      songsCard.innerHTML = `
        <div id="song-info">
            <img src="${song.coverArt}" alt="song Image" id="song-img">           
            <div id="song-details">
            <p id="song-name">${song.title}</p>
            <p id="artist-name">${song.artist}</p>
            </div>
        </div>
      `;
      songsLst.appendChild(songsCard);
    });
  });
});
    document.querySelector('#shuffle').addEventListener('click', () => {
        const songsLst = document.getElementById('info-box');
        console.log(songsLst.children);
        // const songs = Array.from(songsLst.children);
        songsLst.innerHTML = '';
        // grab the modal from the DOM
        // get the id from the modal
        const modalContentId = document.querySelector('.modal-content').id
        console.log(modalContentId);
        
        // set playlist variable to playlists[modal id]
        let playlist = playlists[parseInt(modalContentId) - 1];
        let copy =[...playlist.songs]
        shuffle_function(copy)
        copy.forEach((song) => {
            const songCard = document.createElement('div');
            songCard.classList.add('song-list');
            songCard.innerHTML = `
                <div id="song-info">
                    <img src="${song.coverArt}" alt="song Image" id="song-img">           
                    <div id="song-details">
                    <p id="song-name">${song.title}</p>
                    <p id="artist-name">${song.artist}</p>
                    </div>
                </div>
            `;
            songsLst.appendChild(songCard);
        })
    })
function shuffle_function(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
} 
    closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});