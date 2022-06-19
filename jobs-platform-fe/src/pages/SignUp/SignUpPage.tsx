import React, { useState } from 'react';
import { signUp } from '../../services/AuthService';
import { useSignUpFormValidator, FormState } from "./hooks/useSignUpFormValidator";
import { Input } from '../../components/input/Input';

import styles from './SignUp.module.css';


export interface SignUpForm {
    email: string
    password: string
    confirmPassword: string
}

export function SignUpPage() {

    const [form, setForm] = useState<SignUpForm>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { onBlurField, validateForm, errors } = useSignUpFormValidator(form);

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as keyof FormState;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field].dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
    };

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validateForm({ form, errors, forceTouchErrors: true });

        const { isValid } = validateForm({ form, errors });

        if (isValid) {
            signUp({ email: form.email, password: form.password })
        };

    };


    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <Input
                type='text'
                ariaLabel='Email field'
                label='Email'
                value={form.email}
                name={'email'}
                onChange={onUpdateField}
                onBlur={onBlurField}
                isDirty={errors.email.dirty}
                hasError={errors.email.error}
                errorMessage={errors.email.message}
            />
            <Input
                label='Password'
                value={form.password}
                name='password'
                type='password'
                ariaLabel='Password field'
                onChange={onUpdateField}
                onBlur={onBlurField}
                isDirty={errors.password.dirty}
                hasError={errors.password.error}
                errorMessage={errors.password.message}
            />
            <Input
                label='Confirm password'
                value={form.confirmPassword}
                name='confirmPassword'
                type='password'
                ariaLabel='Confirm password field'
                onChange={onUpdateField}
                onBlur={onBlurField}
                isDirty={errors.confirmPassword.dirty}
                hasError={errors.confirmPassword.error}
                errorMessage={errors.confirmPassword.message}
            />
            <div className={styles.formActions}>
                <button className={styles.formSubmitBtn} type="submit">
                    Sing up
                </button>
            </div>
        </form>
    )
}

