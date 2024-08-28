import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavbarHandle = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    if (location.pathname === "/Registration") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
};

export default NavbarHandle;
