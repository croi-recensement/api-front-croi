import logo from './logo.svg';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Inscription from './pages/Inscription';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-5">
          <Switch>
            <Route path="/" exact ><HomePage /></Route>
            <Route path="/inscription"><Inscription /></Route>
          </Switch>
      </div>
  </>);
}

export default App;
