import React, { useContext, useEffect, memo, useCallback } from 'react';
import { SoundName } from '../constants/sounds';
import { PatternContext } from '../contexts/PatternContext';
import { StyledStep } from '../styled/StyledStep';

export type StepProps = {
  stepId: number;
  trackId: number;
  isStepOn: boolean;
  sound: SoundName;
  isStepPlaying: boolean;
  play: (sound: SoundName) => void;
};

const Step = ({ stepId, trackId, isStepOn, sound, isStepPlaying, play }: StepProps) => {
  const { toggleStep } = useContext(PatternContext);

  useEffect(() => {
    if (isStepOn && isStepPlaying) {
      play(sound);
    }
  }, [isStepOn, isStepPlaying, play]);

  const noteClicked = useCallback(() => {
    toggleStep(trackId, stepId);
    if (isStepOn) {
      return;
    }
    play(sound);
  }, [toggleStep, play]);

  return <StyledStep isStepOn={isStepOn} isStepPlaying={isStepPlaying} onClick={noteClicked} />;
};

export default memo(Step);
