import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { profilePageContainer, sidebarContainer, profileDetailsContainer, sectionHeader, infoCard, iconButton, descriptionStyle, detailText, detailTextStyle } from '../styles/profilePageStyles';
import { UserData } from '@/utils/Validator';

interface ProfilePageProps {
    userData: UserData;
}

const ProfilePage: React.FC<ProfilePageProps>  = ({userData}) => {
    return (
        <Box sx={profilePageContainer}>
            <Box sx={sidebarContainer}>
                <Typography sx={detailTextStyle} variant="h6">Basic Information</Typography>
                <Typography sx={detailTextStyle}>Specialization</Typography>
                <Typography sx={detailTextStyle}>Lawyer Team</Typography>
                <Typography sx={detailTextStyle}>Reviews</Typography>
                <Typography sx={detailTextStyle}>Case Information</Typography>
                <Typography sx={detailTextStyle}>Financial Information</Typography>
                <Typography sx={detailTextStyle}>Communication</Typography>
                <Typography sx={detailTextStyle}>Documents</Typography>
            </Box>

            <Box sx={profileDetailsContainer}>
                <Typography variant="h5" sx={sectionHeader}>Basic Information</Typography>

                <Box sx={infoCard}>
                    <Avatar alt="Profile Logo" sx={{ width: 60, height: 60, marginRight: '16px' }} />
                    <Box>
                        <Typography variant="h6">Tran & Sorelle</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box component="span" sx={{ backgroundColor: '#ffeb3b', borderRadius: '5px', padding: '4px', marginRight: '8px' }}>
                                {userData.rating} Rating
                            </Box>
                            <Button variant="contained" sx={iconButton}>Website Link</Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={infoCard}>
                    <Box sx={detailText}>
                        <Typography sx={detailTextStyle} variant="body2">Location</Typography>
                        <Typography sx={detailTextStyle}>{userData.location}</Typography>
                    </Box>
                    <Box sx={detailText}>
                        <Typography sx={detailTextStyle} variant="body2">Phone Number</Typography>
                        <Typography sx={detailTextStyle}>{userData.phonenumber}</Typography>
                    </Box>
                    <Box sx={detailText}>
                        <Typography sx={detailTextStyle} variant="body2">Email Address</Typography>
                        <Typography sx={detailTextStyle} >{userData.email}</Typography>
                    </Box>
                </Box>

                <Box sx={infoCard}>
                    <Typography sx={descriptionStyle}>
                        {userData.description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
