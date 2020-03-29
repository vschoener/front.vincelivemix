import React, {useEffect, useRef, useState} from "react";
import * as S from "./audioplayer-style";
import {PreloadState} from "./preload-state.enum";

type Props = {
  audioLink: string;
  duration: string;
  durationInSeconds: number;
}

export function AudioPlayer({ audioLink, duration, durationInSeconds}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioState, setAudioState] = useState<HTMLAudioElement>(audioRef.current!);
  const [isPlaying, setPlayingState] = useState<boolean>(false);
  const [currentPositionPercent, setCurrentPositionPercent] = useState<number>(0);
  const [currentSpeakerPositionPercent, setSpeakerPositionPercent] = useState<number>(100);
  const [oldCurrentSpeakerPositionPercent, setOldSpeakerPositionPercent] = useState<number>(100);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setSpeakerStatus] = useState<boolean>(false);
  const [isPreloadingSong, setPreloadingStatus] = useState<PreloadState>(PreloadState.NOT_STARTED);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    setAudioState(audioRef.current);
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime((audioRef.current?.currentTime || 0) >> 0);
      });

      audioRef.current.addEventListener('loadeddata', () => {
        setPreloadingStatus(PreloadState.HAS_PRELOADED);
        setPlayingState(true);
      });
    }
  }, [audioRef]);

  useEffect(() => {
    setCurrentPositionPercent(getDurationInPercent())
  }, [currentTime]);

  useEffect(() => {
    if (!audioState) {
      return;
    }

    audioState.volume = currentSpeakerPositionPercent / 100;
    setSpeakerStatus(!!currentSpeakerPositionPercent)
  }, [currentSpeakerPositionPercent]);

  const play = async () => {
    if (isPreloadingSong === PreloadState.NOT_STARTED) {
      setPreloadingStatus(PreloadState.PRELOADING);
    }

    await audioState.play();

    if (isPreloadingSong === PreloadState.HAS_PRELOADED) {
      setPlayingState(true);
    }
  };

  const pause = async () => {
    await audioState.pause();
    setPlayingState(false);
  };

  const changeState = async () => isAudioPlaying() ? pause() : play();

  const isAudioPlaying = () => isPlaying;

  const getDurationInPercent = () => {
    return currentTime * 100 / durationInSeconds;
  };

  const getPositionXFromTarget = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.pageX - currentTargetRect.left;

    return offsetX * 100 / currentTargetRect.width;
  };

  const jumpToSongPosition = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Updating this instead of setCurrentTime allow to be catch by the original event listener
    // That calls this method. It also avoid a duplicate rerender issue kind of loop/lagging effect
    audioState.currentTime = (getPositionXFromTarget(event) * durationInSeconds / 100) >> 0;
  };

  const jumpToVolumeSpeaker = (event:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSpeakerPositionPercent(getPositionXFromTarget(event) >> 0);
  };

  const getCurrentTimeFormatted = () => {
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor(currentTime / 60) % 60;
    const seconds = currentTime % 60;

    return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":")
  };

  const toggleSpeaker = () => {
    setSpeakerStatus(!isMuted);

    if (isMuted) {
      setOldSpeakerPositionPercent(currentSpeakerPositionPercent);
      setSpeakerPositionPercent(0);

      return ;
    }

    setSpeakerPositionPercent(oldCurrentSpeakerPositionPercent);
  };

  return (
    <>
      <S.Audio
        ref={audioRef}
        preload="none"
        controls
        controlsList="nodownload"
        src={audioLink}
      />
      {audioState &&
        <S.AudioPlayer>
          <S.PlayPauseWrapper playing={isAudioPlaying()} >
            <S.PlayPauseButton onClick={changeState} playing={isAudioPlaying()} preloadState={isPreloadingSong}/>
          </S.PlayPauseWrapper>
          <S.Time>{getCurrentTimeFormatted()}</S.Time>
          <S.Bar onClick={jumpToSongPosition}>
            <S.BarLoaded />
            <S.BarPlayed percent={currentPositionPercent} />
          </S.Bar>
          <S.Duration>{duration}</S.Duration>
          <S.VolumeWrapper>
            <S.VolumeButton>
              <S.VolumeButtonLink onClick={toggleSpeaker}/>
            </S.VolumeButton>
            <S.VolumeBarWrapper onClick={jumpToVolumeSpeaker}>
              <S.VolumeBarInnerWrapper>
                <S.Volume size={currentSpeakerPositionPercent} />
              </S.VolumeBarInnerWrapper>
            </S.VolumeBarWrapper>
          </S.VolumeWrapper>
        </S.AudioPlayer>
      }
    </>
  )
}
