import React from "react";
import Container  from "react-bootstrap/Container";
import  Navbar  from  "react-bootstrap/Navbar";
import logo from "../Logo/logo.jpg";
import { Row } from "react-bootstrap";
import SocialIcons from "../components/SocialIcons/SocialIcons";

const Footer = () => {
   return (
     <Container>
        <Row>
        <div className="col-md-3">
           <Navbar.Brand href="/">  
             <img src={logo} alt="logo" />
           </Navbar.Brand>
        </div>
        <div className="col-md-3">
            
            <ul className="space-y-2 text-sm">
               <li><a href="/orders" className="text-secondary">Размещение заказа</a></li>
               <li><a href="/performers" className="text-secondary">Исполнители</a></li>
               <li><a href="/blog" className="text-secondary">Блог</a></li>
               <li><a href="/rules" className="text-secondary">Правила</a></li>
          </ul>
        </div>
        <div className="col-md-3">
            <h5>Мы в соцсетях</h5>
            <SocialIcons />
        </div>
        <div className="col-md-3">
           <h5 className="fw-bold">Адрес</h5>
           <p className="mb-0">г. Ташкент, ул. Беруний</p>
        </div>
        </Row>
     </Container>
   );
};

export default Footer;
