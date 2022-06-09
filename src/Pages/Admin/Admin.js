import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

import Card from "../../Component/Card/Card";
import "./Admin.scss";
import IsError from "../../Constant/IsError/IsError";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    
    console.log("here", email, password);
    setIsLoading(true);
    axios
      .post("/login", 
        {email, password}
      )
     
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
            "login",
            JSON.stringify({
              userLogin: true,
              token: response.data.access_token,
            })
        );
        toast.success("Logged In Successfully")
        setIsLoading(false);
        setIsError("");
        if(typeof window !== "undefined"){
          localStorage.setItem("token", JSON.stringify(response))
        }
      }).then(()=>{
        navigate("/adminblog");
      })
      .catch(error => {
        setIsLoading(false);
        setIsError(error.response.data.message)
        toast.error(error.response.data.error);
      } );
  };

  return (
    <div className="app__admin">
        {isError && <IsError />}
      {
          <div>
              <h1 className="head-text"> ADMIN LOGIN </h1>
      <Card>
        <form
          action="submit"
          onSubmit={loginHandler}
          className="app__admin-form"
        >
          <div>
            <label htmlFor="title">Username:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address.."
              ref={emailInputRef}
            />
          </div>

          <div>
            <label htmlFor="title">Password:</label>
            <input
              type="password"
              required
              id="password"
              placeholder="password.."
              ref={passwordInputRef}
            />
          </div>

          <div className="actions">
            {!isLoading ? (
              <button>LOGIN</button>
            ) : (
              <button>LOGGING IN...</button>
            )}
          </div>
        </form>
      </Card>
          </div>
      }
    </div>
  );
};

export default Admin;
