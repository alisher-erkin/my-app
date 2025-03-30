import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="container my-5">
      <header className="text-center mb-4">
        <h1>Добро пожаловать в [Название сервиса] – агрегатор мебели №1!</h1>
        <p className="lead">Найдите лучших исполнителей для своего мебельного заказа!</p>
      </header>

      <section className="text-center mb-5">
        <p>
          Вы ищете идеальную мебель по индивидуальному заказу? Хотите, чтобы профессиональные мастера
          соревновались за ваш проект, предлагая лучшие условия? [Название сервиса] – это ваш идеальный помощник!
        </p>
      </section>

      <section className="row text-center mb-5">
        <div className="col-md-4">
          <img src="images/icon-1.png" alt="Flaticon" className="img-fluid mb-3" />
          <h3>Размещайте заказ</h3>
          <p>Опишите свою мебельную задачу: шкаф, кухня, диван, стол и любые другие изделия.</p>
        </div>
        <div className="col-md-4">
          <img src="images/icon-2.png" alt="Flaticon" className="img-fluid mb-3" />
          <h3>Получайте предложения</h3>
          <p>Исполнители начнут предлагать свои условия, цены и сроки.</p>
        </div>
        <div className="col-md-4">
          <img src="images/icon-3.png" alt="Flaticon" className="img-fluid mb-3" />
          <h3>Выбирайте лучшее</h3>
          <p>Оценивайте предложения, смотрите портфолио и отзывы, выбирайте лучшего мастера.</p>
        </div>
      </section>

      <section className="text-center mb-5">
        <h2>Почему выбирают нас?</h2>
        <ul className="list-unstyled">
          <li>✅ <strong>Лучшие мастера</strong> – Только проверенные исполнители с отзывами и портфолио.</li>
          <li>✅ <strong>Экономия времени и денег</strong> – Конкуренция снижает цену, а вы выбираете лучшее предложение.</li>
          <li>✅ <strong>Удобство</strong> – Все заказы и обсуждения в одном месте.</li>
          <li>✅ <strong>Прозрачность</strong> – Реальные отзывы и рейтинг исполнителей.</li>
        </ul>
      </section>

      <div className="text-center">
        <h3>Закажите мебель вашей мечты уже сегодня!</h3>
        <p>Создайте заказ и получите предложения от лучших мастеров прямо сейчас!</p>
        <button className="btn btn-primary btn-lg">🚀 Разместить заказ</button>
      </div>
    </div>
  );
};

export default HomePage;
