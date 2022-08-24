import React, { memo, useContext } from 'react';
import { SoundName } from '../constants/sounds';
import { PatternContext } from '../contexts/PatternContext';
import { useSound } from '../hooks/useSound';
import Step from './Step';

export type TrackProps = {
  sound: SoundName;
  stepsOn: number[];
  trackId: number;
  currentStepId: number | null;
};

const stepCount = 16;

const Track = ({ sound = SoundName.Kick, stepsOn, trackId, currentStepId }: TrackProps) => {
  const { play } = useSound(sound);
  const { removeTrack, editTrack } = useContext(PatternContext);

  const editTrackHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    editTrack(trackId, event.target.value as SoundName);
  };

  const steps = [...Array(stepCount)].map((el, i) => {
    const isStepOn = stepsOn.indexOf(i) !== -1;
    const isStepPlaying = currentStepId === i;
    const stepId = i;

    return (
      <Step
        key={i}
        isStepOn={isStepOn}
        trackId={trackId}
        stepId={stepId}
        sound={sound}
        isStepPlaying={isStepPlaying}
        play={play}
      />
    );
  });

  return (
    <div
      style={{
        width: '1000px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <header
        style={{ width: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <select value={sound} onChange={editTrackHandler}>
          {Object.values(SoundName).map((sound) => {
            return (
              <option key={sound} value={sound}>
                {sound}
              </option>
            );
          })}
        </select>
        {trackId !== 0 && <button onClick={() => removeTrack(trackId)}>-</button>}
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-around', width: '600px' }}>
        {steps}
      </main>
    </div>
  );
};

export default memo(Track);
