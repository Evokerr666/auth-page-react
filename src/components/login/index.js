import React, { useState } from 'react';
import {login} from '../../loginService';
import Loader from '../loader';
import ErrorDisplay, {SuccessWindow} from '../../script';
import './style.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateErrorReq, setStateErrorReq] = useState('');
  const [stateIsSuccess, setStateIsSuccess] = useState(false);
  const [stateLoading, setStateLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStateLoading(true)
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    await login(formData, () => {
      setStateLoading(false)
       setStateIsSuccess(true)
    }, (e) => {
      setStateLoading(false)
      setStateErrorReq(e)
    })
  };
  if(stateLoading) return <Loader />
  if(stateIsSuccess) return <SuccessWindow />
  if(stateErrorReq) return <ErrorDisplay error={stateErrorReq}/>
  
  return (
    <div className="login-form">
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='Введите электронную почту'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Введите пароль'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;