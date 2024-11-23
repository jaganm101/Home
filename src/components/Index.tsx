import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PaintingDetails from './PaintingDetails';
import DoorDetails from './DoorDetails';

// Base path (matches vite.config.js)
const BASE_PATH = import.meta.env.BASE_URL || '/';

function App() {
    return (
        <Router basename={BASE_PATH}>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="painting-details" element={<PaintingDetails />} />
                    <Route path="door-details" element={<DoorDetails />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
