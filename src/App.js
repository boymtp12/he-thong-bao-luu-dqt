import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import { Home, Navbar } from './components'
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}


export default App;
