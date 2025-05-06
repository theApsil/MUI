import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import * as React from 'react';
import Navbar from '../components/Navbar';
import { GroupGrid } from './components/GroupGrid';

import { countries, years, types } from './groupdata';
import GroupChart from './components/GroupChart';


type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
  const [group, setGroup] = React.useState<tSelect>("Страна"); 
  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as tSelect);
  }

  const getData = () => {
    switch (group) {
      case "Страна": return countries;
      case "Год": return years;
      case "Тип": return types;
      default: return countries;
    }
  };

  return (
    <div>
      <Navbar active="3"/>
      <Box sx={{ width: "200px", m: "auto", mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Группировать по</InputLabel>
          <Select
            id="select-group"
            value={group}
            label="Группировать по"
            onChange={handleChange}
          >
            <MenuItem value="Страна">Стране</MenuItem>
            <MenuItem value="Год">Году</MenuItem>
            <MenuItem value="Тип">Типу</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupGrid data={getData()}/>
      <GroupChart data={getData()}/>
    </div>
  );
}

export default Chart;