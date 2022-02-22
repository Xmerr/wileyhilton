import React from 'react';
import { Section } from '..';

export default {
    title: 'Templates/Section',
    component: Section,
    args: {
        title: 'Cool Section',
        body: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est a tellus ultrices placerat id nec nibh.',
            'Sed suscipit purus id magna tristique, eu egestas sapien ornare. Nulla purus sapien, venenatis eleifend aliquam molestie, pharetra sit amet massa.',
            'Duis sit amet accumsan odio, eget eleifend magna. Vestibulum tincidunt id arcu id tristique. Nullam tristique hendrerit nulla, vitae facilisis erat sodales ac.',
            'Maecenas ut volutpat mauris, ac finibus tortor. Aliquam consequat sollicitudin enim, vestibulum tincidunt purus elementum vitae. Etiam fermentum lacus eget nibh elementum egestas.',
            'Sed vitae nulla orci. Mauris rhoncus tempor pretium. Nunc dictum, est non ornare consequat, est ante pulvinar dolor, non commodo sapien nisl sit amet neque. Sed malesuada libero a nisi pretium, venenatis euismod mauris porta.',
            'Maecenas libero lorem, cursus sed velit sit amet, sagittis consectetur purus. Sed mollis, risus et aliquam dictum, ipsum metus condimentum libero, eget maximus purus ex vitae sapien. Proin eget ultrices sapien.',
        ],
        narrow: true,
        id: 'about',
    },
    argTypes: {
        title: {
            description: 'Header for the section',
        },
        body: {
            description: 'Main content area',
        },
        narrow: {
            description: 'If the section should be thin',
        },
        id: {
            description: 'unique identifier for linking to',
        },
    },
};

const Template = args => <Section {...args} />;

export const Default = Template.bind({});
