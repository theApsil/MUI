import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../services/peopleService";
import {Student} from "../types/Student";

export const useStudents = () => {
    return useQuery<Student[]>({
        queryKey: ["student"],
        queryFn: fetchPeople,
    });
};