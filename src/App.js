import logo from './logo.svg';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Inscription from './pages/Inscription';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter basename='/croirec/FO/'>
      <div className="container pt-5">
        <Route path="/" exact ><HomePage /></Route>
        <Route path="/inscription"><Inscription /></Route>
      </div>
    </BrowserRouter >
  </>);
}

export default App;
