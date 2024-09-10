import {ErrorStateTypes} from "./ErrorStateTypes";

export interface ErrorState {
    type: ErrorStateTypes;
    message: string;
}

export const ErrorState = {
    ServerError: (message?: string): ErrorState => ({
        type: ErrorStateTypes.SERVER_ERROR,
        message: message ?? 'Internal server error occur'
    }),
    ValidationError: (message: string): ErrorState => ({
        type: ErrorStateTypes.VALIDATION_ERROR,
        message
    }),
    InternetError: (): ErrorState => ({
        type: ErrorStateTypes.SERVER_ERROR,
        message: 'Internet Problem'
    })

}