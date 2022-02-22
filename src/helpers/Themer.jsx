import React, { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import lime from '@mui/material/colors/lime';
import blue from '@mui/material/colors/grey';

export const Themer = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // Set Theme Colors
    let theme = useMemo(
        () =>
            createTheme({
                palette: {
                    background: {
                        default: '#2e3445',
                    },
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: lime,
                    secondary: blue,
                    text: {
                        primary: '#fff',
                    },
                },
            }),
        [prefersDarkMode]
    );

    // Responsive Settings
    theme = responsiveFontSizes(theme);

    // Settings css variables
    document.documentElement.style.setProperty('--primary-color', theme.palette.primary[400]);
    document.documentElement.style.setProperty('--secondary-color', theme.palette.secondary[800]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default Themer;
