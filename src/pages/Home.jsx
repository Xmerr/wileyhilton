import React from 'react';
import { Splash } from '@templates';
import { headshot } from '@assets';

export const Home = props => (
    <Splash
        description="I'm a full stack website application developer based in the U.S."
        id={props.id}
        image={headshot}
        name='Wiley'
    />
);
