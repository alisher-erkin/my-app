import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    {/* Логотип */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">LOGO</h5>
                    </div>

                    {/* Меню */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Меню</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Размещение заказа</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Исполнители</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Блог</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Правила</a></li>
                        </ul>
                    </div>

                    {/* Соцсети */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Мы в соц сетях</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Facebook</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Instagram</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Telegram</a></li>
                        </ul>
                    </div>

                    {/* Адрес */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Адрес</h5>
                        <p className="mb-0">г. Ташкент, ул. Беруний</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
