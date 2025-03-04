import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Match } from '../../types/match';

interface MatchesState {
    matches: Match[] | null;
}

const initialState: MatchesState = {
    matches: null,
};

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        putMatches: (state, action: PayloadAction<Match[]>) => {
            state.matches = action.payload
        }
    },
});

export const { putMatches } = matchesSlice.actions;
export default matchesSlice.reducer; 