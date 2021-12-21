import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      password: password,
    };

    axios.post("/auth/login", login).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
    });

    navigate("/profile");
  };

  return (
    <div className="main">
      <h2 className="loginTitle">Acessar Funimation</h2>
      <span className="loginSpan">
        Digite seu e-mail e senha para acessar sua conta.
      </span>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <h4>Account Logon</h4>
            <div className="mb-3 mx-3 my-3">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="E-mail"
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <input
                type="text"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
                required
              />
              <button type="submit" className="button">
                ACESSAR
              </button>
              <div>
                <Link to="/update">Esqueceu sua senha?</Link>
                <br></br>
                <p>
                  Não tem uma conta?
                  <Link to="/register">Crie aqui uma conta</Link>
                </p>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
