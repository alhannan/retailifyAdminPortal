import React from "react";
import { useDispatch, useSelector } from "react-redux";
import pagesInterface from "../../Interfaces/pagesInterface";
import { selectPage } from "../../Actions";

const NavList = () => {
  const pages = useSelector((state: pagesInterface) => state.navigation.pages);
  const selectedPage = useSelector(
    (state: pagesInterface) => state.navigation.currentPage
  );

  const dispatch = useDispatch();

  return (
    <div>
      {pages.map((page: string) => {
        const selected = page === selectedPage ? "selected" : "";

        return (
          <div
            key={page}
            className={`nav-bar__menu-list__item ${selected}`}
            onClick={() => dispatch(selectPage(page))}
          >
            <div className={`nav-bar__menu-list__item__bar ${selected}`} />
            <div className={`icon ${page.toLowerCase()}-icon ${selected}`} />
            <p className={`p2 ${selected} medium-font`}>{page}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NavList;
