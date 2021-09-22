import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';

// nav routes, def url pattern to lead to a page/component

const App = () => (
  <>
    <MainNavbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    {/* make sure this is the last Route */}
    <Route component={NoMatch} />
    </Switch>
    {/* Footer */}
  </>
)

export default App;