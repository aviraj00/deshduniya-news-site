// Import necessary dependencies
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

class App extends React.Component {
  
  render() {
    return (
    <div>
      <Router>
      
      <LoadingBar
        color='#f11946'
        progress={10}
      />
      
        <Nav />
        <Routes>
          {/* Default route */}
          <Route path="/" element={<News key="general" pagesize={6} country="in" category="general" />} />
          
          {/* Other routes */}
          <Route path="/business" element={<News key="business" pagesize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pagesize={6} country="in" category="entertainment" />} />
          <Route path="/health" element={<News key="health" pagesize={6} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" pagesize={6} country="in" category="science" />} />
          <Route path="/sports" element={<News key="sports" pagesize={6} country="in" category="sports" />} />
          <Route path="/technology" element={<News key="technology" pagesize={6} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
    );
  }
}

export default App;
