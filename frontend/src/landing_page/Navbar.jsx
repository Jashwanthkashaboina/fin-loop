import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  const { user, loading, setUser } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="p-3 text-center">
        Loading...
      </div>
    );
  }

  const handleLogout = () => {
    // localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/FinLoop_Logo.png"
            alt="LOGO"
            style={{ 
              height: "60px",
              width: "auto",
              // objectFit: "contain",
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center gap-4">

            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}

            {user && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={import.meta.env.VITE_DASHBOARD_URL}
                  >
                    Dashboard
                  </a>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;