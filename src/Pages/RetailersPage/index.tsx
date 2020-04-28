import React, { useMemo } from "react";
import "./RetailersPage.scss";
import ContentHeader from "./ContentHeader";
import Table from "../../Components/Table";
import { retailerColumns } from "./tableColumns";
import { retailers } from "./dummyData";
import FilterBar from "./FilterBar";

const RetailersPage = () => {
  const columns = useMemo(() => retailerColumns, []);
  return (
    <div className="content-container">
      <FilterBar />
      <div className="content">
        <div className="wrapped-content">
          <ContentHeader />
          <Table
            columns={columns}
            data={retailers}
            onClick={() => console.log("clicked")}
            className="retailersPageTable"
          />
        </div>
      </div>
    </div>
  );
};

export default RetailersPage;
