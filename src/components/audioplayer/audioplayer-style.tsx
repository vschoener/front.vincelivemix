import styled, { css, keyframes } from 'styled-components';
import { PreloadState } from './preload-state.enum';

type PlayPauseWrapperProps = {
  playing: boolean;
};

type PlayPauseButtonProps = {
  playing: boolean;
  preloadState: PreloadState;
};

type VolumeProps = {
  size: number;
};

type BarPlayedProps = {
  percent: number;
};

const rotateLoader = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

export const Audio = styled.audio`
  display: none;
  visibility: hidden;
`;

export const AudioPlayer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  border: none;
  border-radius: 0;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  background: #fff;
`;

export const PlayPauseWrapper = styled.div<PlayPauseWrapperProps>`
  width: 35px;
  height: 35px;
  transition: all 0 ease-in-out;
  background-color: ${({ playing }) => (playing ? 'transparent' : '#f55656')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ playing }) => (playing ? 'rgba(235,79,26,.1)' : '#f55656')};
  }
`;

/**
 * We use playing props to generate the right css to keep nice transition, otherwise it seems its nit possible
 */
export const PlayPauseButton = styled.a<PlayPauseButtonProps>`
  content: '';
  ${({ playing, preloadState }) =>
    !playing &&
    [PreloadState.NOT_STARTED, PreloadState.HAS_PRELOADED].includes(preloadState) &&
    css`
      justify-content: center;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: none;
      border-bottom: 7px solid transparent;
      margin-left: 3px;
      border-left: 12px solid #ffffff;
    `}

   ${({ preloadState }) =>
     preloadState === PreloadState.PRELOADING &&
     css`
       justify-content: center;
       width: 0;
       height: 0;
       border-top: 7px solid transparent;
       border-right: none;
       border-bottom: 7px solid transparent;
       margin-left: 3px;
       border-left: 12px solid #ffffff;
       animation: ${rotateLoader} 1.3s infinite;
     `}

  ${({ playing }) =>
    playing &&
    css`
      display: flex;
      justify-content: space-between;
      width: 12px;
      height: 14px;

      &::before {
        content: '';
        width: 4px;
        height: 14px;
        background-color: #fd4f1a;
      }
      &::after {
        content: '';
        width: 4px;
        height: 14px;
        background-color: #fd4f1a;
      }
    `}
`;

const TimeGlobal = styled.div`
  font-size: 14px;
  color: #232323;
  font-weight: 600;
  display: flex;
  width: 40px;
  justify-content: center;
`;

export const Time = styled(TimeGlobal)`
  margin-left: 24px;
`;

export const Duration = styled(TimeGlobal)`
  margin-right: 24px;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  margin: 0 12px;
  height: 12px;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 2px;
    height: 5px;
    background-color: #e1e1e1;
  }

  > div {
    top: 2px;
    position: absolute;
    left: 0;
  }
`;

export const BarLoaded = styled.div`
  display: none;
  z-index: 1;
  height: 2px;
  background: #bec8d2;
`;

export const BarPlayed = styled.div<BarPlayedProps>`
  background: #f55656;
  height: 5px;
  -webkit-box-orient: horizontal;
  flex-direction: row-reverse;
  z-index: 2;
  width: ${({ percent }) => `${percent}%`};
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VolumeButton = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const VolumeButtonLink = styled.a`
  display: flex;
  width: 6px;
  height: 8px;
  background-color: #9a9fb0;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 9px solid #9a9fb0;
    border-bottom: 8px solid transparent;
    border-left: none;
    top: -4px;
  }

  &::after {
    left: 10px;
    top: 0;
    width: 6px;
    height: 6px;
    border: 6px double #9a9fb0;
    border-width: 6px 6px 0 0;
    border-radius: 0 12px 0 0;
    transform: rotate(45deg);
  }
`;

export const VolumeBarWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 8px;

  > div {
    position: relative;
    display: flex;
    width: 60px;
    cursor: pointer;
    background-color: #bec8d2;
  }
`;

export const VolumeBarInnerWrapper = styled.div`
  height: 5px;
`;

export const Volume = styled.div<VolumeProps>`
  background-color: #f55656;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ size }) => `${size}%`};
`;
