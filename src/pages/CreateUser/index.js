import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const createUser = {
      email: email,
      password: password,
      name: name
    };

    axios.post("/user/create", createUser).then((response) => {
      const token = response.data.token;
      console.log(response);
      localStorage.setItem("token", token);
    });


  };

  return (
    <div className="main">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <h4>Para começar, crie uma conta na Funimation</h4>
            <div className="mb-3 mx-3 my-3">
              <input
                type="text"
                id="Name"
                className="form-control"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="E-mail"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <input
                type="text"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button type="submit" className="button">
                ACESSAR
              </button>
              <div>
                <Link to="/update">Esqueceu sua senha?</Link>
                <br></br>
                <p>
                  Já tem uma conta?
                  <Link to="/login">Entre aqui!</Link>
                </p>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
