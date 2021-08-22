import './tab.css';
import { memo } from 'react';

/**
 * Tab component - Routes between Repositories and Developers
 * 
 */

function Tab({ active }: any) {
    return (
      <>
        <nav className="subnav" aria-label="trending">
            <a className={`subnav-item ${active === 'repositories' ? "active" : ""}`} href="/trending">Repositories</a>
            <a className={`subnav-item ${active === 'developers' ? "active" : ""}`} href="/trending/developers">Developers</a>
        </nav>
      </>
    );
  }

export default memo(Tab);