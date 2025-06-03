export interface AggregateDataRow {
    id: number,
    group_name: string
    math_avg_score: number;
    math_max_score: number;
    math_min_score: number;
    reading_avg_score: number;
    reading_max_score: number;
    reading_min_score: number;
    writing_avg_score: number;
    writing_max_score: number;
    writing_min_score: number;
}