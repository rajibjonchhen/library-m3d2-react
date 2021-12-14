import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from '../src/components/Nav'
import Nav from '../src/components/Carousel'
import Nav from '../src/components/Footer'

import { Carousel, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
        <Nav/>
      <Carousel/>
    <Footer />

    </div>
  );
}

export default App;
