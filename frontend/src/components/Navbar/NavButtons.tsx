import { Link } from "react-router-dom";

const NavButtons = ({ text }: any) => {
  let path;
  if (text === "Home") path = "/";
  else path = `/${text}`;
  return (
    <Link to={path}>
      <button className="btn_nav">{text}</button>
    </Link>
  );
};

export default NavButtons;
