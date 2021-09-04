import * as React from 'react';
import GithubIcon from '../images/iconmonstr-github-1.svg';
import LinkedInIcon from '../images/iconmonstr-linkedin-4.svg';
import '../css/index.scss';

const IndexPage = (): React.ReactNode => {
  return (
    <main className="root">
      <title>DLVHDR</title>
      <nav>
        <p>DLVHDR</p>
        <a href="https://github.com/dlvhdr" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/dolev-hadar/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </nav>
      <h1 className="title">
        Hey, I&apos;m <span className="primary">Dolev</span>
      </h1>
      <div className="description">
        <p>
          I&apos;m a <span className="primary">frontend engineer</span> and
          wishful UI Designer.
        </p>
        <p>I love to build websites and learn new stuff.</p>
      </div>
      <div className="under-construction">
        <span className="sign">🚧</span>
        <p>Under Construction</p>
        <span className="sign">🚧</span>
      </div>
    </main>
  );
};

export default IndexPage;
