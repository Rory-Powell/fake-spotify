const host = 'http://localhost:3001/';
const url = (path) => host + path;

// UTILS

const doFetch = (path, callback) => {
  fetch(url(path))
    .then(response => response.json())
    .then((data) => callback(data))
}

// PLAYLISTS

export const getPlaylists = (callback) => {
  doFetch('playlists', callback)
};

export const getPlaylist= (playlistId, callback) => {
  doFetch(`playlists/${playlistId}`, callback)
};

// ALBUMS

export const getAlbum = (albumId, callback) => {
  doFetch(`albums/${albumId}`, callback)
};


