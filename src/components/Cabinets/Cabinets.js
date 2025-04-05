import { useState } from "react";
import "../Cabinets/Cabinets.css";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Cabinets() {
  const [formData, setFormData] = useState({
    layout: "",
    dimensions: { A: "", B: "", C: "" },
    facadeMaterial: "",
    bodyMaterial: "ДСП EGGER (Австрия)",
    furniture: "BLUM (Австрия)",
    edgeBanding: "Кромка ПВХ",
    drawerSystems: [],
    liftMechanisms: [],
    skinal: [],
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  



  return (
    <div className="container mt-4">
      <form className="p-4 border rounded shadow-sm bg-light">
        {/* Планировка */}
       
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4 mx-auto">
               <img src="Images/img-hallway.png" alt="img-hallway" className="img-fluid" />
            </div>
            
          </div>
       </div>

        <div className="mb-3">
          <label className="form-label">Размеры:</label>
          <select className="form-select" name="layout" onChange={handleChange}>
            <option value="">Выберите</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        {/* Размеры */}
        <div className="row mb-3">
          {["A", "B", "C"].map((dim) => (
            <div className="col" key={dim}>
              <label className="form-label">{dim} (мм)</label>
              <input
                type="number"
                className="form-control"
                name={dim}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dimensions: { ...formData.dimensions, [dim]: e.target.value },
                  })
                }
              />
            </div>
          ))}
        </div>

        {/* Материалы */}
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Количество дверей</label>
            <select className="form-select" name="facadeMaterial" onChange={handleChange}>
              <option value="">Выберите</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col">
            <label className="form-label">Материал корпуса:</label>
            <select className="form-select" name="facadeMaterial" onChange={handleChange}>
              <option value="">Выберите</option>
              <option value="Плёночные фасады">Плёночные фасады</option>
            </select>
          </div>
        </div>

        {/* Фурнитура */}
        <div className="mb-3">
          <label className="form-label">Фурнитура:</label>
          <select className="form-select" name="facadeMaterial" onChange={handleChange}>
              <option value="">Выберите</option>
              <option value="Плёночные фасады">Плёночные фасады</option>
            </select>
        </div>

        {/* Чекбоксы */}
        <div className="mb-3">
          <label className="form-label">Системы выдвижения:</label>
          <select className="form-select" name="facadeMaterial" onChange={handleChange}>
              <option value="">Выберите</option>
              <option value="Плёночные фасады">Плёночные фасады</option>
            </select>
        </div>

        {/* Text */}
        <div className="mb-3">
          <label className="form-label">Опишите что вы хотели бы получить</label>
          <input type="text" className="form-control" value={text} placeholder="Введите что-то..." onChange={handleTextChange} />
        </div>

        {/* Загрузка файла */}
        <div className="mb-3">
          <h5>Вы можете отправить нам понравившееся фото в качастве примера!</h5>
          <label className="form-label">Загрузите эскиз:</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>

        {/* Кнопка отправки */}
        <button type="submit" className="btn btn-primary w-100">
          Отправить
        </button>
      </form>
    </div>
  );
}
