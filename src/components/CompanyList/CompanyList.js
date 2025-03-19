import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const companies = [
  { name: "Савин-мебель", city: "Ташкент", rating: 4, profileUrl: "/profile/savin" },
  { name: "М.мебель", city: "Ташкент", rating: 3.5, profileUrl: "/profile/M.mebel" },
  { name: "MebelMax", city: "Ташкент", rating: 2.5, profileUrl: "/profile/MebelMax" },
  { name: "Нано Мебель", city: "Ташкент", rating: 3, profileUrl: "/profile/NanoMebel" },
  { name: "ЭкоМебель", city: "Ташкент", rating: 2,  profileUrl: "/profile/EcoMebel" },
  { name: "МК-Мебель", city: "Ташкент", rating: 3.5,  profileUrl: "/profile/Mk-Mebel" },
  { name: "Савин-мебель", city: "Ташкент", rating: 4, profileUrl: "/profile/savin" },
  { name: "М.мебель", city: "Ташкент", rating: 3.5, profileUrl: "/profile/M.mebel" },
  { name: "MebelMax", city: "Ташкент", rating: 2.5, profileUrl: "/profile/MebelMax" },
  { name: "Нано Мебель", city: "Ташкент", rating: 3, profileUrl: "/profile/NanoMebel" },
  { name: "ЭкоМебель", city: "Ташкент", rating: 2,  profileUrl: "/profile/EcoMebel" },
  { name: "МК-Мебель", city: "Ташкент", rating: 3.5,  profileUrl: "/profile/Mk-Mebel" },
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(emptyStars)}
    </>
  );
};

const CompanyList = () => {
  return (
    <div className="container mt-4 ">
      <div className="row">
        {companies.map((company, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card p-3 text-center shadow-sm">
              <h5 className="fw-bold">{company.name}</h5>
              <p className="text-muted">{company.city}</p>
              <div className="text-warning">{getStars(company.rating)}</div>
              <a href={company.profileUrl} className="text-primary mt-2 fw-bold">
                Подробнее
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
