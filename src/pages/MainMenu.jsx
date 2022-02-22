import React from 'react';
import { Navbar } from '@templates';

export const MainMenu = () => (
    <Navbar
        links={[
            {
                text: 'Me',
                to: 'me',
            },
            {
                text: 'About',
                to: 'about',
            },
            {
                text: 'Contact',
                to: 'contact',
            },
            {
                text: 'Storybook',
                external: true,
                link: true,
                to: 'http://story.wileyhilton.com',
            },
            {
                text: 'Github',
                external: true,
                link: true,
                to: 'https://github.com/xmerr',
            },
            {
                text: 'LinkedIn',
                external: true,
                link: true,
                to: 'http://www.linkedin.com/in/wiley-hilton',
            },
        ]}
    />
);
