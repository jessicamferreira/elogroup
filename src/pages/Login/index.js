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
  };
}
function login({ username, password }) {
    if (username === 'admin' && password === 'admin') {
        return { token: '1234'};
    } return { error: 'Usuário ou senha inválido'}

}
const UserLogin = () => {
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

  function onSubmit(event) {
      event.preventDefault();
      const { token } = login(values);

      if(token) {
          setToken(token);
            history.push('/');
      }
      setValues(initialState);
  }
  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={Bg} />
        </div>
        <div className="login-content">
          <form onSubmit={onSubmit}>
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
            <Link to="/register">Ainda não tem login? Cadastre-se!</Link>
            <Button className="btn"> Login </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
