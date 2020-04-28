import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import { DASHBOARD } from "../../Constants/pages";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(selectPage(DASHBOARD));
    setTimeout(() => dispatch(setLoader(false)) , 500)
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="content">
      <div className="wrapped-content">
      </div>
    </div>
  );
};

export default DashboardPage;
