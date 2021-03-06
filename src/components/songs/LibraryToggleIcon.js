import React from 'react';
import { ReactComponent as MusicIcon } from '../../assets/musical-notes.svg';

const LibraryToggle = ({ setIsLibraryOpen }) => {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        setIsLibraryOpen(isPlaying => !isPlaying);
      }}
      className="library-toggle"
    >
      Library <MusicIcon />
    </button>
  );
};

export default LibraryToggle;
