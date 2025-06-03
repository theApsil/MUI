import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridColDef,
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
    { 
      field: "group_name",
      headerName: "Группа", 
      width: 180,
      headerClassName: 'header-cell',
      cellClassName: 'group-cell'
    },
    
    { 
      field: "math_min_score",
      headerName: "Мин. математика", 
      width: 150,
      headerClassName: 'math-header',
      cellClassName: 'math-cell',
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: "math_avg_score",
      headerName: "Сред. математика", 
      width: 150,
      headerClassName: 'math-header',
      cellClassName: 'math-cell',
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: "math_max_score",
      headerName: "Макс. математика", 
      width: 150,
      headerClassName: 'math-header',
      cellClassName: 'math-cell',
      headerAlign: 'center',
      align: 'center'
    },
    
    { 
      field: "reading_min_score",
      headerName: "Мин. чтение", 
      width: 150,
      headerClassName: 'reading-header',
      cellClassName: 'reading-cell',
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: "reading_avg_score",
      headerName: "Сред. чтение", 
      width: 150,
      headerClassName: 'reading-header',
      cellClassName: 'reading-cell',
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: "reading_max_score",
      headerName: "Макс. чтение", 
      width: 150,
      headerClassName: 'reading-header',
      cellClassName: 'reading-cell',
      headerAlign: 'center',
      align: 'center'
    },
    
    { 
      field: "writing_min_score",
      headerName: "Мин. письмо", 
      width: 150,
      headerClassName: 'writing-header',
      cellClassName: 'writing-cell',
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: "writing_avg_score",
      headerName: "Сред. письмо", 
      width: 150,
      headerClassName: 'writing-header',
      cellClassName: 'writing-cell',
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: "writing_max_score",
      headerName: "Макс. письмо", 
      width: 150,
      headerClassName: 'writing-header',
      cellClassName: 'writing-cell',
      headerAlign: 'center',
      align: 'center'
    }
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