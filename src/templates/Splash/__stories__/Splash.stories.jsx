import React from 'react';
import { Splash } from '../';
import { elfo } from '@assets';

export default {
    title: 'Templates/Splash',
    component: Splash,
    args: {
        name: 'Elfo',
        image: elfo,
        description: "What's your name?",
    },
    argTypes: {
        title: {
            description: 'Largest text on the site',
        },
        image: {
            description: 'Image to use, should be square',
        },
    },
};

const Template = args => <Splash {...args} />;

export const Default = Template.bind({});
