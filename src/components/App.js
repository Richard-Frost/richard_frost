import React from 'react';

import Navbar from './Navbar';
import ProjectLister from './ProjectLister'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <ProjectLister />
      </header>
    </div>
  );
}

export default App;
