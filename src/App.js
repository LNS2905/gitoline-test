import './App.css';
import Films from './components/Films';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Contact from './components/Contact';
import News from './components/News';
import About from './components/About';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const backgroundColor = darkMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'; // Thay đổi giá trị này theo màu nền bạn muốn

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <ThemeProvider theme={theme}>
        <Navigation darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path='/' element={<Films/>} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </div>
  )
}

export default App;