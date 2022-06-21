import React, { useState } from 'react';
import { signIn } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input/Input'
import { Button } from '../../components/button/Button'
import { useFormValidator, FormState, Form } from "../../hooks/useFormValidator";

import styles from './SignIn.module.css';

export function SignInPage() {

    const [form, setForm] = useState<Form>({ email: '', password: '' })

    const [signInError, setSignInError] = useState<string>('')

    const { onBlurField, validateForm, errors } = useFormValidator(form);

    const nav = useNavigate();

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as keyof FormState;
        const value = e.target.value;

        const nextFormState = {
            ...form,
            [field]: value
        }
        setForm(nextFormState)
        if (errors[field]?.dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validateForm({ form, errors });

        const { isValid } = validateForm({ form, errors });


        if (isValid) {
            const { user, error } = await signIn({ email: form.email || '', password: form.password || '' });
            console.log('email: ', form.email)
            console.log('password: ', form.password)
            console.log('user: ', user)
            error && setSignInError(error.toString().substring(error.toString().indexOf(':') + 1));
            user && nav("/")
        }
    }

    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <Input
                label='Email'
                value={form.email || ''}
                name='email'
                type='text'
                ariaLabel='Email field'
                onChange={onUpdateField}
                hasError={errors.email?.error ? true : false}
                errorMessage={errors.email?.message}
                isDirty={errors.email?.dirty}
                onBlur={onBlurField}
            />
            <Input
                label='Password'
                value={form.password || ''}
                name='password'
                type='password'
                ariaLabel='Password field'
                onChange={onUpdateField}
            />
            {signInError ? (
                <p className={styles.formFieldErrorMessage}>{signInError}</p>
            ) : null}
            <div className={styles.formActions}>
                <Button
                    type='submit'
                    style='primary'
                >
                    Sign in
                </Button>
            </div>
        </form>
    )
}