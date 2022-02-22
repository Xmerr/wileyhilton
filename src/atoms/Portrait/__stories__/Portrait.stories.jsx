import React from 'react';
import { Portrait } from '..';
import { elfo } from '@assets';

export default {
    title: 'Atoms/Portrait',
    component: Portrait,
    args: {
        image: elfo,
    },
    argTypes: {
        image: {
            description: 'Image to use, should be square',
        },
    },
};

const Template = args => <Portrait {...args} />;

export const Default = Template.bind({});
