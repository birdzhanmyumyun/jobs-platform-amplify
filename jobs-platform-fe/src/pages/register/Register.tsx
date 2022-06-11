import React, { useState } from 'react';
import { signUp, UserSignUpDto } from '../../services/AuthService';
import { useLoginFormValidator, FormState } from "./hooks/useLoginFormValidator";
import styles from './Register.module.css';

export interface SignUpForm {
    email: string
    password: string
    confirmPassword: string
}

export function Register() {

    const [form, setForm] = useState<SignUpForm>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { onBlurField, validateForm, errors } = useLoginFormValidator(form);

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as keyof FormState;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        console.log(e.target.value)
        setForm(nextFormState);
        console.log(nextFormState)
        if (errors[field].dirty)
          validateForm({
            form: nextFormState,
            errors,
            field,
          });
    };

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
        // if (!isValid) return;
        signUp({ username: form.email, password: form.password })
        alert(JSON.stringify(form, null, 2));
        validateForm({ form, errors });
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

