import React from "react";

import * as S from './subscribe-style';

function Subscribe() {
  return (
    <>
      <S.MainSection className="welcome-area">
        <div className="welcome-slides">
          <div className="welcome-welcome-slide bg-img bg-overlay">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome-text">
                    <h2 data-animation="fadeInUp" data-delay="100ms">Subscribe Today</h2>
                    <h5 data-animation="fadeInUp" data-delay="300ms">Please schedule a podcast post, to make it visible
                      here.</h5>
                    <div className="welcome-btn-group">
                      <a className="btn poca-btn m-2 ml-0 disabled" data-animation="fadeInUp" data-delay="500ms">Subscribe
                        with iTunes</a>
                      <a href="http://www.vincelivemix.fr/api/rss" target="_blank" className="btn poca-btn btn-2 m-2" data-animation="fadeInUp" data-delay="700ms">Subscribe
                        with RSS</a>
                    </div>
                  </div>
                  <div className="poca-music-area mt-100 d-flex align-items-center flex-wrap" data-animation="fadeInUp"
                       data-delay="900ms">
                    <div className="poca-music-thumbnail">
                      <img src="https://vincelivemix.s3.eu-west-3.amazonaws.com/images/podcast/vincelivemix-main.jpg" alt="" />
                    </div>
                    <div className="poca-music-content">
                      <span className="music-published-date">September 29, 2019</span>
                      <h2>Live Mix 72 - Resurrection</h2>
                      <div className="music-meta-data">
                        <p>By <a href="#" className="music-author">Vince</a> | <a
                          href="#" className="music-duration">00:47:26</a></p>
                      </div>
                      <div className="poca-music-player">
                        <audio preload="auto" controls>
                          <source src="https://vincelivemix.s3.eu-west-3.amazonaws.com/episodes/Vince+Live+Mix+72+-+Resurrection.mp3" />
                        </audio>
                      </div>
                      <div className="likes-share-download d-flex align-items-center justify-content-between">
                        <a><i className="fa fa-heart" aria-hidden="true"></i> Like (coming soon)</a>
                        <div>
                          <a className="mr-4"><i className="fa fa-share-alt" aria-hidden="true"></i> Share (coming soon)</a>
                          <a><i className="fa fa-download" aria-hidden="true"></i> Download (coming soon)</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </S.MainSection>
    </>
  )
}

export default Subscribe;
