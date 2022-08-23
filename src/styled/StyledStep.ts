import styled from 'styled-components';

interface StyledStepProps {
  isStepOn: boolean;
  isStepPlaying: boolean;
}

export const StyledStep = styled.div<StyledStepProps>`
  width: 32px;
  height: 49px;
  border: 1px solid ${(props) => (props.isStepPlaying ? 'red' : 'black')};
  background: ${(props) => (props.isStepOn ? 'black' : 'white')};
`;
