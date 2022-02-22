import React from 'react';
import PropTypes from 'prop-types';
import styles from './region.module.scss';

export const Region = props => (
    <div id={props.id} className={styles.outer}>
        <div className={props.className}>{props.children}</div>
    </div>
);

Region.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
};
