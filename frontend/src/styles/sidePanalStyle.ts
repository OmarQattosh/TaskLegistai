
export const boxStyle = {
    position: 'fixed',
    left: '44px',
    top: '115px',
    padding: '20px',
    width: '200px',
    height: 'calc(100vh - 115px)',
    display: 'flex',
    flexDirection: 'column',
};

export const typographyStyle = {
    fontSize: '26px',
    fontWeight: 500,
    fontFamily: 'Poppins, sans-serif',
    width: '236px',
    height: '66px'
};

export const stackStyle = {
    gap: '15px',
    marginTop: '20px',
};

export const logOutIconStyle = {
    color: 'black'
};

export const startChatButtonStyle = {
    backgroundColor: 'rgba(61, 189, 188, 0.1)',
    color: '#3DBDBC',
    '& .MuiButton-startIcon': {
        color: '#3DBDBC',
    },
    width: '250px',
    height: '54px',
    borderRadius: '40px',
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingLeft: '16px',
};

export const buttonStyle = {
    width: '250px',
    height: '54px',
    borderRadius: '40px',
    fontSize: '16px',
    color: 'grey',
    fontFamily: 'Poppins, sans-serif',
    justifyContent: 'flex-start',
};

export const toggledOnStyle = {
    backgroundColor: 'black',
    color: 'white',
    '& .MuiButton-startIcon': {
        color: 'teal',
    },
};

export const toggledOffStyle = {
    backgroundColor: 'transparent',
    color: 'grey',
    '& .MuiButton-startIcon': {
        color: 'black',
    },
};

export const logoutButtonStyle = {
    position: 'absolute',
    bottom: '60px',
    width: '250px',
    height: '54px',
    borderRadius: '40px',
    justifyContent: 'flex-start',
    color: 'grey',
    fontFamily: 'Poppins, sans-serif',
};
