import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from '../src/components/Nav'
import MyCarousel from '../src/components/Carousel'
import MyFooter from '../src/components/Footer'



function App() {
  return (
    <div className="App">
      
        <MyNavbar/>
      <MyCarousel/>
    <MyFooter />

    </div>
  );
}

export default App;
