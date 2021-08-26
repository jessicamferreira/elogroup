import React, { useState, useContext } from "react";
import StoreContext from '../../store/Context'; 
import { useHistory } from "react-router";
import Waves from "../../assets/Vector.svg";
import Avatar from "../../assets/avatar.svg";
import Bg from "../../assets/bg.svg";
import Button from "../../components/Button/index";
import "./styles.css";
import { Link } from "react-router-dom";

function initialState() {
  return {
    username: "",
    password: "",
    passwordconfirmation: "",
  };
}

const UserRegister = () => {
  const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext); 
    const history = useHistory(); 
  function onChange(event) {
      const { value, name } = event.target;
      setValues({ 
          ...values,
          [name]: value,

      })
  }

  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={Bg} />
        </div>
        <div className="login-content">
          <form>
            <img src={Avatar} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div class="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  id="username"
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="username"
                  value={values.username}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div class="div">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div class="div">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="confirme a senha"
                  value={values.passwordconfirmation}
                  onChange={onChange}
                />
              </div>
            </div>
            <Link to="/login">Já tem conta? Faça login!</Link>
            <Button className="btn"> Registrar </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;