import React, { memo } from 'react';
import { SoundName } from '../constants/sounds';
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
    <div style={{ width: '800px' }}>
      <header>{sound}</header>
      <main className="track_notes" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {steps}
      </main>
    </div>
  );
};

export default memo(Track);
