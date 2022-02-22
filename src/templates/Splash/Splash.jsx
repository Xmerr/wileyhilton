import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { Portrait, Region, Typography } from '@atoms';
import styles from './splash.module.scss';

export const Splash = props => (
    <Region className={styles.splash} id={props.id}>
        <div>
            <Typography variant='h1'>Hi, I'm {props.name}</Typography>
            <Divider className={styles.divider} />
            <Typography variant='h4'>{props.description}</Typography>
        </div>
        <Portrait image={props.image} />
    </Region>
);

Splash.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
