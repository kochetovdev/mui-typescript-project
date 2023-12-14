"use client";

import { contactData } from "@/app/_data/data";
import { Theme, useTheme } from "@mui/material/styles";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value ? cellValues.value[0] : ""}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
];

const DataGridPage = () => {
  const theme = useTheme();
  const rows = () =>
    contactData.map((contact) => ({
      ...contact,
      startDate:
        typeof contact.startDate !== "string"
          ? contact.startDate?.format("YYYY-MM-DD")
          : contact.startDate,
    }));

  const data = {
    rows: rows(),
    initialState: {
      pagination: { paginationModel: { pageSize: 5 } },
    },
  };

  return (
    <DataGrid
      {...data}
      autoHeight
      columns={columns(theme)}
      pageSizeOptions={[5, 10, 25]}
      columnHeaderHeight={60}
      rowHeight={120}
    />
  );
};

export default DataGridPage;
