import React, { useState } from 'react';
import { SignUpForm } from '../Register'
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

interface ValidateProps {
    form: SignUpForm
    errors: FormState
    field?: string
}



export const useLoginFormValidator = (form: SignUpForm) => {
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

    const validateForm = ({form, errors, field} : ValidateProps) => {
        let isValid = true;

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors));

       

        const { email, password, confirmPassword } = form;

        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }

        if (nextErrors.password.dirty && (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        if (
            nextErrors.confirmPassword.dirty &&
            (field ? field === "confirmPassword" : true)
        ) {
            const confirmPasswordMessage = passwordConfirmationValidator(
                password,
                confirmPassword
            );
            nextErrors.confirmPassword.error = !!confirmPasswordMessage;
            nextErrors.confirmPassword.message = confirmPasswordMessage;
            if (!!confirmPasswordMessage) isValid = false;
        }

        setErrors(nextErrors);

        console.log(nextErrors)

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