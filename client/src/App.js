import './App.css';
import { Footer } from './components/Footer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar'
import Speedometer from './components/Speedometer';

function App() {
    return (
        <div className='App'>
            <Navbar/>
            <MainPage />
            <Speedometer/>
            <Footer />
        </div>
    );
}

export default App;
