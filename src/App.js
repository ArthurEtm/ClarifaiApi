import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import './App.css';


 const particlesOptions = {
  particles: {
    number: {
      value:30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
function App() {
 
  return (
    <div className="App">
      <Particles className='particles'
                params={particlesOptions} />
     <Navigation/>
     <Logo/>
     <Rank/>
     <ImageLinkForm/>

    </div>
  );
}

export default App;

