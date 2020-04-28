import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectPage } from "../../Actions";
import { CUSTOMERS } from "../../Constants/pages";

const CustomersPage = () => {
  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(CUSTOMERS));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="content">
      <div className="wrapped-content">
        <h5>Customers Page</h5>
      </div>
    </div>
  );
};

export default CustomersPage;
