import { DataGrid } from "@mui/x-data-grid";

function Table({columns, rows}) {
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