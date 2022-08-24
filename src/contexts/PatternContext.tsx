import React, { useState, createContext, useCallback } from 'react';
import { DefaultPattern, Pattern } from '../constants/pattern';
import { SoundName } from '../constants/sounds';

type PatternContextProps = {
  children?: React.ReactNode;
};

const PatternContextDefaultValue = {
  pattern: DefaultPattern,
  toggleStep: null as unknown as (trackId: number, stepId: number) => void,
  addTrack: () => {
    console.log('addTrack');
  },
  editTrack: null as unknown as (trackId: number, sound: SoundName) => void,
  removeTrack: null as unknown as (trackId: number) => void
};

export const PatternContext = createContext(PatternContextDefaultValue);

export function PatternContextProvider(props: PatternContextProps) {
  const [pattern, setPattern] = useState<Pattern>(PatternContextDefaultValue.pattern);
  const toggleStep = useCallback(
    (trackId: number, stepId: number) => {
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

  const addTrack = useCallback(() => {
    const newPattern = pattern;
    newPattern.trackList.push({
      sound: SoundName.ClosedHH,
      stepsOn: []
    });
    setPattern((current) => {
      return {
        ...current,
        ...newPattern
      };
    });
  }, [pattern, setPattern]);

  const editTrack = useCallback(
    (trackId: number, sound: SoundName) => {
      const newPattern = pattern;
      newPattern.trackList[trackId].sound = sound;
      setPattern((current) => {
        return {
          ...current,
          ...newPattern
        };
      });
    },
    [pattern, setPattern]
  );

  const removeTrack = useCallback(
    (trackId: number) => {
      const newPattern = pattern;
      newPattern.trackList.splice(trackId, 1);
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
        toggleStep,
        addTrack,
        editTrack,
        removeTrack
      }}
      {...props}
    >
      {props.children}
    </PatternContext.Provider>
  );
}
