import React, { useState } from 'react';

const Login = ({ onLogin }) => {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    onLogin(formValue);
  }

  return (
    <div className="sign">
      <p className="sign__title">
        Вход
      </p>
      <form onSubmit={handleLogin} className="sign__form">
        <input className='sign__input' required id="email" name="email" type="email" placeholder='Email' value={formValue.email} onChange={handleChange} />
        <input className='sign__input' required id="password" name="password" type="password" placeholder='Пароль' value={formValue.password} onChange={handleChange} />
        <button type="submit" className="sign__link">Войти</button>
      </form>
    </div>
  )
}

export default Login;