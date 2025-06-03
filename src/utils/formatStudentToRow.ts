import {Student} from "../types/Student";
import {StudentRow} from "../types/StudentRow";

export const formatStudentToRow = (student: Student): StudentRow => {

    console.log('student.scores:', student.scores);
    console.log(Array.isArray(student.scores));

    const scoreMap = student.scores.reduce<Record<string, number>>((acc, s) => {
        console.log(s.subject)
        acc[s.subject] = s.score;
        return acc;
    }, {});
    console.log('scoreMap:', scoreMap);
    return {
        id: student.id,
        gender: student.gender,
        race_ethnicity: student.race_ethnicity,
        parent_education: student.parent_education,
        lunch: student.lunch,

        math_points: scoreMap['math'] ?? 0,
        reading_points: scoreMap['reading'] ?? 0,
        writing_points: scoreMap['writing'] ?? 0,
    }
}
