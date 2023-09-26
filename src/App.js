import './App.css';
import Films from './components/Films';
import Footer from './components/Footer';

import Navigation from './components/Navigation';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Films/>
      <Footer/>
    </div>
  );
}
export default App;
