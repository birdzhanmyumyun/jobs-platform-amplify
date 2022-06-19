import React, { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.css';


interface InputProps {
    label: string
    value: string
    name: string
    type: HTMLInputTypeAttribute
    ariaLabel: string
    isDirty?: boolean
    hasError?: boolean
    errorMessage?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void

}

export function Input(props: InputProps) {
    
    const {
        label,
        value,
        name,
        type,
        ariaLabel,
        isDirty = false,
        hasError = false,
        errorMessage = '',
        onChange,
        onBlur
    } = props;
    
    return (
        <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>{label}</label>
            <input
                className={hasError ? styles.inputFieldError : styles.inputField}
                type={type}
                aria-label={ariaLabel}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {isDirty && hasError ? (
                <p className={styles.inputFieldErrorMessage}>{errorMessage}</p>
            ) : null}
        </div>
    )
}