import React from 'react';
import {HashRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateBlog from './pages/CreateBlog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
