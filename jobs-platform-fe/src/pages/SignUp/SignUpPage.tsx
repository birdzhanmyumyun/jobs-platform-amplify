import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/AuthService';
import { useFormValidator, FormState, Form } from "../../hooks/useFormValidator";
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';

import styles from './SignUp.module.css';

export function SignUpPage() {

    const [form, setForm] = useState<Form>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [signUpError, setSignUpError] = useState<string>('')

    const { onBlurField, validateForm, errors } = useFormValidator(form);

    const nav = useNavigate();

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as keyof FormState;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field]?.dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
    };

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validateForm({ form, errors });

        const { isValid } = validateForm({ form, errors });

        if (isValid) {
            const { error, user } = await signUp({ email: form.email || '', password: form.password || '' })

            error && setSignUpError(error.toString().substring(error.toString().indexOf(':') + 1))
            user && nav("/")

        };

    };


    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <Input
                type='text'
                ariaLabel='Email field'
                label='Email'
                value={form.email || ''}
                name={'email'}
                onChange={onUpdateField}
                onBlur={onBlurField}
                isDirty={errors.email?.dirty}
                hasError={errors.email?.error}
                errorMessage={errors.email?.message}
            />
            <Input
                label='Password'
                value={form.password || ''}
                name='password'
                type='password'
                ariaLabel='Password field'
                onChange={onUpdateField}
                onBlur={onBlurField}
                isDirty={errors.password?.dirty}
                hasError={errors.password?.error}
                errorMessage={errors.password?.message}
            />
            <Input
                label='Confirm password'
                value={form.confirmPassword || ''}
                name='confirmPassword'
                type='password'
                ariaLabel='Confirm password field'
                onChange={onUpdateField}
                onBlur={onBlurField}
                isDirty={errors.confirmPassword?.dirty}
                hasError={errors.confirmPassword?.error}
                errorMessage={errors.confirmPassword?.message}
            />
            {signUpError ? (
                <p className={styles.formFieldErrorMessage}>{signUpError}</p>
            ) : null}
            <div className={styles.formActions}>
                <Button
                    type='submit'
                    style='primary'
                >
                    Sign up
                </Button>
            </div>
        </form>
    )
}

