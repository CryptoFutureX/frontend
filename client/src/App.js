import './App.css';
import { Footer } from './components/Footer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar'

function App() {
    return (
        <div className='App'>
            <Navbar/>
            <MainPage />
            <Footer />
        </div>
    );
}

export default App;
