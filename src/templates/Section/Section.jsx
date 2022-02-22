import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { Region, Typography } from '@atoms';
import styles from './section.module.scss';

export const Section = props => {
    const classes = [styles.section];

    if (props.narrow) {
        classes.push(styles.narrow);
    }

    const renderBody = () => {
        const { body } = props;

        if (!body) {
            return null;
        }

        if (typeof body === 'string' || !body.length) {
            return (
                <Typography paragraph className={styles.body}>
                    {body}
                </Typography>
            );
        }

        return body.map((paragraph, index) => (
            <Typography key={index} paragraph className={styles.body}>
                {paragraph}
            </Typography>
        ));
    };

    return (
        <Region id={props.id} className={classes.join(' ')}>
            <Typography variant='h4' className={styles.title}>
                {props.title}
            </Typography>
            <Divider />
            {renderBody()}
        </Region>
    );
};

Section.propTypes = {
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    id: PropTypes.string,
    narrow: PropTypes.bool,
    title: PropTypes.string.isRequired,
};
