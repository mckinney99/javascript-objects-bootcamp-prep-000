var playlist = {
  artistName: 'e'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]:  songTitle})
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist;
}
