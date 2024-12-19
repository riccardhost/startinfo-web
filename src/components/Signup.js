import React from 'react';

function Signup() {

  return (

    <section>

      <h2>Cadastro</h2>

      <form>

        <label>
          Nome:
          <input type="text" name="name" required />
        </label>
        <br />
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
        <button type="submit">Cadastrar</button>

      </form>

    </section>

  );
  
}

export default Signup;
