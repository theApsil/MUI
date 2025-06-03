import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import { Typography } from '@mui/material';

type tSeries = {
    'math_max_score': boolean,
    'math_avg_score': boolean,
    'math_min_score': boolean,
    'reading_max_score': boolean,
    'reading_avg_score': boolean,
    'reading_min_score': boolean,
    'writing_max_score': boolean,
    'writing_avg_score': boolean,
    'writing_min_score': boolean,
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
            checked={series["math_max_score"]}
            onChange={handleChange}
            name="math_max_score"
            sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }}
          />
        }
        label="Максимальная балл"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={series["math_avg_score"]}
            onChange={handleChange}
            name="math_avg_score"
            sx={{ color: '#2196f3', '&.Mui-checked': { color: '#2196f3' } }}
          />
        }
        label="Средний балл"
      />
        <FormControlLabel
            control={
                <Checkbox
                    checked={series["math_min_score"]}
                    onChange={handleChange}
                    name="math_min_score"
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
                    checked={series["reading_max_score"]}
                    onChange={handleChange}
                    name="reading_max_score"
                    sx={{ color: '#e65100', '&.Mui-checked': { color: '#e65100' } }}
                />
            }
            label="Максимальная балл"
        />
        <FormControlLabel
            control={
                <Checkbox
                    checked={series["reading_avg_score"]}
                    onChange={handleChange}
                    name="reading_avg_score"
                    sx={{ color: '#ff9800', '&.Mui-checked': { color: '#ff9800' } }}
                />
            }
            label="Средний балл"
        />
        <FormControlLabel
            control={
                <Checkbox
                    checked={series["reading_min_score"]}
                    onChange={handleChange}
                    name="reading_min_score"
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
                    checked={series["writing_max_score"]}
                    onChange={handleChange}
                    name="writing_max_score"
                    sx={{ color: '#2e7d32', '&.Mui-checked': { color: '#2e7d32' } }}
                />
            }
            label="Максимальная балл"
        />
        <FormControlLabel
            control={
                <Checkbox
                    checked={series["writing_avg_score"]}
                    onChange={handleChange}
                    name="writing_avg_score"
                    sx={{ color: '#4caf50', '&.Mui-checked': { color: '#4caf50' } }}
                />
            }
            label="Средний балл"
        />
        <FormControlLabel
            control={
                <Checkbox
                    checked={series["writing_min_score"]}
                    onChange={handleChange}
                    name="writing_min_score"
                    sx={{ color: '#c8e6c9', '&.Mui-checked': { color: '#c8e6c9' } }}
                />
            }
            label="Минимальный балл"
        />
    </FormControl>
  );
}

export default SettingChart;