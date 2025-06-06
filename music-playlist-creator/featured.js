console.log(playlists);
const playlistTitle = document.getElementById('playlist-title');
const creatorName = document.getElementById('creator-name');
const playlistImage = document.getElementById('playlist-image');
const songsLst = document.getElementById('info-box');
const artistName = document.getElementById('artist-name');
const songName = document.getElementById('song-name');
const songImg = document.getElementById('song-img');
const randomIndex = Math.floor(Math.random() * playlists.length);
const playlist = playlists[randomIndex];
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
            <p id="song-duration">${song.duration}</p>
            </div>
      </div>
    `;
    songsLst.appendChild(songsCard);
});