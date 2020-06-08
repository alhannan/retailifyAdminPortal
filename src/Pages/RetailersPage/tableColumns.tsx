import TwoLineCell from "../../Components/Table/TwoLineCell";
import IndexCell from "../../Components/Table/IndexCell";
import DeleteCell from "../../Components/Table/DeleteCell";

export const retailerColumns = [
  {
    Header: "#",
    accessor: (d: any) => d.index,
    maxWidth: 66,
    Cell: IndexCell,
  },
  {
    Header: "NAME",
    accessor: (d: any) => ({
      name: d.d.name,
      desc: d.d.location + ", " + d.d.city,
    }),
    Cell: TwoLineCell,
  },
  {
    Header: "RATING",
    accessor: "d.rating",
    width: 55,
  },
  {
    Header: "NUMBER",
    accessor: "d.number",
    width: 40,
  },
  {
    Header: "EMAIL",
    accessor: "d.email",
    width: 65,
  },

  {
    Header: "Delete",
    accessor: (d: any) => ({ id: d._id, type: "retailer" }),
    maxWidth: 50,
    Cell: DeleteCell,
  },
];
