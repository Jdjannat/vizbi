import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main/main';
import Product from './product/product';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Card/Card';
import Footer from './footer/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing" element={<Card />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
