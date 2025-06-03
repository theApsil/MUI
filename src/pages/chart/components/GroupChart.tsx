// @ts-nocheck

import React from 'react';
import Container from '@mui/material/Container';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { tGroup } from '../groupdata';
import SettingChart from './SettingChart';
import { LineChart } from '@mui/x-charts';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

type GroupChartProps = {
  data: tGroup;
};

function GroupChart({ data }: GroupChartProps) {
  const [series, setSeries] = React.useState({
    'math_avg_score': true,
    'math_max_score': true,
    'math_min_score': true,
    'reading_avg_score': false,
    'reading_max_score': false,
    'reading_min_score': false,
    'writing_avg_score': false,
    'writing_max_score': false,
    'writing_min_score': false,
  });

  const [chartType, setChartType] = React.useState<string>('Гистограмма');

  const getColor = (key: string) => {
    if (key.includes('math')) {
      return {
        'math_max_score': '#0d47a1',
        'math_avg_score': '#2196f3',
        'math_min_score': '#bbdefb',
      }[key];
    }

    if (key.includes('reading')) {
      return {
        'reading_max_score': '#e65100',
        'reading_avg_score': '#ff9800',
        'reading_min_score': '#ffe0b2',
      }[key];
    }

    if (key.includes('writing')) {
      return {
        'writing_max_score': '#2e7d32',
        'writing_avg_score': '#4caf50',
        'writing_min_score': '#c8e6c9',
      }[key];
    }
    
    return undefined;
  };

  const labels = {
    math_max_score: 'Максимальный балл по математике',
    math_avg_score: 'Средний балл по математике',
    math_min_score: 'Минимальный балл по математике',

    reading_max_score: 'Максимальный балл по чтению',
    reading_avg_score: 'Средний балл по чтению',
    reading_min_score: 'Минимальный балл по чтению',

    writing_max_score: 'Максимальный балл по письму',
    writing_avg_score: 'Средний балл по письму',
    writing_min_score: 'Минимальный балл по письму',
  };

  const seriesY = Object.entries(series)
    .filter(([_, value]) => value)
    .map(([key]) => ({
      dataKey: key,
      label: labels[key],
      color: getColor(key),
    }));

  const chartSetting = {
    yAxis: [
      {
        label: 'Высота(м)',
      },
    ],
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  };

  return (
    <Container maxWidth="lg">
      {chartType === 'Гистограмма' ? (
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'group_name' }]}
          series={seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          barLabel={seriesY.length === 1 ? 'value' : undefined}
          {...chartSetting}
        />
      ) : (
        <LineChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'group_name' }]}
          series={seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      )}

    <Box display="flex" gap={4} alignItems="flex-start" mb={4}>
      <FormControl>
        <FormLabel id="chart-type-label">Тип диаграммы</FormLabel>
        <RadioGroup
          aria-labelledby="chart-type-label"
          name="chart-type"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <FormControlLabel value="Гистограмма" control={<Radio />} label="Гистограмма" />
          <FormControlLabel value="Столбчатая диаграмма" control={<Radio />} label="Столбчатая диаграмма" />
        </RadioGroup>
      </FormControl>
      <SettingChart series={series} setSeries={setSeries} />
    </Box>
    </Container>
  );
}

export default GroupChart;
