import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;