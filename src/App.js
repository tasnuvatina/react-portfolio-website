import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router className="app">
    <Navbar></Navbar>
    <Switch>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/portfolio'>
        <Portfolio></Portfolio>
      </Route>
      <Route path='/blog'>
        <Blog></Blog>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
      <Route exact path='/'>
          <Home></Home>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
