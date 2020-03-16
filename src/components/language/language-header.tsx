import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageHeader = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    return async () => {
      await i18n.changeLanguage(lng);
    }
  };

  return (
    <ul className="dropdown">
      <li>
        <a href="#" onClick={changeLanguage('en')}>
          <img src="img/flags/EN.svg" alt="French flag" width={16} height={16}/> EN
        </a>
      </li>
      <li>
        <a href="#" onClick={changeLanguage('fr')}>
          <img src="/img/flags/FR.svg" alt="French flag" width={16} height={16}/> FR
        </a>
      </li>
    </ul>
  );
};
