import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { profileCardContainerStyle, profileNameContainerStyle, profileNameStyle, jobDescriptionStyle } from '../styles/headerStyles';
import { ProfileCardProps } from './Header';


const ProfileCard: React.FC<ProfileCardProps> = ({userName}) => {
    return (
        <Box sx={profileCardContainerStyle}>

            <Avatar
                alt="Arun Singh"
                src="avatar.svg" 
                sx={{
                    width: 50,
                    height: 50,
                }}
            />

            <Box sx={profileNameContainerStyle}>
                <Typography variant="subtitle2" sx={profileNameStyle}>
                    {userName}
                </Typography>
                <Typography variant="body2" sx={jobDescriptionStyle}>
                    Product Manager
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfileCard;
