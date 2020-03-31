import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './language.styled';

type LanguageHeaderProps = {
  currentLang: string;
};

export const LanguageHeader = ({ currentLang }: LanguageHeaderProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => async () => {
    await i18n.changeLanguage(lng);
  };

  return (
    <>
      <S.Link>
        <img src={`img/flags/${currentLang}.svg`} alt="Current flag" width={16} height={16} />
      </S.Link>
      <ul className="dropdown">
        <li>
          <S.Link onClick={changeLanguage('en')}>
            <img src="img/flags/EN.svg" alt="French flag" width={16} height={16} /> EN
          </S.Link>
        </li>
        <li>
          <S.Link onClick={changeLanguage('fr')}>
            <img src="/img/flags/FR.svg" alt="French flag" width={16} height={16} /> FR
          </S.Link>
        </li>
      </ul>
    </>
  );
};
