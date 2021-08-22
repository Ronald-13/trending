import { memo } from 'react';
import { BookIcon, HeartIcon, PopularIcon } from '../../../constants/icons';
import './developer.css';

function Developer(props: any) {
  const { name, avatar, url, username, rank, popularRepository} = props.data;
  return (
    <div className="developer border-top d-flex" key={props.rank}>
      <a className="rank">{rank}</a>
      <div className="mx-3"><img className="avatar-user" src={avatar} /></div>
      <div className="d-sm-flex flex-auto">
        <div className="col-sm-8 d-md-flex">
          <div className="col-md-6 block-1">
            <h1 className="h3"><a href={url}>{name}</a></h1>
            <p className="para">{username}</p>
          </div>
          <div className="col-md-6 block-2">
            {popularRepository.repositoryName && 
              <>
                <div className="first"><PopularIcon className="popular-icon"/> POPULAR REPO</div>
                <h1 className="h4 second"> <a><BookIcon className="book-icon" /> {popularRepository.repositoryName}</a></h1>
                <p>{popularRepository.description}</p>
              </>
            }
          </div>
        </div>
        <div className="col-sm-4 d-flex flex-justify-end ml-sm-3">
          <div className="sponsor"><HeartIcon className="heart-icon"/>Sponsor</div>
          <div className="follow">Follow</div>
        </div>
      </div>
    </div>
  );
}

export default memo(Developer);