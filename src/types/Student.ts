export interface Subject {
    subject: string;
    score: number;
}

export interface Student {
    id: number;
    gender: string;
    race_ethnicity: string;
    parent_education: string;
    lunch: string;
    scores : Subject[];
}