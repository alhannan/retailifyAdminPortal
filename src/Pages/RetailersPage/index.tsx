import React, { useMemo } from "react";
import "./RetailersPage.scss";
import NavBar from "../../Components/NavBar/NavBar";
import Header from "../../Components/Header/Header";
import FilterBar from "./FilterBar";
import ContentHeader from "./ContentHeader";
import Table from "../../Components/Table";
import { retailerColumns } from "./tableColumns";
import { retailers } from "./dummyData";

const RetailersPage = () => {
  const page = "Retailers";

  const columns = useMemo(() => retailerColumns, []);

  return (
    // MOVE NAVBAR AND CONTENT CONTAINER TO PRIVATE ROUTE
    <div className="container">
      <NavBar />
      <div className="content-container">
        <Header page={page} />
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
    </div>
  );
};

export default RetailersPage;
