import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const menuItems = [
  { name: "Кухни", path: "/kitchen" },
  { name: "Шкафы", path: "/cabinets" },
  { name: "Гостинные", path: "/living-room" },
  { name: "Спальни", path: "/bed-room" },
  { name: "Прихожие", path: "/hallway" },
  { name: "Гардеробные", path: "/wardrobes" },
  { name: "Детские", path: "/kids-room" },
];

export default function NavigationMenu() {
  const location = useLocation(); // Получаем текущий URL

  return (
    <nav className="bg-white py-3 shadow-sm">
      <ul className="nav justify-content-center">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link text-secondary ${
                location.pathname === item.path ? "fw-bold text-dark" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

