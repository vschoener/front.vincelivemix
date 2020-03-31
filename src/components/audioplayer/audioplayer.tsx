import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
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
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioState, setAudioState] = useState<HTMLAudioElement | null>(audioRef.current);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    setAudioState(audioRef.current);
  }, [audioRef]);

  return (
    <>
      <S.Audio ref={audioRef} preload="none" controls controlsList="nodownload" src={audioLink} />
      {audioState && (
        <InternalAudioPlayer
          audio={audioState}
          duration={duration}
          durationInSeconds={durationInSeconds}
        />
      )}
    </>
  );
};
