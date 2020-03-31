import React from 'react'

import Head from './head'
import {LanguageHeader} from "./language/language-header";
import {useTranslation} from "react-i18next";

import * as S from './header.styled';

type Props = {
  pageTitle?: string
};

function Header({ pageTitle }: Props) {
  const { i18n } = useTranslation();

  const currentLang = i18n.language.toUpperCase();

  return (
    <>
      <Head title={pageTitle} />

      {/*<div id="preloader">*/}
      {/*  <div className="preloader-thumbnail">*/}
      {/*    <img src="/img/core-img/preloader.png" alt="" />*/}
      {/*  </div>*/}
      {/*</div>*/}

      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off light left">
            <nav className="classy-navbar justify-content-between" id="pocaNav">
              <S.LogoWrapper>
                <a className="nav-brand" href="/">
                  <S.LogoImage src="/img/logo.jpg" /> <S.LogoText>Vince Live Mix</S.LogoText>
                </a>
              </S.LogoWrapper>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                </span>
              </div>

              <div className="classy-menu">

                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>

                <div className="classynav">
                  <ul id="nav">
                    <li className="current-item"><a href="/">Home</a></li>
                    <li>
                      <LanguageHeader currentLang={currentLang} />
                    </li>
                    {/*  <ul className="dropdown">*/}
                    {/*    <li><a href="/index.html">- Home</a></li>*/}
                    {/*    <li><a href="/podcast.html">- Podcast</a></li>*/}
                    {/*    <li><a href="/single-podcast.html">- Single Podcast</a></li>*/}
                    {/*    <li><a href="/about.html">- About Us</a></li>*/}
                    {/*    <li><a href="/blog.html">- Blog</a></li>*/}
                    {/*    <li><a href="/single-blog.html">- Blog Details</a></li>*/}
                    {/*    <li><a href="/contact.html">- Contact</a></li>*/}
                    {/*    <li><a href="#">- Dropdown</a>*/}
                    {/*      <ul className="dropdown">*/}
                    {/*        <li><a href="#">- Dropdown Item</a></li>*/}
                    {/*        <li><a href="#">- Dropdown Item</a>*/}
                    {/*          <ul className="dropdown">*/}
                    {/*            <li><a href="#">- Even Dropdown</a></li>*/}
                    {/*            <li><a href="#">- Even Dropdown</a></li>*/}
                    {/*            <li><a href="#">- Even Dropdown</a></li>*/}
                    {/*            <li><a href="#">- Even Dropdown</a></li>*/}
                    {/*          </ul>*/}
                    {/*        </li>*/}
                    {/*        <li><a href="#">- Dropdown Item</a></li>*/}
                    {/*        <li><a href="#">- Dropdown Item</a></li>*/}
                    {/*      </ul>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                    {/*<li><a href="/podcast.html">Podcasts</a></li>*/}
                    {/*<li><a href="/about.html">About</a></li>*/}
                    {/*<li><a href="#">Blog</a>*/}
                    {/*  <ul className="dropdown">*/}
                    {/*    <li><a href="/blog.html">- Blog</a></li>*/}
                    {/*    <li><a href="/single-blog.html">- Blog Details</a></li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                    {/*<li><a href="/contact.html">Contact</a></li>*/}
                  </ul>

                  <div className="top-search-area">
                    {/*<form action="index.html" method="post">*/}
                    {/*  <input type="search" name="top-search-bar" className="form-control"*/}
                    {/*         placeholder="Search and hit enter..." />*/}
                    {/*    <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>*/}
                    {/*</form>*/}
                  </div>

                  <div className="top-social-area">
                    <a href="https://www.facebook.com/pg/vincelivemix" className="fa fa-facebook" aria-label="Facebook page"></a>
                    <a href="https://twitter.com/vincelivemix" className="fa fa-twitter" aria-label="Twitter page"></a>
                    {/*<a href="#" className="fa fa-pinterest" aria-hidden="true"></a>*/}
                    <a href="https://www.instagram.com/vincent.schoener" className="fa fa-instagram" aria-label="Instagram page"></a>
                    {/*<a href="#" className="fa fa-youtube-play" aria-hidden="true"></a>*/}
                  </div>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
