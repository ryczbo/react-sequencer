import React, { useContext, memo } from 'react';
import { PatternContext } from '../contexts/PatternContext';
import Track from './Track';

type PlaylistProps = {
  currentStepId: number | null;
};

const Playlist = ({ currentStepId }: PlaylistProps) => {
  const { pattern } = useContext(PatternContext);

  // const reverb = new Tone.Reverb({ decay: 1.5, wet: 0.6 }).toDestination();
  // player.connect(reverb);
  const tracks = pattern.trackList.map((track, trackId) => {
    const { sound, stepsOn } = track;

    return (
      <Track
        key={sound}
        trackId={trackId}
        sound={sound}
        stepsOn={stepsOn}
        currentStepId={currentStepId}
      />
    );
  });

  return <div className="track-list">{tracks}</div>;
};

export default memo(Playlist);
