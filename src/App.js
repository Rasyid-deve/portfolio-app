import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
