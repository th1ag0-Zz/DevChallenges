import React from 'react';
import Header from './components/Header/Header';

import '../src/assets/styles/global.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
