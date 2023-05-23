import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Routes, Route, Link} from "react-router-dom";
import {Minecraft} from './components/Minecraft';
import {About} from './components/About';
import {Home} from './components/Home';

function App() {
  return (
    <>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./">Simple Hosting</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="./">Home</Link>
            <Link className='nav-link' to="./minecraft">Minecraft</Link>
            <Link className='nav-link' to="./about">About Us</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>

  );
}

export default App;
