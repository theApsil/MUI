export type tGroup = {
    "id": number, 
    "Группа": string | number, 
    "Минимальный балл математика": number , 
    "Максимальная балл математика": number , 
    "Средний балл математика": number,
    "Минимальный балл чтение": number , 
    "Максимальная балл чтение": number , 
    "Средний балл чтение": number,
    "Минимальный балл письмо": number , 
    "Максимальная балл письмо": number , 
    "Средний балл письмо": number,
}[];

export const gender: tGroup = [
  { "id": 1, "Группа": "female", "Минимальный балл математика": 0, "Максимальная балл математика": 100, "Средний балл математика": 63.63, "Минимальный балл чтение": 17, "Максимальная балл чтение": 100, "Средний балл чтение": 72.61, "Минимальный балл письмо": 10, "Максимальная балл письмо": 100, "Средний балл письмо": 72.47 },
  { "id": 2, "Группа": "male", "Минимальный балл математика": 27, "Максимальная балл математика": 100, "Средний балл математика": 68.73, "Минимальный балл чтение": 23, "Максимальная балл чтение": 100, "Средний балл чтение": 65.47, "Минимальный балл письмо": 15, "Максимальная балл письмо": 100, "Средний балл письмо": 63.31 }
];


export const lunch: tGroup = [
  { "id": 1, "Группа": "standard", "Минимальный балл математика": 19, "Максимальная балл математика": 100, "Средний балл математика": 70.03, "Минимальный балл чтение": 26, "Максимальная балл чтение": 100, "Средний балл чтение": 71.65, "Минимальный балл письмо": 22, "Максимальная балл письмо": 100, "Средний балл письмо": 70.82 },
  { "id": 2, "Группа": "free/reduced", "Минимальный балл математика": 0, "Максимальная балл математика": 100, "Средний балл математика": 58.92, "Минимальный балл чтение": 17, "Максимальная балл чтение": 100, "Средний балл чтение": 64.65, "Минимальный балл письмо": 10, "Максимальная балл письмо": 100, "Средний балл письмо": 63.02 }
];

export const parental_level_of_education: tGroup = [
  { "id": 1, "Группа": "bachelor's degree", "Минимальный балл математика": 29, "Максимальная балл математика": 100, "Средний балл математика": 69.39, "Минимальный балл чтение": 41, "Максимальная балл чтение": 100, "Средний балл чтение": 73, "Минимальный балл письмо": 38, "Максимальная балл письмо": 100, "Средний балл письмо": 73.38 },
  { "id": 2, "Группа": "some college", "Минимальный балл математика": 19, "Максимальная балл математика": 100, "Средний балл математика": 67.13, "Минимальный балл чтение": 23, "Максимальная балл чтение": 100, "Средний балл чтение": 69.46, "Минимальный балл письмо": 19, "Максимальная балл письмо": 99, "Средний балл письмо": 68.84 },
  { "id": 3, "Группа": "master's degree", "Минимальный балл математика": 40, "Максимальная балл математика": 95, "Средний балл математика": 69.75, "Минимальный балл чтение": 42, "Максимальная балл чтение": 100, "Средний балл чтение": 75.37, "Минимальный балл письмо": 46, "Максимальная балл письмо": 100, "Средний балл письмо": 75.68 },
  { "id": 4, "Группа": "associate's degree", "Минимальный балл математика": 26, "Максимальная балл математика": 100, "Средний балл математика": 67.88, "Минимальный балл чтение": 31, "Максимальная балл чтение": 100, "Средний балл чтение": 70.93, "Минимальный балл письмо": 35, "Максимальная балл письмо": 100, "Средний балл письмо": 69.9 },
  { "id": 5, "Группа": "high school", "Минимальный балл математика": 8, "Максимальная балл математика": 99, "Средний балл математика": 62.14, "Минимальный балл чтение": 24, "Максимальная балл чтение": 99, "Средний балл чтение": 64.7, "Минимальный балл письмо": 15, "Максимальная балл письмо": 100, "Средний балл письмо": 62.45 },
  { "id": 6, "Группа": "some high school", "Минимальный балл математика": 0, "Максимальная балл математика": 97, "Средний балл математика": 63.5, "Минимальный балл чтение": 17, "Максимальная балл чтение": 100, "Средний балл чтение": 66.94, "Минимальный балл письмо": 10, "Максимальная балл письмо": 100, "Средний балл письмо": 64.89 }
];

export const race_ethnicity: tGroup = [
  { "id": 1, "Группа": "group B", "Минимальный балл математика": 8, "Максимальная балл математика": 97, "Средний балл математика": 63.45, "Минимальный балл чтение": 24, "Максимальная балл чтение": 97, "Средний балл чтение": 67.35, "Минимальный балл письмо": 15, "Максимальная балл письмо": 96, "Средний балл письмо": 65.6 },
  { "id": 2, "Группа": "group C", "Минимальный балл математика": 0, "Максимальная балл математика": 98, "Средний балл математика": 64.46, "Минимальный балл чтение": 17, "Максимальная балл чтение": 100, "Средний балл чтение": 69.1, "Минимальный балл письмо": 10, "Максимальная балл письмо": 100, "Средний балл письмо": 67.83 },
  { "id": 3, "Группа": "group A", "Минимальный балл математика": 28, "Максимальная балл математика": 100, "Средний балл математика": 61.63, "Минимальный балл чтение": 23, "Максимальная балл чтение": 100, "Средний балл чтение": 64.67, "Минимальный балл письмо": 19, "Максимальная балл письмо": 97, "Средний балл письмо": 62.67 },
  { "id": 4, "Группа": "group D", "Минимальный балл математика": 26, "Максимальная балл математика": 100, "Средний балл математика": 67.36, "Минимальный балл чтение": 31, "Максимальная балл чтение": 100, "Средний балл чтение": 70.03, "Минимальный балл письмо": 32, "Максимальная балл письмо": 100, "Средний балл письмо": 70.15 },
  { "id": 5, "Группа": "group E", "Минимальный балл математика": 30, "Максимальная балл математика": 100, "Средний балл математика": 73.82, "Минимальный балл чтение": 26, "Максимальная балл чтение": 100, "Средний балл чтение": 73.03, "Минимальный балл письмо": 22, "Максимальная балл письмо": 100, "Средний балл письмо": 71.41 }
];

export const test_preparation_course: tGroup = [
  { "id": 1, "Группа": "none", "Минимальный балл математика": 0, "Максимальная балл математика": 100, "Средний балл математика": 64.08, "Минимальный балл чтение": 17, "Максимальная балл чтение": 100, "Средний балл чтение": 66.53, "Минимальный балл письмо": 10, "Максимальная балл письмо": 100, "Средний балл письмо": 64.5 },
  { "id": 2, "Группа": "completed", "Минимальный балл математика": 23, "Максимальная балл математика": 100, "Средний балл математика": 69.7, "Минимальный балл чтение": 37, "Максимальная балл чтение": 100, "Средний балл чтение": 73.89, "Минимальный балл письмо": 36, "Максимальная балл письмо": 100, "Средний балл письмо": 74.42 }
];