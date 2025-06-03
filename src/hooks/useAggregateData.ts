import { useQuery } from "@tanstack/react-query";
import {
    fetchScoreByRace,
    fetchScoreByParent,
    fetchScoreByTestPrep,
    fetchScoreByGender,
    fetchScoreByLunch,
} from "../services/averageService";
import { AggregateData } from "../types/AggregateData";

export const useScoreByRace = () => {
    return useQuery<AggregateData[]>({
        queryKey: ["score", "race"],
        queryFn: fetchScoreByRace,
    });
};

export const useScoreByParent = () => {
    return useQuery<AggregateData[]>({
        queryKey: ["score", "parent"],
        queryFn: fetchScoreByParent,
    });
};

export const useScoreByTestPrep = () => {
    return useQuery<AggregateData[]>({
        queryKey: ["score", "testPrep"],
        queryFn: fetchScoreByTestPrep,
    });
};

export const useScoreByGender = () => {
    return useQuery<AggregateData[]>({
        queryKey: ["score", "gender"],
        queryFn: fetchScoreByGender,
    });
};

export const useScoreByLunch = () => {
    return useQuery<AggregateData[]>({
        queryKey: ["score", "lunch"],
        queryFn: fetchScoreByLunch,
    });
};