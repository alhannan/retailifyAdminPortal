import TwoLineCell from "../../Components/Table/TwoLineCell";
import IndexCell from "../../Components/Table/IndexCell";
import DeleteCell from "../../Components/Table/DeleteCell";

export const productsColumns = [
  {
    Header: "#",
    accessor: (d:any) => d.index,
    maxWidth: 66,
    Cell: IndexCell,
  },
  {
    Header: "NAME/UPC",
    accessor: (d: any) => ({ name: d.name, desc: d.upc }),
    Cell: TwoLineCell,
  },
  {
    Header: "SIZE",
    accessor: "size",
    width: 45,
  },
  {
    Header: "BRAND",
    accessor: "brand.name",
    width: 55,
  },
  {
    Header: "CATEGORIES",
    accessor: "categories[0].name",
    width: 50,
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
    width: 50,
  },
  {
    Header: "Delete",
    accessor: (d: any) => ({ id: d.id, type: "product" }),
    maxWidth: 60,
    Cell: DeleteCell,
  },
];
