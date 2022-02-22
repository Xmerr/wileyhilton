import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.scss';

export const Section = props => (
    <div id={props.id} className={styles.outer}>
        <div className={props.className}>{props.children}</div>
    </div>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
};
