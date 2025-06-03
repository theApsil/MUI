import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import * as React from 'react';
import Navbar from '../../components/Navbar';
import { GroupGrid } from './components/GroupGrid';

import GroupChart from './components/GroupChart';
import {
  useScoreByRace,
  useScoreByParent,
  useScoreByTestPrep,
  useScoreByGender,
  useScoreByLunch,
} from "../../hooks/useAggregateData";
import {formatAggregateToRow} from "../../utils/formatAggregateToRow";


type tSelect = "Гендер" | "Обед" | "Уровень образования родителей" | "Расовая принадлежность" | "Прохождение подготовительного курса";

function Chart() {
  const [group, setGroup] = React.useState<tSelect>("Гендер"); 
  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as tSelect);
  }

  const genderQuery = useScoreByGender();
  const lunchQuery = useScoreByLunch();
  const parentQuery = useScoreByParent();
  const raceQuery = useScoreByRace();
  const testPrepQuery = useScoreByTestPrep();

  const currentQuery = (() => {
    switch (group) {
      case "Гендер":
        return genderQuery;
      case "Обед":
        return lunchQuery;
      case "Уровень образования родителей":
        return parentQuery;
      case "Расовая принадлежность":
        return raceQuery;
      case "Прохождение подготовительного курса":
        return testPrepQuery;
      default:
        return genderQuery;
    }
  })();

  const data = React.useMemo(() => {
    return currentQuery.data ? formatAggregateToRow(currentQuery.data) : [];
  }, [currentQuery.data]);

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
      <GroupGrid data={data}/>
      <GroupChart data={data}/>
    </div>
  );
}

export default Chart;