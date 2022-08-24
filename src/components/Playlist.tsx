import React, { useContext, memo } from 'react';
import { PatternContext } from '../contexts/PatternContext';
import { StyledPlaylist } from '../styled/StyledPlaylist';
import Track from './Track';

type PlaylistProps = {
  currentStepId: number | null;
};

const maxIndex = 7;

const Playlist = ({ currentStepId }: PlaylistProps) => {
  const { pattern, addTrack } = useContext(PatternContext);

  const tracks = pattern.trackList.map((track, trackId) => {
    const { sound, stepsOn } = track;

    return (
      <Track
        key={`${sound}_${trackId}`}
        trackId={trackId}
        sound={sound}
        stepsOn={stepsOn}
        currentStepId={currentStepId}
      />
    );
  });

  return (
    <StyledPlaylist>
      {tracks}
      {pattern.trackList.indexOf(pattern.trackList[pattern.trackList.length - 1]) < maxIndex && (
        <button onClick={addTrack}>+</button>
      )}
    </StyledPlaylist>
  );
};

export default memo(Playlist);
