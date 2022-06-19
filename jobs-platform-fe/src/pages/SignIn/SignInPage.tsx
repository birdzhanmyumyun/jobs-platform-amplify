import React, { useState } from 'react';
import { signIn } from '../../services/AuthService';
import { emailValidator } from '../../utils/validators';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input/Input'
import { useFormValidator, FormState, Form } from "../../hooks/useFormValidator";

import styles from './SignIn.module.css';

export function SignInPage() {

    const [form, setForm] = useState<Form>({email: '', password: ''})

    const [signInError, setSignInError] = useState<string>('')

    // const [formErrors, setFormErrors] = useState<FormErrors>({
    //     emailError: '',
    //     signInError: ''
    // });
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
        console.log(isValid)
        console.log(errors)

        if (isValid) {
            const { user, error } = await signIn({email: form.email || '', password: form.password || ''});

            error && setSignInError(error.toString())
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
                <button className={styles.formSubmitBtn} type="submit">
                    Sing in
                </button>
            </div>
        </form>
    )
}