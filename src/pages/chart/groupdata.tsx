export type tGroup = {
    "id": number, 
    "group_name": string | number, 
    "math_min_score": number , 
    "math_max_score": number , 
    "math_avg_score": number,
    "reading_min_score": number , 
    "reading_max_score": number , 
    "reading_avg_score": number,
    "writing_min_score": number , 
    "writing_max_score": number , 
    "writing_avg_score": number,
}[];

export const gender: tGroup = [
  { "id": 1, "group_name": "female", "math_min_score": 0, "math_max_score": 100, "math_avg_score": 63.63, "reading_min_score": 17, "reading_max_score": 100, "reading_avg_score": 72.61, "writing_min_score": 10, "writing_max_score": 100, "writing_avg_score": 72.47 },
  { "id": 2, "group_name": "male", "math_min_score": 27, "math_max_score": 100, "math_avg_score": 68.73, "reading_min_score": 23, "reading_max_score": 100, "reading_avg_score": 65.47, "writing_min_score": 15, "writing_max_score": 100, "writing_avg_score": 63.31 }
];


export const lunch: tGroup = [
  { "id": 1, "group_name": "standard", "math_min_score": 19, "math_max_score": 100, "math_avg_score": 70.03, "reading_min_score": 26, "reading_max_score": 100, "reading_avg_score": 71.65, "writing_min_score": 22, "writing_max_score": 100, "writing_avg_score": 70.82 },
  { "id": 2, "group_name": "free/reduced", "math_min_score": 0, "math_max_score": 100, "math_avg_score": 58.92, "reading_min_score": 17, "reading_max_score": 100, "reading_avg_score": 64.65, "writing_min_score": 10, "writing_max_score": 100, "writing_avg_score": 63.02 }
];

export const parental_level_of_education: tGroup = [
  { "id": 1, "group_name": "bachelor's degree", "math_min_score": 29, "math_max_score": 100, "math_avg_score": 69.39, "reading_min_score": 41, "reading_max_score": 100, "reading_avg_score": 73, "writing_min_score": 38, "writing_max_score": 100, "writing_avg_score": 73.38 },
  { "id": 2, "group_name": "some college", "math_min_score": 19, "math_max_score": 100, "math_avg_score": 67.13, "reading_min_score": 23, "reading_max_score": 100, "reading_avg_score": 69.46, "writing_min_score": 19, "writing_max_score": 99, "writing_avg_score": 68.84 },
  { "id": 3, "group_name": "master's degree", "math_min_score": 40, "math_max_score": 95, "math_avg_score": 69.75, "reading_min_score": 42, "reading_max_score": 100, "reading_avg_score": 75.37, "writing_min_score": 46, "writing_max_score": 100, "writing_avg_score": 75.68 },
  { "id": 4, "group_name": "associate's degree", "math_min_score": 26, "math_max_score": 100, "math_avg_score": 67.88, "reading_min_score": 31, "reading_max_score": 100, "reading_avg_score": 70.93, "writing_min_score": 35, "writing_max_score": 100, "writing_avg_score": 69.9 },
  { "id": 5, "group_name": "high school", "math_min_score": 8, "math_max_score": 99, "math_avg_score": 62.14, "reading_min_score": 24, "reading_max_score": 99, "reading_avg_score": 64.7, "writing_min_score": 15, "writing_max_score": 100, "writing_avg_score": 62.45 },
  { "id": 6, "group_name": "some high school", "math_min_score": 0, "math_max_score": 97, "math_avg_score": 63.5, "reading_min_score": 17, "reading_max_score": 100, "reading_avg_score": 66.94, "writing_min_score": 10, "writing_max_score": 100, "writing_avg_score": 64.89 }
];

export const race_ethnicity: tGroup = [
  { "id": 1, "group_name": "group B", "math_min_score": 8, "math_max_score": 97, "math_avg_score": 63.45, "reading_min_score": 24, "reading_max_score": 97, "reading_avg_score": 67.35, "writing_min_score": 15, "writing_max_score": 96, "writing_avg_score": 65.6 },
  { "id": 2, "group_name": "group C", "math_min_score": 0, "math_max_score": 98, "math_avg_score": 64.46, "reading_min_score": 17, "reading_max_score": 100, "reading_avg_score": 69.1, "writing_min_score": 10, "writing_max_score": 100, "writing_avg_score": 67.83 },
  { "id": 3, "group_name": "group A", "math_min_score": 28, "math_max_score": 100, "math_avg_score": 61.63, "reading_min_score": 23, "reading_max_score": 100, "reading_avg_score": 64.67, "writing_min_score": 19, "writing_max_score": 97, "writing_avg_score": 62.67 },
  { "id": 4, "group_name": "group D", "math_min_score": 26, "math_max_score": 100, "math_avg_score": 67.36, "reading_min_score": 31, "reading_max_score": 100, "reading_avg_score": 70.03, "writing_min_score": 32, "writing_max_score": 100, "writing_avg_score": 70.15 },
  { "id": 5, "group_name": "group E", "math_min_score": 30, "math_max_score": 100, "math_avg_score": 73.82, "reading_min_score": 26, "reading_max_score": 100, "reading_avg_score": 73.03, "writing_min_score": 22, "writing_max_score": 100, "writing_avg_score": 71.41 }
];

export const test_preparation_course: tGroup = [
  { "id": 1, "group_name": "none", "math_min_score": 0, "math_max_score": 100, "math_avg_score": 64.08, "reading_min_score": 17, "reading_max_score": 100, "reading_avg_score": 66.53, "writing_min_score": 10, "writing_max_score": 100, "writing_avg_score": 64.5 },
  { "id": 2, "group_name": "completed", "math_min_score": 23, "math_max_score": 100, "math_avg_score": 69.7, "reading_min_score": 37, "reading_max_score": 100, "reading_avg_score": 73.89, "writing_min_score": 36, "writing_max_score": 100, "writing_avg_score": 74.42 }
];