import React, { useState, FormEvent } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { LoginFormData, FormErrors } from '../../types';
import styles from './Login.module.scss';
import logo from '../../assets/images/logo.svg';
import illustration from '../../assets/images/login-illustration.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/users');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Lendsqr Logo" className={styles.logo} />

        <div className={styles.illustrationWrapper}>
          <img
            src={illustration}
            alt="Login illustration"
            className={styles.illustration}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subtitle}>Enter details to login.</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              showPasswordToggle
            />

            <NavLink to="/forgot-password" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </NavLink>

            <Button type="submit" fullWidth loading={loading}>
              LOG IN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
