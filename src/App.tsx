import React, { useState, useEffect } from 'react';
import './App.css';
import { PatternContextProvider } from './contexts/PatternContext';
import Playlist from './components/Playlist';
import Toolbar from './components/Toolbar';
import { useTimer } from './hooks/useTimer';

function App() {
  const baseBPMPerOneSecond = 60;
  const stepsPerBar = 8;
  const beatsPerBar = 4;
  const barsPerSequence = 2;
  const totalSteps = stepsPerBar * barsPerSequence;
  const totalBeats = beatsPerBar * barsPerSequence;

  const [BPM, setBPM] = useState(120);
  const [startTime, setStartTime] = useState(null);
  const [pastLapsedTime, setPastLapse] = useState(0);
  const [currentStepId, setCurrentStep] = useState<number | null>(null);
  const isSequencePlaying = startTime !== null;
  const timePerSequence = (baseBPMPerOneSecond / BPM) * 1000 * totalBeats;
  const timePerStep = timePerSequence / totalSteps;
  const playerTime = useTimer(isSequencePlaying);
  const lapsedTime = isSequencePlaying ? Math.max(0, Number(playerTime) - startTime) : 0;
  const totalLapsedTime = pastLapsedTime + lapsedTime;

  useEffect(() => {
    if (isSequencePlaying) {
      setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps);
    } else {
      setCurrentStep(null);
    }
  }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps]);

  return (
    <div className="App">
      <header className="App-header">
        <PatternContextProvider>
          <Toolbar
            setBPM={setBPM}
            setStartTime={setStartTime}
            setPastLapse={setPastLapse}
            isSequencePlaying={isSequencePlaying}
            startTime={startTime}
            BPM={BPM}
          />
          <Playlist currentStepId={currentStepId} />
        </PatternContextProvider>
      </header>
    </div>
  );
}

export default App;
