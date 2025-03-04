
export interface ErrorI {
    errorStatus: boolean,
    errorMessage: string | null,
    errorType: 'fetchError' | null;
}