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
    'Максимальная высота': true,
    'Средняя высота': false,
    'Минимальная высота': false,
  });

  const [chartType, setChartType] = React.useState<string>('Гистограмма');

  const seriesY = Object.entries(series)
    .filter(([_, value]) => value)
    .map(([key]) => ({
      dataKey: key,
      label: key,
      color:
        key === 'Максимальная высота' ? '#bbdefb' :
        key === 'Средняя высота' ? '#64b5f6' :
        key === 'Минимальная высота' ? '#1976d2' :
        undefined,
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
