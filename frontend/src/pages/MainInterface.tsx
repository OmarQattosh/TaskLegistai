'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import SidePanal from '@/components/SidePanal';
import Header from '@/components/Header';
import ProfilePage from '@/components/ProfilePage';
import { fetchUserData } from '../utils/FetchUserData';
import { UserData } from '../utils/Validator';

const MainInterface: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const userId = localStorage.getItem('userID');
        console.log(userId)

        if (userId) {
            fetchUserData(userId)
                .then((response) => {
                    if (response.success && response.userData) {
                        setUserData(response.userData);
                    } else {
                        console.log('Failed to fetch data')
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [router]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            {userData?.name ? <Header userName= {userData?.name} /> : <div>No user data available</div>}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    flexDirection: 'row',
                }}
            >
                <SidePanal />
                {userData ? <ProfilePage userData={userData} /> : <div>No user data available</div>}            </Box>
        </Box>
    );
};

export default MainInterface;
