import { useState, useEffect, useCallback } from 'react';
import { DefaultSoundKit, SoundName } from '../constants/sounds';
import Sound from '../utils/Sound';

export const useSound = (soundName: SoundName) => {
  const [sound, setSound] = useState<Sound | null>(null);
  const play = useCallback(() => sound?.play(), [sound]);

  useEffect(() => {
    setSound(new Sound(DefaultSoundKit[soundName]));
  }, [soundName]);

  return { play };
};
