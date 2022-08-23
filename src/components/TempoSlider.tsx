import React from 'react';
import { StyledTempoSliderContainer, StyledTempoSlider } from '../styled/StyledTempoSlider';

type TempoSliderProps = {
  tempo: number;
  onTempoChange: (tempo: string) => void;
};

export const TempoSlider = ({ tempo, onTempoChange }: TempoSliderProps) => (
  <StyledTempoSliderContainer>
    <p>{tempo}</p>
    <StyledTempoSlider
      type="range"
      min="30"
      max="300"
      value={tempo}
      onChange={(e) => {
        onTempoChange(e.target.value);
      }}
    />
  </StyledTempoSliderContainer>
);
