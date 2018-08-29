const albumTracks = document.getElementById('album-musics');
let audioObject = null;

const playlistTrigger = () => {
  albumTracks.addEventListener('click', (e) => {
    const { parentNode } = e.target;

    if (parentNode.classList.contains('active')) {
      audioObject.pause();
    } else {
      if (audioObject) {
        audioObject.pause();
      }

      audioObject = new Audio(parentNode.getAttribute('data-track-preview'));
      audioObject.play();
      audioObject.addEventListener('pause', () => {
        parentNode.classList.remove('active');
      });

      parentNode.classList.add('active');
    }
  });
};

export default playlistTrigger;
