import {apiFetch} from "./apiClient";
import {AggregateData} from "../types/AggregateData";

export const fetchScoreByRace = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/analytics/analytics-score-by-race");
}

export const fetchScoreByParent = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/analytics/analytics-score-by-parent");
}

export const fetchScoreByTestPrep = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/analytics/analytics-score-by-test-prep");
}

export const fetchScoreByGender = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/analytics/analytics-score-by-gender");
}

export const fetchScoreByLunch = async (): Promise<AggregateData[]> => {
    return await apiFetch<AggregateData[]>("/api/analytics/analytics-score-by-lunch");
}