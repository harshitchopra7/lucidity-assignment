import React from "react";

// deps
import { useDispatch, useSelector } from "react-redux";

// styles
import "./Navbar.css";

// mui deps
import Switch from "@mui/material/Switch";

// store
import { RootState } from "../../store/store";

// slice
import { setIsAdmin } from "../../store/isAdminSlice";

function Navbar() {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state: RootState) => state.isAdmin.isAdmin);

  const handleToggle = () => {
    dispatch(setIsAdmin(!isAdmin));
  };

  return (
    <div className="navbar-container">
      <div className="navbar-alignment">
        <div className="admin-toggler">
          <p>admin</p>
          <Switch
            checked={!isAdmin}
            onChange={handleToggle}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p>user</p>
        </div>

        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/FFFFFF/exit--v1.png"
          alt="exit--v1"
          className="logout-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
