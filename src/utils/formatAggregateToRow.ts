import {AggregateData} from "../types/AggregateData";
import {AggregateDataRow} from "../types/AggregateDataRow";

export const formatAggregateToRow = (data: AggregateData[]): AggregateDataRow[] => {
    return data.map((entry, index): AggregateDataRow => {
        const row: AggregateDataRow = {
            id: index,
            group_name: entry.name,
            math_avg_score: 0,
            math_max_score: 0,
            math_min_score: 0,
            reading_avg_score: 0,
            reading_max_score: 0,
            reading_min_score: 0,
            writing_avg_score: 0,
            writing_max_score: 0,
            writing_min_score: 0,
        };

        entry.subjects.forEach((subject) => {
            const s = subject.subject_name.toLowerCase() as "math" | "reading" | "writing";

            row[`${s}_avg_score`] = subject.avg_score;
            row[`${s}_max_score`] = subject.max_score;
            row[`${s}_min_score`] = subject.min_score;
        });

        return row;
    });
};