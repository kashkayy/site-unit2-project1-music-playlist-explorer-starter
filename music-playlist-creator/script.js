// Declaring all important variables.
const wrapper = document.querySelector('.wrapper');
const songsLst = document.getElementById('info-box');
const modal = document.getElementById('playlist-modal');
const closeBtn = document.getElementById('close-modal');
const artistName = document.getElementById('artist-name');
const songName = document.getElementById('song-name');
const playlistTitle = document.getElementById('playlist-title');
const creatorName = document.getElementById('creator-name');
const playlistImage = document.getElementById('playlist-image');
let currentPlaylist = null;
function arrayShuffle(array){
    const copy = [array];
    for (let i = 0; i < copy.length; i++){
        const randIndex = Math.floor(Math.random() * (i+1));
        [copy[i], copy[j] = copy[j], copy[i]];
    }
}
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
    playlistTitle.textContent = playlist.title;
    creatorName.textContent = playlist.author;
    playlistImage.src = playlist.art;
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

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});