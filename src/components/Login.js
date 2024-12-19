import React from 'react';

function Login() {

  return (

    <section>

      <h2>Login</h2>

      <form>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <br />

        <label>
          Senha:
          <input type="password" name="password" required />
        </label>

        <br />

        <button type="submit">Entrar</button>

      </form>

    </section>
    
  );
}

export default Login;
