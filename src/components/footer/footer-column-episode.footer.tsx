import { useTranslation } from "react-i18next";
import { EpisodesListDto } from "../../server/dto/episodes-list.dto";
import {i18n} from "i18next";
import useSWR from "swr";
import {getEpisodes} from "../../client/services/episode.service";

function renderLastEpisodes(episodes: EpisodesListDto, i18n: i18n) {
  const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return episodes.map(episode => (
    <div className="single-latest-episodes">
      <p className="episodes-date">{new Date(episode.publishedAt).toLocaleDateString(i18n.language, dateFormat)}</p>
      <a href={episode.audioLink} className="episodes-title">{episode.title}</a>
    </div>
  ));
}

export function FooterColumnEpisode() {
  const { t, i18n } = useTranslation();
  const { data: episodes } = useSWR('/api/episodes', getEpisodes);

  if (!episodes) {
    return <></>
  }

  return (
    <div className="single-footer-widget mb-80">
      <h4 className="widget-title">{t('footer.latest-episode.title')}</h4>
      {renderLastEpisodes(episodes, i18n)}
    </div>
  );
}
