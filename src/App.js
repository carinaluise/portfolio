import './App.scss';

import Navbar from './components/nav-bar/nav-bar';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Tech from './components/tech/tech';
import Pricing from './components/pricing/pricing';
import Contact from './components/contact/contact';



function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Home></Home>
       <Portfolio></Portfolio>
       <Tech></Tech>
       <Pricing></Pricing>
       <Contact></Contact>
    </div>
  );
}

export default App;
