import React, { useState } from 'react';
import { emailValidator, passwordValidator, passwordConfirmationValidator } from '../utils/validators';



enum FormField {
    Email = 'email',
    Password = 'password',
    ConfirmPassword = 'confirmPassword',
  } 
export type FormState = {
    [key in FormField]?: FieldState
}

export type Form = {
    [key in FormField]?: string
}

interface FieldState {
    dirty: boolean
    error: boolean
    message: string
}

interface ValidateFormParams {
    form: Form
    errors: FormState
    field?: string
}

export const useFormValidator = (form: Form) => {
    const formFields = Object.keys(form) as Array<keyof Form>;

    const initialFormState = formFields.map((field) => {
        return {[field]: {dirty: false, error: false, message: ''}}
    }) as FormState

    const [errors, setErrors] = useState<FormState>(initialFormState)

    const validateForm = ({ form, errors, field  }: ValidateFormParams) => {
        let isValid = true;

        let nextErrors = JSON.parse(JSON.stringify(errors)) as FormState;

        const { email, password, confirmPassword } = form;

        if (nextErrors.email?.dirty || (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email || '');
            if(nextErrors.email) {
                nextErrors.email.dirty = true;
                nextErrors.email.error = !!emailMessage;
                nextErrors.email.message = emailMessage;
                if (!!emailMessage) isValid = false;
            }
        }

        if (nextErrors.password?.dirty || (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password || '');
            if(nextErrors.password) {
                nextErrors.password.dirty = true;
                nextErrors.password.error = !!passwordMessage;
                nextErrors.password.message = passwordMessage || '';
                if (!!passwordMessage) isValid = false;
            }
        }

        if (
            nextErrors.confirmPassword?.dirty || (field ? field === "confirmPassword" : true)
        ) {
            const confirmPasswordMessage = passwordConfirmationValidator(
                password || '',
                confirmPassword || ''
            );
            if(nextErrors.confirmPassword) {
                nextErrors.confirmPassword.dirty = true;
                nextErrors.confirmPassword.error = !!confirmPasswordMessage;
                nextErrors.confirmPassword.message = confirmPasswordMessage || '';
                if (!!confirmPasswordMessage) isValid = false;
            }
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

        if (fieldError && fieldError.dirty) return;

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