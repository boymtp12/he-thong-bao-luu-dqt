import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import { Home, Navbar } from './components'
import Footer from './components/Footer';

const App = () => (
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



export default App;
