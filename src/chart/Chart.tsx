import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import * as React from 'react';
import Navbar from '../components/Navbar';
import { GroupGrid } from './components/GroupGrid';

import { gender, lunch, parental_level_of_education, race_ethnicity, test_preparation_course } from './groupdata';
import GroupChart from './components/GroupChart';


type tSelect = "Гендер" | "Обед" | "Уровень образования родителей" | "Расовая принадлежность" | "Прохождение подготовительного курса";

function Chart() {
  const [group, setGroup] = React.useState<tSelect>("Гендер"); 
  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as tSelect);
  }

  const getData = () => {
    switch (group) {
      case "Гендер": return gender;
      case "Обед": return lunch;
      case "Уровень образования родителей": return parental_level_of_education;
      case "Расовая принадлежность": return race_ethnicity;
      case "Прохождение подготовительного курса": return test_preparation_course;
      default: return gender;
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
            <MenuItem value="Гендер">Гендеру</MenuItem>
            <MenuItem value="Обед">Типу обеда</MenuItem>
            <MenuItem value="Уровень образования родителей">Уровню образования родителей</MenuItem>
            <MenuItem value="Расовая принадлежность">Расовой принадлежности</MenuItem>
            <MenuItem value="Прохождение подготовительного курса">Подготовки к курсу</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupGrid data={getData()}/>
      <GroupChart data={getData()}/>
    </div>
  );
}

export default Chart;