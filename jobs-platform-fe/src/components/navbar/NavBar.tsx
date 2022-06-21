import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { getUserEmail } from '../../services/UserService'

export function NavBar() {
    
    const userEmail = getUserEmail();


    const signedInNavPart = (<div className={styles.navBarRight}>
        <div>
            <Link className={styles.navBarItem} to="/user">
                {userEmail}
            </Link>
        </div>
        <div>
            <Link className={styles.navBarItem} to="/signout">
                Sign out
            </Link>
        </div>
    </div>)

    const nonSignedInNavPart = <div className={styles.navBarRight}>
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
    return (
        <div className={styles.navBar}>
            <div>
                <Link className={styles.navBarItem} to="/">
                    Jobs Platform
                </Link>
            </div>
            {userEmail ? signedInNavPart : nonSignedInNavPart}
        </div>
    )

}