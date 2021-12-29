import React, { useState } from 'react';

import Song from '../components/Song';
import Player from '../components/Player';
import data from '../../data';
import Library from '../components/Library';
import LibraryToggleIcon from '../components/LibraryToggleIcon';
import Container from '../../shared/components/Container';

const songs = data();

const PlayList = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const handelNextSong = direction => {
    let index = 0;
    if (songIndex === 0 && direction < 0) {
      index = songs.length - 1;
    } else if (songIndex === songs.length - 1 && direction > 0) {
      index = 0;
    } else {
      index = songIndex + direction;
    }

    setSongIndex(index);
    setCurrentSong(songs[index]);
  };

  const handelLibrarySong = index => {
    setCurrentSong(songs[index]);
    setSongIndex(index);
  };

  const handelSpaceClick = e => {
    if (e.key === ' ') setIsPlaying(isPlaying => !isPlaying);
  };

  return (
    <Container tabIndex={0} onKeyDown={handelSpaceClick}>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        onChangeSong={handelNextSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        isLibraryOpen={isLibraryOpen}
        setSong={handelLibrarySong}
        songs={songs}
      />
      <LibraryToggleIcon setIsLibraryOpen={setIsLibraryOpen} />
    </Container>
  );
};

export default PlayList;
