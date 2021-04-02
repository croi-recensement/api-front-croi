import logo from './logo.svg';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Inscription from './pages/Inscription';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container pt-5">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/inscription" component={Inscription} />
          </Switch>
      </main>
  </Router>);
}

export default App;
