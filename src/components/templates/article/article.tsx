import { memo } from 'react';
import { BookIcon, ForkIcon, StarIcon } from '../../../constants/icons';
import './article.css';

function Article(props: any) {
  const { repositoryName, username, url, description, language, totalStars, forks, builtBy, starsSince } = props.data;
  return (
    <div className="article border-top" key={props.rank}>
      <div><h3 className="h3"><a href={url}><span><BookIcon className="book-icon" /></span>{username} / {repositoryName}</a>
        <div className="star"><StarIcon className="star-icon" />Star</div></h3>
      </div>
      <div className="desc">{description}</div>
      <div className="footer">
        {language && <span className="span">{language}</span>}
        <span className="span total-stars"><StarIcon className="star-icon" />{totalStars}</span>
        <span className="span total-forks"><ForkIcon className="fork-icon" />{forks}</span>
        <span>Built by
          {builtBy.map((el: any, index: number) =>
            <img className="avatar-user" src={el.avatar} key={`img${index}`}/>
          )}
        </span>
        <span className="stars-today"><StarIcon className="star-icon" /> {starsSince} stars today</span>
      </div>
    </div>
  );
}

export default memo(Article);