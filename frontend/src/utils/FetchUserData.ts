import axios from 'axios';
import api from '../services/api';
import { UserData } from './Validator';

interface FetchResponse {
    success: boolean;
    message?: string;
    userData?: UserData;
}

export const fetchUserData = async (
    user_id: string
): Promise<FetchResponse> => {

    try {
        const response = await api.get(`/getprofile`, {
            params: { user_id },
        });
        console.log(response)
        return {
            success: true,
            userData: response.data,
        };
    } catch (error) {
        let errorMessage = "An unexpected error occurred";
        if (axios.isAxiosError(error) && error.response) {
            errorMessage = error.response.data.error || "Failed to fetch data";
        }
        return {
            success: false,
            message: errorMessage,
        };
    }
};
