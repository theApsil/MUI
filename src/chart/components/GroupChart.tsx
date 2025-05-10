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
    'Максимальная балл математика': true,
    'Средний балл математика': true,
    'Минимальный балл математика': false,
    'Максимальная балл чтение': false,
    'Средний балл чтение': true,
    'Минимальный балл чтение': false,
    'Максимальная балл письмо': false,
    'Средний балл письмо': true,
    'Минимальный балл письмо': false,
  });

  const [chartType, setChartType] = React.useState<string>('Гистограмма');

  const getColor = (key: string) => {
    if (key.includes('математика')) {
      return {
        'Максимальная балл математика': '#0d47a1',
        'Средний балл математика': '#2196f3',
        'Минимальный балл математика': '#bbdefb'
      }[key];
    }
    
    if (key.includes('чтение')) {
      return {
        'Максимальная балл чтение': '#e65100',
        'Средний балл чтение': '#ff9800',
        'Минимальный балл чтение': '#ffe0b2'
      }[key];
    }
    
    if (key.includes('письмо')) {
      return {
        'Максимальная балл письмо': '#2e7d32',
        'Средний балл письмо': '#4caf50', 
        'Минимальный балл письмо': '#c8e6c9'
      }[key];
    }
    
    return undefined;
  };

  const seriesY = Object.entries(series)
    .filter(([_, value]) => value)
    .map(([key]) => ({
      dataKey: key,
      label: key,
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
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
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
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
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
