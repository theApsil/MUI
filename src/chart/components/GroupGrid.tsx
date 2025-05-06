import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";

type GroupProps = {
  data: tGroup;
};

function CustomToolbar() {
  return (
      <GridToolbarContainer>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <Box sx={{ flexGrow: 1 }} />
          <GridToolbarExport/>
      </GridToolbarContainer>
  );
}


export function GroupGrid({ data }: GroupProps) {
  const columns: GridColDef[] = [
    { field: "Группа", headerName: "Группа", width: 150 },
    { field: "Минимальная высота", headerName: "Мин. высота", width: 150 },
    { field: "Максимальная высота", headerName: "Макс. высота", width: 150 },
    { field: "Средняя высота", headerName: "Средняя высота", width: 150 },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        getRowId={(row) => row.id}
        slots={{ toolbar: CustomToolbar }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 0,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Container>
  );
}