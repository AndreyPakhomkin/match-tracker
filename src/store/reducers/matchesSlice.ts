import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Match {
    id: string;
    team1: string;
    team2: string;
    score1: number;
    score2: number;
    date: string;
    status: 'upcoming' | 'live' | 'finished';
}

interface MatchesState {
    matches: Match[];
    loading: boolean;
    error: string | null;
}

const initialState: MatchesState = {
    matches: [],
    loading: false,
    error: null,
};

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        addMatch: (state, action: PayloadAction<Match>) => {
            state.matches.push(action.payload);
        },
        updateMatch: (state, action: PayloadAction<Match>) => {
            const index = state.matches.findIndex(match => match.id === action.payload.id);
            if (index !== -1) {
                state.matches[index] = action.payload;
            }
        },
        deleteMatch: (state, action: PayloadAction<string>) => {
            state.matches = state.matches.filter(match => match.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { addMatch, updateMatch, deleteMatch, setLoading, setError } = matchesSlice.actions;
export default matchesSlice.reducer; 