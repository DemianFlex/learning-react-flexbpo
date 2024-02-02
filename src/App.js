import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';
import Counter from './Views/Counter';
import Products from './Views/Products';

function App() {
    return (
        <div className='relative pb-10 min-h-screen'>
            <Router>
                <Header />
                <div className='p-3'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/counter' element={<Counter />} />
                        <Route path='/products/:id' element={<Products />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
