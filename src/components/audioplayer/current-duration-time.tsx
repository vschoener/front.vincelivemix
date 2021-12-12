import React from 'react';
import * as S from './audioplayer-style';

type Props = {
  time: string;
};

export const CurrentDurationTime = ({ time }: Props) => <S.Time>{time}</S.Time>;
