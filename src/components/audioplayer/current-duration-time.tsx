import * as S from "./audioplayer-style";
import React from "react";

type Props = {
  time: string;
}

export function CurrentDurationTime({ time }: Props) {
  return (
    <S.Time>{time}</S.Time>
  );
}
