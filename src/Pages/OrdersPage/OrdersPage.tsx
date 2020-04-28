import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectPage } from "../../Actions";
import { ORDERS } from "../../Constants/pages";

const OrdersPage = () => {

  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(ORDERS));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  
  return (
    <div className="content">
      <div className="wrapped-content">
        <h5>Orders Page</h5>
      </div>
    </div>
  );
};

export default OrdersPage;
