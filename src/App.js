import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./Pages/HomePage/Homepage"
import Orders from "./Pages/Orders/Orders";
import Footer from "./Footer/Footer";
import Performers from "./Pages/Performers/Performers";
import Blog from "./Pages/Blog/Blog";
import Rules from "./Pages/Rules/Rules";
import Login from "./Login/Login";
import KitchenForm from "./components/KitchenForm/KitchenForm";
import Cabinets from "./components/Cabinets/Cabinets";
import LivingForm from "./components/LivingForm/LivingForm";
import BedRoom from "./components/BedRoom/BedRoom";
import Hallway from "./components/Hallway/Hallway";
import WardRobes from "./components/WardRobes/WardRobes";
import Kids from "./components/Kids/Kids";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/performers" element={<Performers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/login" element={<Login />} />
        {/* Другие маршруты */}
      </Routes>
      <Routes>
            <Route path="/kitchen" element={<KitchenForm />} />
            <Route path="/cabinets" element={<Cabinets />} />
            <Route path="/living-room" element={<LivingForm />} />
            <Route path="/bed-room" element={<BedRoom />} />
            <Route path="/hallway" element={<Hallway />} />
            <Route path="/wardrobes" element={<WardRobes />} />
            <Route path="/kids-room" element={<Kids />} />
            {/* Добавь другие маршруты */}
          </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

