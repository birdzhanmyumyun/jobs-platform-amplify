import { Auth } from 'aws-amplify';


export interface UserSignUpDto {
    username: string
    password: string
}

export async function signUp({username, password}: UserSignUpDto) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}