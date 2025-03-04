
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Loading {
    loading: boolean
}

const initialState: Loading = {
    loading: true
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;