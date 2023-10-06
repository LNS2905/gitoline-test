import './App.css';
import Films from './components/Films';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Contact from './components/Contact';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Navigation />
      // <Routes>
      //   <Route path='/' element={<Films />}>
      //   </Route>
      //   <Route path='/detail/:id' element={<Detail />}></Route>
      //   <Route path='/contact' element={<Contact />}></Route>
      // </Routes>
      <Footer />
    </div>
  )
}

export default App;
