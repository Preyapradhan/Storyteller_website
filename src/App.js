import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import StoryList from './components/StoryList';
import StoryEditor from './components/StoryEditor';
import StoryPage from './components/StoryPage';
import CoverPage from './components/CoverPage';
import './components/StoryList.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
   
      <div className="app-container">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/stories" element={<StoryList searchQuery={searchQuery} />} />
            <Route path="/stories/:id" element={<StoryPage/>} />
            <Route path="/editor" element={<StoryEditor />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
   
  );
};

export default App;
