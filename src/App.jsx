import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Hero/>
      <div className="switch">
        <label onClick={toggleTheme}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className='r-switch'
      width='1.5rem' height='1.5rem' onColor='#1c1d1d'/>
      </div>
      <Programs/>
      <Reasons/>
      <Plans />
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
