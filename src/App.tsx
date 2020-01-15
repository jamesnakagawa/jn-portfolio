import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Menu} from './Menu';
import {Portfolio} from './Portfolio';
import {KiveMultiRun} from "./KiveMultiRun"
import {Link} from 'react-router-dom';
import './App.sass';

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  const pageTitle = "James Nakagawa";
  const easterEggGlyph = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAFCA" +
    "YAAABbyvyAAAAASklEQVQoz52Q2woAIAhD9/8/fSoKupgW+qDIJtuUJNSL0bedibftwQ1wu" +
    "B9VYJ8rJzPBS8Tp0poxCaLEroshhPKJDsGYpP/XIR8v0PB6hkw5na0AAAAASUVORK5CYII=";
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <h1>
          {/*<button onClick={() => setShowMenu(!showMenu)}>
            Toggle Menu
          </button>*/}
          {pageTitle}
          </h1>
          <nav className="nav">
            <Menu categories={[
              {url: "/", name: "Home"},
              {url: "/portfolio", name: "Graphic Design"},
              {url: "/interface-kive", name: "Sample Interface"}
              /*{url: "/cv", name: "CV"},
              {url: "/contact", name: "Contact"}*/
            ]}/>
              
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/" exact>
              <section id="main">
              <img className="img-responsive img-circle" alt="Portrait of me" width="70" src="img/portrait.jpg"/><br/>

              <p>Hi, I'm James. I'm a software developer from Vancouver, BC.</p>

              <p>Using my background in graphic design, I research, design, build, and manage UX features within <abbr title="Single-Page Architecture">SPA</abbr> applications built on React. I have extensive experience in writing JavaScript/TypeScript applications and building web applications in a highly technical domain.</p>

              <p>During my 3 years as part of the BC-CfE lab I have had the opportunity to broaden my skills to include Rails, Oracle, and Docker.</p>

              <p>This will be filled in with previous work soon. In the meantime, don't contact me&thinsp;&mdash;&thinsp;I'll contact you.</p>

              <p><a href="https://github.com/jamesnakagawa">[GitHub]</a>&ensp;<a href="https://www.linkedin.com/in/jamesnakag/">[LinkedIn]</a></p>

              <Link to='/portfolio'>
                <button>View Portfolio</button>
              </Link>
              </section>
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio/>
            </Route>
            <Route path="/interface-kive" exact>
              <KiveMultiRun/>
            </Route>
          </Switch>
        </div>
          <img id="glyph" src={easterEggGlyph} alt="JN"/>
      </div>
    </BrowserRouter>
  )
};

export default App;
