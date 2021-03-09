import { Bid } from './pages/Bid';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/bid/:id">
            <Bid />
          </Route>
          <Route path="/" >
            <Bid />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
