import React, { useState, createContext, useCallback } from 'react';
import { DefaultPattern, Pattern } from '../constants/pattern';

type PatternContextProps = {
  children?: React.ReactNode;
};

const PatternContextDefaultValue = {
  pattern: DefaultPattern,
  toggleStep: null as unknown as (trackId: number, stepId: number) => () => void
};

export const PatternContext = createContext(PatternContextDefaultValue);

export function PatternContextProvider(props: PatternContextProps) {
  const [pattern, setPattern] = useState<Pattern>(PatternContextDefaultValue.pattern);

  const toggleStep = useCallback(
    (trackId: number, stepId: number) => () => {
      let newStepsOn;
      const onSteps = pattern.trackList[trackId].stepsOn;

      if (onSteps.indexOf(stepId) === -1) {
        newStepsOn = [...onSteps, stepId];
      } else {
        newStepsOn = onSteps.filter((el) => el !== stepId);
      }
      const newPattern = pattern;
      newPattern.trackList[trackId].stepsOn = newStepsOn;
      setPattern((current) => {
        return {
          ...current,
          ...newPattern
        };
      });
    },
    [pattern, setPattern]
  );

  return (
    <PatternContext.Provider
      value={{
        pattern,
        toggleStep
      }}
      {...props}
    >
      {props.children}
    </PatternContext.Provider>
  );
}
