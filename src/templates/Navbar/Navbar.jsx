import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.scss';
import { Link } from 'react-scroll';

export const Navbar = props => {
    const { duration, links } = props;
    let navbarHeight = styles.navbarHeight;
    navbarHeight = navbarHeight.substring(0, navbarHeight.length - 2);

    const formatLink = link => {
        if (link.link) {
            return (
                <li key={link.text}>
                    <a href={link.to} target={link.external ? '_blank' : '_self'}>
                        {link.text}
                    </a>
                </li>
            );
        }

        return (
            <li key={link.text}>
                <Link
                    activeClass={styles.active}
                    duration={duration}
                    offset={-navbarHeight}
                    smooth
                    spy
                    to={link.to}
                >
                    {link.text}
                </Link>
            </li>
        );
    };

    if (!links.length) {
        return null;
    }

    return <ul className={styles.navbar}>{links.map(formatLink)}</ul>;
};

Navbar.propTypes = {
    duration: PropTypes.number,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            external: PropTypes.bool,
            link: PropTypes.bool,
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Navbar.defaultProps = {
    duration: 500,
    links: [],
};
