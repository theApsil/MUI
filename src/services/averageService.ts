import {apiFetch} from "./apiClient";
import {AggregateData} from "../types/AggregateData";

export const fetchScoreByRace = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/students");
}

export const fetchScoreByParent = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/students");
}

export const fetchScoreByTestPrep = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/students");
}

export const fetchScoreByGender = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/students");
}

export const fetchScoreByLunch = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/students");
}