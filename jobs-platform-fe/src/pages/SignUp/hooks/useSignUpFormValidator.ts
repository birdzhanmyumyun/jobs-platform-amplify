import React, { useState } from 'react';
import { SignUpForm } from '../SignUpPage'
import { emailValidator, passwordValidator, passwordConfirmationValidator } from '../../../utils/validators';

export interface FormState {
    email: FieldState
    password: FieldState
    confirmPassword: FieldState
}

interface FieldState {
    dirty: boolean
    error: false
    message: string
}

interface ValidateFormParams {
    form: SignUpForm
    errors: FormState
    field?: string
    forceTouchErrors?: boolean
}

export const useSignUpFormValidator = (form: SignUpForm) => {
    const [errors, setErrors] = useState<FormState>({
        email: {
            dirty: false,
            error: false,
            message: ''
        },
        password: {
            dirty: false,
            error: false,
            message: ''
        },
        confirmPassword: {
            dirty: false,
            error: false,
            message: ''
        }
    })

    const validateForm = ({ form, errors, field, forceTouchErrors = false }: ValidateFormParams) => {
        let isValid = true;

        let nextErrors = JSON.parse(JSON.stringify(errors));

        const { email, password, confirmPassword } = form;

        if (nextErrors.email.dirty || (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email);
            nextErrors.email.dirty = true;
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }

        if (nextErrors.password.dirty || (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password);
            nextErrors.password.dirty = true;
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        if (
            nextErrors.confirmPassword.dirty || (field ? field === "confirmPassword" : true)
        ) {
            const confirmPasswordMessage = passwordConfirmationValidator(
                password,
                confirmPassword
            );
            nextErrors.confirmPassword.dirty = true;
            nextErrors.confirmPassword.error = !!confirmPasswordMessage;
            nextErrors.confirmPassword.message = confirmPasswordMessage;
            if (!!confirmPasswordMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
        const field = e.target.name as keyof FormState;
        const fieldError = errors[field];

        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true
            }
        };
        validateForm({ form, field, errors: updatedErrors });
    }

    return {
        validateForm,
        onBlurField,
        errors,
    };
}