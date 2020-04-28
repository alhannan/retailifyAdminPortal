import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import { PRODUCTS } from "../../Constants/pages";

const ProductsPage = () => {

  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(PRODUCTS));
    setTimeout(() => dispatch(setLoader(false)) , 500)
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  
  return (
    <div className="content">
      <div className="wrapped-content">
        <h5>Products Page</h5>
      </div>
    </div>
  );
};

export default ProductsPage;