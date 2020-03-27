import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { getHighLightEpisode } from "../../client/services/episode.service";
import { HighLightEpisodeDto } from "../../server/dto/highlight-episode.dto";
import {i18n, TFunction} from "i18next";

function renderWithEpisode(highlightEpisode: HighLightEpisodeDto, t: TFunction, i18n: i18n) {
  const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <div className="poca-music-thumbnail">
        <img src={highlightEpisode?.coverImage} alt="live-mix-72-cover" />
      </div>
      <div className="poca-music-content">
        <span className="music-published-date">{new Date(highlightEpisode?.publishedAt).toLocaleDateString(i18n.language, dateFormat)}</span>
        <h2>{highlightEpisode?.title}</h2>
        <div className="music-meta-data">
          <p>By <a href="#" className="music-author">Vince</a> | <a
            href="#" className="music-duration">{highlightEpisode?.itunesDuration}</a></p>
        </div>
        <div className="poca-music-player">
          <audio preload="none" controls controlsList="nodownload">
            <source src={highlightEpisode?.audioLink} />
          </audio>
        </div>
        <div className="likes-share-download d-flex align-items-center justify-content-between">
          <a>
            <i className="fa fa-heart" aria-hidden="true"></i> { t('subscribe.like') } ({ t('coming-soon') })
          </a>
          <div>
            <a className="mr-4"><i className="fa fa-share-alt" aria-hidden="true"></i> { t('subscribe.share') } ({ t('coming-soon') })</a>
            <a href={highlightEpisode?.audioLink} download><i className="fa fa-download" aria-hidden="true"></i> { t('subscribe.download') }</a>
          </div>
        </div>
      </div>
    </>
  );
}

export function HighLightEpisode() {
  const { t, i18n } = useTranslation();

  const [highlightEpisode, setHighlightEpisode] = useState<HighLightEpisodeDto>();

  useEffect(() => {
    const fetchHighLightEpisode = async () => {
      const highlightEpisode = await getHighLightEpisode();
      setHighlightEpisode(highlightEpisode);
    };

    fetchHighLightEpisode();
  }, []);

  return (
    <div className="poca-music-area mt-100 d-flex align-items-center flex-wrap" data-animation="fadeInUp"
         data-delay="900ms">
      {highlightEpisode ? renderWithEpisode(highlightEpisode, t, i18n) : <>{t('loading')}...</>}
    </div>
  )
}
