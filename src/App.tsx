import { About } from './pages/About';
import { Home } from './pages/Home';
import './styles/index.css';

function App() {
  return (
    <section className='App'>
      <Home />
      <About />
      <Home />
    </section>
  );
}

export default App;
