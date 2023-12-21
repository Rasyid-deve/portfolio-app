import Intro from './components/Intro/intro';
import Navbar from './components/NavBar/navbar';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
