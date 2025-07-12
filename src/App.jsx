import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/calendar'
          element={
            <CalendarPage
              darkMode={darkMode}
              toggleTheme={toggleTheme}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
