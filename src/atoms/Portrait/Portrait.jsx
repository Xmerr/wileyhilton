import React from 'react';
import PropTypes from 'prop-types';
import styles from './portrait.module.scss';

export const Portrait = props => (
    <div className={styles.portrait}>
        <img src={props.image} />
    </div>
);

Portrait.propTypes = {
    image: PropTypes.string.isRequired,
};
