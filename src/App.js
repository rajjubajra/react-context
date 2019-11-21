import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToogleTheme from './components/ToogleTheme';



function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ToogleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
