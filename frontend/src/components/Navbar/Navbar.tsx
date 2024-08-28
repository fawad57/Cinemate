import NavButtons from "./NavButtons";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const heading = [
    "Home",
    "Booking",
    "Tickets",
    "Registration",
    "Review",
    "Support",
    "Share",
    "Watchlist",
  ];

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="img_nav" />
      <div className="nav-buttons">
        {heading.map((text, index) => (
          <NavButtons key={index} text={text} />
        ))}
      </div>
      <div className="profile-container">
        <button className="profile-btn">
          <FaUser /> {/* React Icons user icon */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
