import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
