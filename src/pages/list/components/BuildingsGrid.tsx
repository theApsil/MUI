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
import {useStudents} from "../../../hooks/useStudents";
import React from "react";
import {CircularProgress, Typography} from "@mui/material";
import {formatStudentToRow} from "../../../utils/formatStudentToRow";
import {StudentRow} from "../../../types/StudentRow";

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


  const { data, isLoading, error } = useStudents();

    if (isLoading) return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <CircularProgress />
        </Container>
    );
    if (error || !data) return(
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <Typography>Ошибка при загрузке данных</Typography>
        </Container>
    );

    const rows: StudentRow[] = data.map(formatStudentToRow);

  const columns: GridColDef[] = [
    { field: 'gender', headerName: 'Гендер', flex: 0.5 },
    { field: 'race_ethnicity', headerName: 'Раса/Этническая группа', flex: 0.7 },
    { field: 'parent_education', headerName: 'Образование родителей', flex: 1 },
    { field: 'lunch', headerName: 'Тип обеда', flex: 0.5 },
    { field: 'math_points', headerName: 'Математика', type: 'number', flex: 0.5 },
    { field: 'reading_points', headerName: 'Чтение', type: 'number', flex: 0.5 },
    { field: 'writing_points', headerName: 'Письмо', type: 'number', flex: 0.5 },
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
