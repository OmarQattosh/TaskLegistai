import React from 'react';
import { Avatar, Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { caretStyle, headerContainerStyle, iconButtonStyle, languageIconStyle, languagePickerStyle, logoStyle, profileNameContainerStyle, profileNameStyle, searchBarStyle } from '../styles/headerStyles';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileCard from './ProfileCard';

export interface ProfileCardProps {
  userName: string;
}

const Header: React.FC<ProfileCardProps> = ({userName}) => {
  return (
    <Box sx={headerContainerStyle}>
      <Box component="img" src="logo.svg" alt="Logo" sx={logoStyle} />
      <TextField
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        placeholder="Search"
        sx={searchBarStyle}
      />
      <Box sx={languagePickerStyle}>
        <Box component="img" src="USA.svg" alt="Language Icon" sx={languageIconStyle} />
        <Typography variant="body2">ENG</Typography>
        <KeyboardArrowDownIcon sx={caretStyle} />
      </Box>
      <IconButton aria-label="notifications" sx={iconButtonStyle}>
        <NotificationsIcon />
      </IconButton>
      <ProfileCard userName = {userName} />
    </Box>
  );
};

export default Header;
