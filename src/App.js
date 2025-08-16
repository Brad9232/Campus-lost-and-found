import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-item" element={<ItemForm />} />
        <Route path="/items" element={<ItemList />} />
      </Routes>
    </Router>
  );
}

export default App;