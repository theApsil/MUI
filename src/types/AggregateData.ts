export interface AggregateSubject {
    subject_name: string;
    avg_score: number;
    max_score: number;
    min_score: number;
}


export interface AggregateData {
    name: string;
    subjects: AggregateSubject[];
}