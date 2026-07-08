import { useState, useEffect } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch curr user
  useEffect(() => {
    api.get("/auth/me")
        .then((res) => {
            setUser(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleMenuClick = (index) =>{
    setMenu(index);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="/logo.png"
        style={{ width: "50px" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={ selectedMenu === 0 ? activeMenuClass : menuClass }>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={ selectedMenu === 1 ? activeMenuClass : menuClass }>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={ selectedMenu === 2 ? activeMenuClass : menuClass }>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={ selectedMenu === 3 ? activeMenuClass : menuClass }>
                Positions
              </p>
            </Link>
            </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={ selectedMenu === 4 ? activeMenuClass : menuClass }>
                Funds
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
              {user?.username?.substring(0, 2).toUpperCase() || "ZU"}
          </div>

          <p className="username">
              {user?.username || "User"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
