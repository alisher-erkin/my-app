import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import Container  from "react-bootstrap/Container";
import  Navbar  from  "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  Col  from "react-bootstrap/Col";
import logo from "../Logo/logo.jpg";


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
              <NavLink to="/orders">Размещение заказов</NavLink>
              <NavLink to="/performers">Исполнители</NavLink>
              <NavLink to="/blog">Блог</NavLink>
              <NavLink to="/rules">Правила</NavLink>
            </Nav>
            <Col xs="auto">
              <button>
                <NavLink to="/login">Войти</NavLink>
              </button>
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

