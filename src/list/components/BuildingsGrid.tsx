import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid';

import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import buildings from '../table';

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

function BuildingsGrid() {
  const rows: GridRowsProp = buildings;

  const columns: GridColDef[] = [
    { field: 'Гендер', headerName: 'Гендер', flex: 0.5 },
    { field: 'Расовая принадлежность', headerName: 'Раса/Этническая группа', flex: 0.7 },
    { field: 'Уровень образования родителей', headerName: 'Образование родителей', flex: 1 },
    { field: 'Обед', headerName: 'Тип обеда', flex: 0.5 },
    { field: 'Балл по математике', headerName: 'Математика', type: 'number', flex: 0.5 },
    { field: 'Балл по чтению', headerName: 'Чтение', type: 'number', flex: 0.5 },
    { field: 'Балл по письму', headerName: 'Письмо', type: 'number', flex: 0.5 },
];

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          pagination: {
            rowsPerPageOptions: [10, 20, 30, 100],
            labelRowsPerPage: 'Строк на странице:',
          },
        }}
      />
    </Container>
  );
}

export default BuildingsGrid;
