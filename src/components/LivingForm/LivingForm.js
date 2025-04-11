import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../LivingForm/LivingForm.css";



export default function LivingRoom() {
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
       

       

        {/* Размеры */}
        <div className="row mb-3">
          <h3 className="living-title-text text-center">Корпусная мебель для Гостинной</h3>
          <div className="living-text-block">Для изготовления корпусной мебели для Гостинной исполнителю понадобится дизайн с размерами. 
            Исходя из этого будет формироваться цена. Вам нужно будет закрепить, отправить  и описать ваши пожелания в каждом 
            поле! Если у вас нет дизайна  вам нужно будет прикрепить и отправить понравившееся фото корпусной мебели  из 
            интернета и указать размеры. Вам нужно будет заполнить все поля расположенные ниже. 
          </div>
        </div>

        {/* Материалы */}
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Материал фасада:</label>
            <select className="form-select" name="facadeMaterial" onChange={handleChange}>
              <option value="">Выберите</option>
              <option value="Плёночные фасады">Плёночные фасады</option>
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
