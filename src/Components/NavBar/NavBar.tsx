import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Actions/authActions";
import "./NavBar.scss";
const NavBar = () => {
  //set and select page from redux navigation reducer like webapp
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  // get pages from constants
  const pages = ["Dashboard", "Retailers", "Customers", "Products", "Orders"];

  const retailerCount = 3;
  const productCount = 1400;

  const user = {
    full: "Gibran Gul",
    first: "Gibran",
    last: "Gul",
  };

  //dispatch page action here
  useEffect(() => {
    // console.log(selectedPage)
  }, [selectedPage]);

  const dispatch = useDispatch();

  const renderNavList = () =>
    pages.map((page: string) => {
      const selected = page === selectedPage ? "selected" : "";
      return (
        <div
          key={page}
          className={`nav-bar__menu-list__item ${selected}`}
          onClick={() => setSelectedPage(page)}
        >
          <div className={`nav-bar__menu-list__item__bar ${selected}`} />
          <div className={`icon ${page.toLowerCase()}-icon ${selected}`} />
          <p className={`p2 ${selected} medium-font`}>{page}</p>
        </div>
      );
    });

  return (
    <div className="nav-bar">
      <div className="nav-bar__profile">
        <div className="nav-bar__profile__avatar">
          <h6>{user.first[0] + user.last[0]}</h6>
        </div>
        <div className="nav-bar__profile__text">
          <p className="p1 medium-font">{user.full}</p>
          <a
            className="primary_link"
            href="/"
            onClick={() => dispatch(logout())}
          >
            Sign out
          </a>
        </div>
      </div>
      <div className="nav-bar__info">
        <div className="flex-row">
          <div className="nav-bar__info__item">
            <h4>{retailerCount}</h4>
            <p className="cap medium-font">RETAILERS</p>
          </div>
          <div className="nav-bar__info__divider_vertical" />
          <div className="nav-bar__info__item">
            <h4>{productCount}</h4>
            <p className="cap medium-font">PRODUCTS</p>
          </div>
        </div>
        <div className="nav-bar__info__divider_horizontal" />
      </div>
      <div className="nav-bar__menu-list">
        <p className="cap medium-font">MAIN MENU</p>
        {renderNavList()}
      </div>
    </div>
  );
};

export default NavBar;
