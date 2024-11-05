export interface UserData {
    name: string;
    location: string;
    phonenumber: string;
    email: string;
    description:string
    rating?: number | null;
}

export interface ValidationErrors {
    name?: string;
    phonenumber?: string;
    email?: string;
}

export const validateRegistration = (UserData: UserData): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!UserData.name.trim()) {
        errors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!UserData.email) {
        errors.email = "Email is required.";
    } else if (!emailRegex.test(UserData.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!UserData.phonenumber) {
        errors.phonenumber = "Phone number is required"
    } else if (UserData.phonenumber.length != 10) {
        errors.phonenumber = "Please enter a valid phone number"
    }

    return errors;
};