import React, { memo, useCallback } from 'react';
import { TempoSlider } from './TempoSlider';

type ToolbarProps = {
  setStartTime: any;
  setPastLapse: any;
  setBPM: any;
  isSequencePlaying: boolean;
  startTime: number | null;
  BPM: number;
};

const Toolbar = ({
  setStartTime,
  setPastLapse,
  setBPM,
  isSequencePlaying,
  startTime,
  BPM
}: ToolbarProps): JSX.Element => {
  function togglePlayback() {
    if (isSequencePlaying) {
      setPastLapse((l: number) => l + performance.now() - Number(startTime));
      setStartTime(null);
    } else {
      setStartTime(performance.now());
    }
  }

  function stopPlayback() {
    setPastLapse(0);
    setStartTime(null);
  }

  const updateBPM = useCallback(
    (tempo: string) => {
      setBPM(tempo);
    },
    [setBPM]
  );

  return (
    <nav className="toolbar">
      <button className="form_element button_stop" onClick={stopPlayback} aria-label="Stop">
        <svg width="14" height="14" viewBox="0 0 14 14">
          <rect className="button_icon_path" x="2" y="2" width="10" height="10" />
        </svg>
      </button>
      <button
        className="form_element button_play_pause"
        onClick={togglePlayback}
        aria-label="Play / Pause"
      >
        <svg width="14" height="14" viewBox="8 8 20 20">
          {isSequencePlaying && (
            <path
              className="button_icon_path"
              id="pause-icon"
              data-state="playing"
              d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"
            />
          )}
          {!isSequencePlaying && (
            <path
              className="button_icon_path"
              id="play-icon"
              data-state="paused"
              d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"
            />
          )}
        </svg>
      </button>
      <TempoSlider tempo={BPM} onTempoChange={updateBPM} />
    </nav>
  );
};

export default memo(Toolbar);
