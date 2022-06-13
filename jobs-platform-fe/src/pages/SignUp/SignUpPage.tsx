import React, { useState } from 'react';
import { signUp } from '../../services/AuthService';
import { useSignUpFormValidator, FormState } from "./hooks/useSignUpFormValidator";
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

        const { isValid } = validateForm({ form, errors});

        if (isValid) {
            signUp({ username: form.email, password: form.password })
        };

    };


    return <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input
                className={(errors.email.dirty && errors.email.error) ? styles.formFieldError : styles.formField}
                type="text"
                aria-label="Email field"
                name="email"
                value={form.email}
                onChange={onUpdateField}
                onBlur={onBlurField}
            />
            {errors.email.dirty && errors.email.error ? (
                <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
            ) : null}
        </div>
        <div className={styles.formGroup}>
            <label className={styles.formLabel}>Password</label>
            <input
                className={(errors.password.dirty && errors.password.error) ? styles.formFieldError : styles.formField}
                type="password"
                aria-label="Password field"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                onBlur={onBlurField}
            />
            {errors.password.dirty && errors.password.error ? (
                <p className={styles.formFieldErrorMessage}>{errors.password.message}</p>
            ) : null}
        </div>
        <div className={styles.formGroup}>
            <label className={styles.formLabel}>Confirm Password</label>
            <input
                className={(errors.confirmPassword.dirty && errors.confirmPassword.error) ? styles.formFieldError : styles.formField}
                type="password"
                aria-label="Confirm password field"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={onUpdateField}
                onBlur={onBlurField}

            />
            {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
                <p className={styles.formFieldErrorMessage}>{errors.confirmPassword.message}</p>
            ) : null}
        </div>
        <div className={styles.formActions}>
            <button className={styles.formSubmitBtn} type="submit">
                Sing up
            </button>
        </div>
    </form>
}

