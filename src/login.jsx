import React, { useState } from "react";    // 이메일과 비밀번호 입력을 캡쳐해옴

export const Login = () => {
  const [email, setEmail] = useState(''); // 이메일을 받은 다음 해당 상태를 수정하는 함수와 같은 이메일 후크 설정
  const [pass, setPass] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  console.loge(email);
}

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label for="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}