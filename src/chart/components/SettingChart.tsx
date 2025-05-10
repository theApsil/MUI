import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import { Typography } from '@mui/material';

type tSeries= {
        'Максимальная балл математика': boolean,
        'Средний балл математика': boolean,
        'Минимальный балл математика': boolean,
        'Максимальная балл чтение': boolean,
        'Средний балл чтение': boolean,
        'Минимальный балл чтение': boolean,
        'Максимальная балл письмо': boolean,
        'Средний балл письмо': boolean,
        'Минимальный балл письмо': boolean,
    }

type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<
      React.SetStateAction<tSeries>
    >;
};

function SettingChart({ series, setSeries }: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">На диаграмме показать:</FormLabel>
      
      <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
        Математика
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Максимальная балл математика"]}
            onChange={handleChange}
            name="Максимальная балл математика"
            sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }}
          />
        }
        label="Максимальная балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Средний балл математика"]}
            onChange={handleChange}
            name="Средний балл математика"
            sx={{ color: '#2196f3', '&.Mui-checked': { color: '#2196f3' } }}
          />
        }
        label="Средний балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Минимальный балл математика"]}
            onChange={handleChange}
            name="Минимальный балл математика"
            sx={{ color: '#bbdefb', '&.Mui-checked': { color: '#bbdefb' } }}
          />
        }
        label="Минимальный балл"
      />

      <Typography variant="subtitle1" color="secondary" sx={{ mt: 2 }}>
        Чтение
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Максимальная балл чтение"]}
            onChange={handleChange}
            name="Максимальная балл чтение"
            sx={{ color: '#e65100', '&.Mui-checked': { color: '#e65100' } }}
          />
        }
        label="Максимальная балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Средний балл чтение"]}
            onChange={handleChange}
            name="Средний балл чтение"
            sx={{ color: '#ff9800', '&.Mui-checked': { color: '#ff9800' } }}
          />
        }
        label="Средний балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Минимальный балл чтение"]}
            onChange={handleChange}
            name="Минимальный балл чтение"
            sx={{ color: '#ffe0b2', '&.Mui-checked': { color: '#ffe0b2' } }}
          />
        }
        label="Минимальный балл"
      />

      <Typography variant="subtitle1" sx={{ color: '#2e7d32', mt: 2 }}>
        Письмо
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Максимальная балл письмо"]}
            onChange={handleChange}
            name="Максимальная балл письмо"
            sx={{ color: '#2e7d32', '&.Mui-checked': { color: '#2e7d32' } }}
          />
        }
        label="Максимальная балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Средний балл письмо"]}
            onChange={handleChange}
            name="Средний балл письмо"
            sx={{ color: '#4caf50', '&.Mui-checked': { color: '#4caf50' } }}
          />
        }
        label="Средний балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["Минимальный балл письмо"]}
            onChange={handleChange}
            name="Минимальный балл письмо"
            sx={{ color: '#c8e6c9', '&.Mui-checked': { color: '#c8e6c9' } }}
          />
        }
        label="Минимальный балл"
      />
    </FormControl>
  );
}

export default SettingChart;