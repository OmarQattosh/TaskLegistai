'use client'
import { useState } from 'react';
import { TextField, Button, Typography, Box, Rating } from '@mui/material';
import { validateRegistration, ValidationErrors } from '@/utils/Validator';
import { handleRegistration } from '@/utils/HandleRegistration';
import { useRouter } from 'next/navigation';
import Test11SVG from '@/assets/test11.svg'

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phonenumber: '',
        email: '',
        description: '',
        rating: 0
    });

    const [errors, setErrors] = useState<ValidationErrors>({});
    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(formData)
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = async () => {
        const result = await handleRegistration(formData);

        if (result.success && result.userid) {
            setErrors({});
            localStorage.setItem('userID', result.userid);
            router.push('/MainInterface');
        } else {
            setErrors(result.errors || {});
        }
    };

    const handleContinue = () => {
        setErrors(validateRegistration(formData));
    };

    const [value, setValue] = useState<number | null>(2);
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh'
            }}
        >
            <Box
                sx={{
                    flex: 1,
                }}

            >
                <Test11SVG style={{ width: '100%', height: '100%', opacity: 0.8 }} />

            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create an account
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            error={!!errors.name}
                            helperText={errors.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="standard"
                        />

                        <TextField
                            label="Location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="standard"
                        />

                        <TextField
                            label="Phone Number"
                            name="phonenumber"
                            value={formData.phonenumber}
                            error={!!errors.phonenumber}
                            helperText={errors.phonenumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="standard"
                        />

                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            error={!!errors.email}
                            helperText={errors.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="standard"
                        />

                        <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="standard"
                            multiline
                            rows={3}
                        />

                        <Rating
                            sx={{ paddingBlockStart: '20px' }}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                marginTop: '20px'
                            }}
                        >
                            <Button sx={{ borderRadius: '20px' }} variant="contained" color="primary" onClick={handleRegister}>
                                Register
                            </Button>
                            <Button sx={{ borderRadius: '20px' }} variant="outlined" color="primary" onClick={handleContinue}>
                                Continue
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterPage;
