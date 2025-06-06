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
const songDuration = document.createElement('song-duration')
// Assigning data to playlist-info
playlists.forEach((playlist, playlistIndex) => {
  const article = document.createElement('article');
  article.classList.add('play');
  article.dataset.playlist = playlistIndex;
  article.innerHTML = `
    <img class="playlistpreview" src="${playlist['art']}" />
    <button class="del-button"><i class="fa-regular fa-trash"></i></button>
    <div class="playlist-info">
        <h3>${playlist['title']}</h3>
        <p>${playlist['author']}</p>
        <button class="heart-button"><i class="fa-regular fa-heart"></i></button>
        <p class="likecount">${Math.floor(Math.random() * 100)}</p>
    </div>
    `;

  wrapper.appendChild(article);
  article.querySelector('.del-button').addEventListener('click', (event) => {
    event.stopPropagation();
    article.remove();
})
});
// icon functionality and interactivity
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
// Setting up modal functionality
const cards = document.querySelectorAll('.play');
const songImg = document.getElementById('song-img');
//looping through each card
cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    const playlistIndex = card.dataset.playlist;
    const playlist = playlists[playlistIndex];
    modalContentElement.id = playlist.id
    playlistTitle.textContent = playlist.title;
    creatorName.textContent = playlist.author;
    playlistImage.src = playlist.art;
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
            <p id="song-duration">${song.duration}</p>
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
        songsLst.innerHTML = '';
        // Grab the modal from the DOM
        // Get the id from the modal
        const modalContentId = document.querySelector('.modal-content').id
        console.log(modalContentId);
        // Set playlist variable to playlists[modal id]
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
                    <p id="song-duration">${song.duration}</p>
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