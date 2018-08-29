import spotify from './spotify';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTrack = document.getElementById('album-musics');


const makeRequest = (albumId) => {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTrack));
};

const selectAlbumTrigger = () => {
  albumList.addEventListener('click', (e) => {
    const { target } = e;
    makeRequest(target.getAttribute('data-album-id'));
  });
};

export default selectAlbumTrigger;
