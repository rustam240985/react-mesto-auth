import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formValue);
  }

  return (
    <div className="sign">
      <p className="sign__title">
        Регистрация
      </p>
      <form onSubmit={handleSubmit} className="sign__form">
        <input className='sign__input' id="email" name="email" type="email" placeholder='Email' value={formValue.email} onChange={handleChange} />
        <input className='sign__input' id="password" name="password" type="password" placeholder='Пароль' value={formValue.password} onChange={handleChange} />
        <button type="submit" className="sign__link">Зарегистрироваться</button>
      </form>
      <div className="sign__sign-in">
        <span>Уже зарегистрированы? </span>
        <Link className="sign__login-link" to="/sign-in">Войти</Link>
      </div>
    </div>
  );
}

export default Register;