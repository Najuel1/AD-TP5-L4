import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Blob } from './components/Blob';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column min-vh-100">
        <Navbar />

        <div className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Blob />} />
            <Route path="/about/" element={<AboutUs />} />
            <Route path="/contact/" element={<ContactUs />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;