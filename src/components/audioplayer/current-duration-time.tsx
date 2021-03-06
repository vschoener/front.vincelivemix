import React from 'react';
import * as S from './audioplayer-style';

type Props = {
  time: string;
};

export function CurrentDurationTime({ time }: Props) {
  return <S.Time>{time}</S.Time>;
}
