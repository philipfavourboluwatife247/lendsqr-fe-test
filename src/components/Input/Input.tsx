import React, { InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  type = 'text',
  showPasswordToggle = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          type={inputType}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className={styles.showButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
