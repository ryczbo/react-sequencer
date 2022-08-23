import { SoundName } from './sounds';

interface Track {
  sound: SoundName;
  stepsOn: Array<number>;
}

export type Pattern = {
  trackList: Track[];
};

export const DefaultPattern: Pattern = {
  trackList: [
    {
      sound: SoundName.Kick,
      stepsOn: [0, 2, 4]
    },
    {
      sound: SoundName.Snare,
      stepsOn: []
    },
    {
      sound: SoundName.ClosedHH,
      stepsOn: [0, 2, 4, 6, 8, 10, 12, 14]
    },
    {
      sound: SoundName.OpenHH,
      stepsOn: []
    },
    {
      sound: SoundName.Ride,
      stepsOn: []
    },
    {
      sound: SoundName.Crash,
      stepsOn: []
    },
    {
      sound: SoundName.Tom1,
      stepsOn: []
    },
    {
      sound: SoundName.Tom2,
      stepsOn: []
    }
  ]
};
