import { Auth } from 'aws-amplify';
import { setCurrentUser } from './UserService';



export interface UserCredentialsDto {
    email: string
    password: string
}

export interface SignInResponse {
    user?: any
    error?: any
}

export async function signUp({ email, password }: UserCredentialsDto): Promise<SignInResponse> {
    try {
        const  user = await Auth.signUp({
            username: email,
            password,
        });
        
        return { user }
    } catch (error) {
        return { error }
    }
}

export async function signIn({ email, password }: UserCredentialsDto): Promise<SignInResponse> {

    try {
        const user  = await Auth.signIn(email, password);
        setCurrentUser(user)
        return {user}
    } catch (error) {
        return { error }
    }
}

export function signOut() {
    window.localStorage.clear();
}