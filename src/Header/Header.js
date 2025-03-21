import { Button, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Logo/logo.jpg';
import Login from '../Login/Login';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from "../Pages/Blog/Blog";
import Orders from "../Pages/Orders/Orders";
import Performers from "../Pages/Performers/Performers";
import Rules from "../Pages/Rules/Rules";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import KitchenForm from '../components/KitchenForm/KitchenForm';
import Cabinets from '../components/Cabinets/Cabinets';
import LivingForm from "../components/LivingForm/LivingForm";







function Header() {
  
    
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center m-auto">
              <Nav.Link href="/orders">Размещение заказа</Nav.Link>
              <NavLink href="/performers">Исполнители</NavLink>
              <NavLink href="/blog">Блог</NavLink>
              <NavLink href="/rules">Правила</NavLink>
            </Nav>
            <Col xs="auto">
              <Button href="/login">Логин</Button>
            </Col>
           
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      
      <BrowserRouter >
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/performers" element={<Performers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/kitchen" element={<KitchenForm />} />
        <Route path="/cabinets" element={<Cabinets />} />
        <Route path="/living-room" element={<LivingForm />} />
        
        {/* Добавь другие маршруты */}
      </Routes>
    </BrowserRouter>
      </>
      
    );
  }
  
  export default Header;
