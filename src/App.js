import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { About } from './components/About/About';
import './App.css';

export const App = () => {
  return (
    <div id="top" className={`app`} >
    <div className="header">
      <Header />
    </div>
        <main >
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}