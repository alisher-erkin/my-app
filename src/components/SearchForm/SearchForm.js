import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = () => {
  const [country] = useState("Беларусь");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-3">Поиск исполнителя в</h4>
      <div className="d-flex justify-content-center gap-3">
        {/* Выбор страны */}
        <select className="form-select bg-light" value={country} disabled>
          <option>Узбекистан</option>
        </select>

        {/* Выбор региона */}
        <select
          className="form-select bg-light"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Выберите регион</option>
          <option value="Минская область">Ташкент</option>
          <option value="Гродненская область">Ташкентская область</option>
        </select>

        {/* Выбор города */}
        <select
          className="form-select bg-light"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Выберите город</option>
          <option value="Минск">Бекабад</option>
          <option value="Гродно">Ангрен</option>
        </select>

        {/* Кнопка поиска */}
        <button className="btn btn-primary px-4">ПОИСК</button>
      </div>
    </div>
  );
};

export default SearchForm;
