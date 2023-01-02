import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/intro';
import Latest from './Components/LatestNews';


import './style/LandingPage.css';

function App() {
  return (
    <div>
      <div className="MyBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className='LatestNews'>
        <Latest />
      </div>
    </div>
  );
}

export default App;
