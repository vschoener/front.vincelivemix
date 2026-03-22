import { type FunctionComponent, useCallback, useRef, useState } from 'react';
import * as S from './audioplayer-style';
import { InternalAudioPlayer } from './internal-audioplayer';

type Props = {
  audioLink: string;
  duration: string;
  durationInSeconds: number;
};

export const AudioPlayer: FunctionComponent<Props> = ({
  audioLink,
  duration,
  durationInSeconds,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioReady, setAudioReady] = useState(false);

  const setAudioElementRef = useCallback((element: HTMLAudioElement | null) => {
    audioRef.current = element;
    setAudioReady(element !== null);
  }, []);

  return (
    <>
      <S.Audio
        ref={setAudioElementRef}
        preload="none"
        controls
        controlsList="nodownload"
        src={audioLink}
      />
      {audioReady ? (
        <InternalAudioPlayer
          audioRef={audioRef}
          duration={duration}
          durationInSeconds={durationInSeconds}
        />
      ) : null}
    </>
  );
};
