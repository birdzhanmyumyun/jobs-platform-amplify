import React, { useState } from 'react';
import { signIn } from '../../services/AuthService';
import styles from './SignIn.module.css';
import { emailValidator } from '../../utils/validators';
import { FormState } from '../SignUp/hooks/useSignUpFormValidator';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input/Input'

interface SignInForm {
    email: string
    password: string
}

interface FormErrors {
    emailError: string
    signInError: string
}

export function SignInPage() {

    const [form, setForm] = useState<SignInForm>({
        email: '',
        password: ''
    })

    const [formErrors, setFormErrors] = useState<FormErrors>({
        emailError: '',
        signInError: ''
    });

    const nav = useNavigate();

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as keyof FormState;
        const value = e.target.value;

        const nextFormState = {
            ...form,
            [field]: value
        }
        setForm(nextFormState)
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailError = emailValidator(form.email)

        setFormErrors({
            ...formErrors,
            emailError
        })

        if (!emailError) {
            const { user, error } = await signIn(form);

            error && setFormErrors({ emailError, signInError: error.toString() })
            user && nav("/")
        }


    }
    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <Input
                label='Email'
                value={form.email}
                name='email'
                type='text'
                ariaLabel='Email field'
                onChange={onUpdateField}
                hasError={formErrors.emailError ? true : false}
                errorMessage={formErrors.emailError}
            />
            <Input
                label='Password'
                value={form.password}
                name='password'
                type='password'
                ariaLabel='Password field'
                onChange={onUpdateField}
            />
            {formErrors.signInError ? (
                <p className={styles.formFieldErrorMessage}>{formErrors.signInError}</p>
            ) : null}
            <div className={styles.formActions}>
                <button className={styles.formSubmitBtn} type="submit">
                    Sing in
                </button>
            </div>
        </form>
    )
}