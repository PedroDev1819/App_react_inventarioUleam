import "../styles/LoginPage.css";
import '../styles/GlobalStyles.css';
import logoUleam from "../assets/logos/logoUleam.png";
import { useState } from "react";
import users from "../data/users.json";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = users.find(
      (u) => u.nombre == user && u.contrasena == password
    );

    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound));
      alert(`Welcome ${userFound.nombre}`);
      navigate('/dashboard');
    } else {
      alert("User not found");
    }
  };

  return (
    <>
      <header className="top-bar"></header>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="image-container">
          <img src={logoUleam} alt="" />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nombre de usuario"
            required
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Contraseña"
            required
            onChange={(p) => setPassword(p.target.value)}
          />
        </div>

        <div className="input-container">
          <button className="btn"></button>
        </div>

        <div className="forgotpassword"></div>
      </form>
    </>
  );
}

export default LoginPage;
