import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import Container  from "react-bootstrap/Container";
import  Navbar  from  "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  Col  from "react-bootstrap/Col";
import logo from "../Logo/logo.jpg";
import { Button } from "react-bootstrap";
import "../Header/Header.css";


function Header() {
  const location = useLocation(); // Получаем текущий URL

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">  
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <NavLink to="/orders" className="text-secondary">Размещение заказов</NavLink>
              <NavLink to="/performers" className="text-secondary">Исполнители</NavLink>
              <NavLink to="/blog" className="text-secondary">Блог</NavLink>
              <NavLink to="/rules" className="text-secondary">Правила</NavLink>
            </Nav>
            <Col xs="auto" className="bg-primary">
              <Button href="/login">Логин</Button>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Показываем NavigationMenu только на странице /orders */}
      {location.pathname === "/orders" && <NavigationMenu />}
    </>
  );
}


export default Header;

