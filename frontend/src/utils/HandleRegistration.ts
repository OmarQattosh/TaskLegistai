import axios from 'axios';
import api from '../services/api';
import { UserData, validateRegistration, ValidationErrors } from './Validator';

interface RegistrationResponse {
    success: boolean;
    message?: string;
    userid?: string;
    errors?: ValidationErrors;
}

export const handleRegistration = async (
    userData: UserData
): Promise<RegistrationResponse> => {
    const validationErrors = validateRegistration(userData);
    if (Object.keys(validationErrors).length > 0) {
        return { success: false, errors: validationErrors };
    }

    try {
        const response = await api.post('/register', userData);

        return {
            success: true,
            userid: response.data.user_id
        };
    } catch (error) {
        let errorMessage = "An unexpected error occurred";
        if (axios.isAxiosError(error) && error.response) {
            errorMessage = error.response.data.error || "Failed to register";
        }
        return {
            success: false,
        };
    }
};
