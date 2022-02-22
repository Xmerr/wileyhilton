import React from 'react';
import { Navbar } from '@templates';

export const MainMenu = () => (
    <Navbar
        links={[
            {
                to: 'me',
                text: 'Me',
            },
        ]}
    />
);
