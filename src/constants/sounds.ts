export enum SoundName {
  Crash = 'crash',
  Kick = 'kick',
  Snare = 'snare',
  OpenHH = 'openHH',
  ClosedHH = 'closedHH',
  Ride = 'ride',
  Tom1 = 'tom1',
  Tom2 = 'tom2'
}

export const DefaultSoundKit = {
  [SoundName.Crash]: '/sounds/crash.mp3',
  [SoundName.Kick]: '/sounds/kick.mp3',
  [SoundName.Snare]: '/sounds/snare.mp3',
  [SoundName.OpenHH]: '/sounds/opened_hh.mp3',
  [SoundName.ClosedHH]: '/sounds/closed_hh.mp3',
  [SoundName.Ride]: '/sounds/ride.mp3',
  [SoundName.Tom1]: '/sounds/tom_1.mp3',
  [SoundName.Tom2]: '/sounds/tom_2.mp3'
};
