import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateList from './components/CreateList/CreateList';
import BlogDetail from './components/BlogDetail/BlogDetail';
import { StateTutorial } from './components/ReactHooks/StateTutorial';
import { ReducerTutorial } from './components/ReactHooks/ReducerTutorial';
import { EffectTutorial } from './components/ReactHooks/EffectTutorial';
import RefTutorial from './components/ReactHooks/RefTutorial';
import { LayoutEffectTutorial } from './components/ReactHooks/LayoutEffectTutorial';
import { ImperativeHandleTutorial } from './components/ReactHooks/ImperativeHandleTutorial';

function App() {

  // ketika membuat variabel atau kita berikan langsung di JSX itu disebut dynamic values

  const title = 'Aplikasi blog sederhana dengan React JS'
  // const isLike = {name: 'abdu'}

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        {/* <Navbar /> */}
        {/* <div className="content"> */}
          {/* <h3>{title}</h3> */}
          {/* <h1>{isLike}</h1> */}
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateList />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div> */}

        {/* <StateTutorial /> */}
        {/* <ReducerTutorial /> */}
        {/* <EffectTutorial /> */}
        {/* <RefTutorial /> */}
        {/* <LayoutEffectTutorial /> */}
        <ImperativeHandleTutorial />
      </div>
    </Router>
  );
}
// npx json-server --watch data/db.json --port 8000
export default App;
