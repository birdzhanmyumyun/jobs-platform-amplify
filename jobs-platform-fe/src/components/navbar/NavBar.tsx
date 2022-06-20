import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export function NavBar() {
    return (
        <div className={styles.navBar}>
            <div>
                <Link className={styles.navBarItem} to="/">
                    Jobs Platform
                </Link>
            </div>
            <div className={styles.navBarRight}>
                <div>
                    <Link className={styles.navBarItem} to="/signup">
                        Sign up
                    </Link>
                </div>
                <div>
                    <Link className={styles.navBarItem} to="/signin">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )

}