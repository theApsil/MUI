import {Student} from "../types/Student";
import {apiFetch} from "./apiClient";


export const fetchPeople = async (): Promise<Student[]> => {
    const response = await apiFetch<{ students: Student[] }>("/api/students")
    return response.students
}