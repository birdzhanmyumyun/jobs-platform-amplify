import { signOut } from "../../services/AuthService"
import { getCurrentUser } from "../../services/UserService"
import { Button } from '../../components/button/Button'
import { useNavigate } from "react-router-dom"
import styles from './SignOut.module.css'

export function SignOutPage() {
    const nav = useNavigate()
    const currentUser = getCurrentUser();

    const goBack = () => nav(-1);

    const goHome = () => nav('/')

    const signOutAndGoHome = () => {
        signOut();
        goHome()
    }

    const goToSignIn = () => {
        nav('/signin')
    }

    return (

        <div className={styles.page}>
            {currentUser ?

                <>
                    Are you sure you want to sign out of your account?
                    <div className={styles.actionButtons}>
                        <Button style='outlined' type='button' onClick={goBack}>No</Button>
                        <Button style='primary' type='button' onClick={signOutAndGoHome}>Yes</Button>
                    </div>
                </>
                : <>
                    There is no user signed in.
                    <div className={styles.actionButtons}>
                        <Button style='outlined' type='button' onClick={goHome}>Back to home</Button>
                        <Button style='primary' type='button' onClick={goToSignIn}>Sign in</Button>
                    </div>
                </>
            }
        </div>


    )
}