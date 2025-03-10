import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorI } from '../../types/Error';

const initialState: ErrorI = {
    errorStatus: false,
    errorMessage: null,
    errorType: null,
}

interface ErrorPayload {
    errorStatus: boolean,
    errorMessage: string | null,
    errorType: 'fetchError' | null;
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorPayload>) => {
            state.errorStatus = action.payload.errorStatus;
            state.errorMessage = action.payload.errorMessage;
            state.errorType = action.payload.errorType;
        }
    }
})

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;