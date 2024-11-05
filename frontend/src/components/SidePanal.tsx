import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { boxStyle, typographyStyle, stackStyle, buttonStyle, toggledOffStyle, toggledOnStyle, logoutButtonStyle, logOutIconStyle, startChatButtonStyle } from '../styles/sidePanalStyle';
import { buttonIcons, buttonLabels } from '@/constants/sidePanalButtons';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';

const SidePanel: React.FC = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveButtonIndex(activeButtonIndex === index ? null : index);
    };

    return (
        <Box sx={boxStyle}>
            <Typography sx={typographyStyle}>Welcome to the Legistai!</Typography>
            <Stack sx={stackStyle}>
                {buttonLabels.map((label, index) => (
                    <Button
                        key={index}
                        sx={activeButtonIndex === index ? { ...buttonStyle, ...toggledOnStyle } : { ...buttonStyle, ...toggledOffStyle }}
                        startIcon={React.cloneElement(buttonIcons[index], { color: activeButtonIndex === index ? 'inherit' : 'black' })}
                        onClick={() => handleToggle(index)}
                    >
                        {label}
                    </Button>
                ))}

                <Button
                    sx={startChatButtonStyle}
                    startIcon={<ChatIcon />}
                >
                    Start New Chat
                </Button>
            </Stack>

            <Button
                sx={logoutButtonStyle}
                startIcon={<LogoutIcon sx={{ color: 'black' }} />}
            >
                Log Out
            </Button>
        </Box>
    );
}

export default SidePanel;
