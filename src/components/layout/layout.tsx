import { memo } from 'react';
import './layout.css';

function layout(props: any) {
    return (
      <>
        <div className="container-a border-bottom">
          <div className="block text-center">
            <h1 className="h1">Trending</h1>
            <p className="desc">
              See what the GitHub community is most excited about today.
            </p>
          </div>
        </div>

        <main>{props.children}</main>
      
      </>
    );
  }

export default memo(layout);