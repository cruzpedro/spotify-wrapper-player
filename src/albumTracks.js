import convertToHumanTime from './convertToHumanTime';

const createMarkup = data => (
  data.map(track => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
    </div>`).join('')
);

const renderAlbumTracks = (data, element) => {
  const markup = createMarkup(data);
  element.innerHTML = markup;
};


export default renderAlbumTracks;
