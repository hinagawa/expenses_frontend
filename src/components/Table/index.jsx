import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      editable: true,
    }
  ];
  
  const rows = [
    { id: 1, category: "Food", date: 11/30/2024, amount: 32424 },
    { id: 2, category: "Food", date: 11/30/2024, amount: 32 },
    { id: 3, category: "Shopping", lastName: 11/30/2024, amount: 324 },
    { id: 4, category: "Shopping", date: 11/30/2024, amount: 6546 },
    { id: 5, category: "Food", date: 11/30/2024, amount: 6546 },
    { id: 6, category: "Shopping", date: 11/30/2024, amount: 456 },
    { id: 7, category: "Food", date: 11/30/2024, amount: 456 },
    { id: 8, category: "Rent", date: 11/30/2024, amount: 234 },
    { id: 9, category: "Rent", date: 11/30/2024, amount: 5466 },
  ];

  
function Table() {
    return (
       <DataGrid 
       stickyHeader
       rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick/>
    )
}

export default Table