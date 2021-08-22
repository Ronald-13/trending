import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import {
  Route, Routes,
} from 'react-router-dom';
import { Repositories } from './pages/repositories/repositories';
import { Developers } from './pages/developers/developers';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/trending" element={<Repositories />}/>
        <Route path="/trending/developers" element={<Developers />} />
      </Routes>
    </Layout>
  );
}

export default App;
