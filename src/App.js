import {Routes, Route} from "react-router-dom";
import NavbarComponent from './components/Navigation/Navigation';
import {Home} from './pages/Home/Home';
import {Minecraft} from './pages/Minecraft/Minecraft';
import {About} from './pages/About/About';

function App() {
    return (
        <>
        <NavbarComponent />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minecraft" element={<Minecraft />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    );
}

export default App;
