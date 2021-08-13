import * as React from 'react';
import '../css/index.scss';

const IndexPage = (): React.ReactNode => {
  return (
    <main className="root">
      <title>Dolev Hadar</title>
      <h1 className="title">Dolev Hadar</h1>
      <div className="description">
        <p>💻 A Full stack engineer with 6+ years of experience.</p>
        <p>
          🌈 Front end oriented with extensive knowledge in JavaScript,
          Typescript, React, React Native, GraphQL, Relay, Redux, JSS, Sass and
          Flow
        </p>
        <p>
          ⚙️ Backend skills include knowledge in PHP (Hack), Go, various ORMs,
          Docker, Linux, Git and Github, Mercurial, SQL, Bash
        </p>
        <p>
          ✨ Self learner, can lead projects from planning to execution, team
          player
        </p>
      </div>
      <div className="under-construction">
        <p>🚧 Under Construction 🚧</p>
      </div>
    </main>
  );
};

export default IndexPage;
