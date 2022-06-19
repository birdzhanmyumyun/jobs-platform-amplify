import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    style: ButtonStyles
    children?: React.ReactNode
    type?: HTMLButtonTypes
}

type ButtonStyles = 'primary' | 'outlined'

type HTMLButtonTypes = 'button' | 'submit' | 'reset'

export function Button(props: ButtonProps) {
    const {style, type, children} = props;
    return (
        <button 
            className={styles[style]}
            type={type}
        >
            {children}
        </button>
    )
}