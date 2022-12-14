import styled from 'styled-components';

export const StyledTempoSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const StyledTempoSlider = styled.input`
  margin: auto 1%;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 40px;
  width: 150px;
  cursor: pointer;
  border-radius: 0;
  border: none;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: #787885;
  }
  &::-moz-range-track {
    background: #787885;
    height: 100%;
  }
  &::-moz-range-progress {
    background-color: #787885;
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: #cbff8b;
    box-shadow: -100vw 0 0 100vw hsl(240, 5%, 22%);
  }
  &::-moz-range-thumb {
    -moz-appearance: none;
    width: 20px;
    height: 40px;
    background: #cbff8b;
    box-shadow: -100vw 0 0 100vw hsl(240, 5%, 22%);
  }
  &:focus::-webkit-slider-runnable-track {
    background: #b6b6b6;
  }
  &:focus::-moz-range-track {
    background: #787885;
  }
`;
