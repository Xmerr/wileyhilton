import React from 'react';
import { Navbar } from '..';
import styles from './navbar.stories.module.scss';

export default {
    title: 'Templates/Navbar',
    component: Navbar,
    args: {
        duration: 500,
        links: [
            {
                text: 'Element 1',
                to: 'e1',
            },
            {
                text: 'Element 2',
                to: 'e2',
            },
            {
                link: true,
                text: 'internal (same tab)',
                to: 'http://www.google.com',
            },
            {
                external: true,
                link: true,
                text: 'external (new tab)',
                to: 'http://www.google.com',
            },
        ],
    },
    argTypes: {
        duration: {
            description: 'How long the transitions should take',
        },
        links: {
            description:
                'The links to be displayed. The properties of a link are: to (either the id of the target or href), text, link (if this is a new page), and external (if it should open in a new tab)',
        },
    },
};

const Template = args => (
    <div className={styles.container}>
        <Navbar {...args} />
        <div id='e1' className={styles.exampleSection}>
            This is e1
        </div>
        <div id='e2' className={styles.exampleSection}>
            This is e2
        </div>
    </div>
);

export const Default = Template.bind({});
