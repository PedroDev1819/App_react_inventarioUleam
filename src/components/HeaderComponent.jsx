import { IoExitOutline } from "react-icons/io5";
import { PiDevices } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import miniLogo from "../assets/logos/minilogo.png";
import "./HeaderComponent.css";

function HeaderComponent() {
  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  return (
    <header>
      <img className="logo-uleam" src={miniLogo} alt="Uleam" />
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/dashboard">
              <FaChartPie className="icon"/>
            </Link>
          </li>
          <li>
            <Link to="/inventario">
              <PiDevices className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoMdNotifications className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoPersonCircleOutline className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              <IoExitOutline className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
