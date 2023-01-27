// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import najottalim from "../../img/najottalim.png";
import wifi from "../../img/wifi.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom'

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // const navigate = useNavigate();

  const submit = (data) => {
    // validate form input
    if (data.password !== data.password2) {
      alert("Passwords do not match | Parollar mos kelmayabdi!");
      return;
    }
    alert("Najot Talim WiFi ga oq yo'l 😃");
    window.open("http://10.10.0.1/login", "_blank");

    // Send data to server for authentication or registration

    // navigate to homepage
    // navigate("/https://najottalim.uz/");
  };
  // const submit = (data) => {
  //  <Link to={{ pathname: "https://najottalim.uz/" }} target="_blank"></Link>
  // }
  return (
    <div className="box">
      <div className="block">
        <h2>
          Sign up from Najot Ta'lim WiFi <img src={wifi} alt="img" />{" "}
        </h2>
        <p>Complete here to register</p>

        <form onSubmit={handleSubmit(submit)}>
          <div className="boxspan">
            <input
              className="user"
              autoComplete="off"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: { value: 13 },
                minLength: { value: 5 },
              })}
            />
            {errors.name?.type === "required" && <span>Name is required</span>}
            {errors.name?.type === "maxLength" && (
              <span>Max Length Exceed</span>
            )}
            {errors.name?.type === "minLength" && <span>Min Length 5</span>}
          </div>
          <div className="boxspan">
            <input
              className="password"
              autoComplete="off"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: { value: 10 },
                minLength: { value: 5 },
              })}
            />
            {errors.password?.type === "required" && (
              <span>Password is required</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span>Max Length Exceed</span>
            )}
            {errors.password?.type === "minLength" && <span>Min Length 5</span>}
          </div>
          <div className="boxspan">
            <input
              className="password"
              autoComplete="off"
              type="password"
              placeholder="Confirm password"
              {...register("password2", {
                required: true,
                maxLength: { value: 10 },
                minLength: { value: 5 },
              })}
            />
            {errors.password2?.type === "required" && (
              <span>Password is required</span>
            )}
            {errors.password2?.type === "maxLength" && (
              <span>Max Length Exceed</span>
            )}
            {errors.password2?.type === "minLength" && (
              <span>Min Length 5</span>
            )}
          </div>
          <div className="boxspan">
            <input
              className="email"
              autoComplete="off"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                maxLength: { value: 20 },
                minLength: { value: 5 },
              })}
            />
            {errors.email?.type === "required" && (
              <span>Email is required</span>
            )}
            {errors.email?.type === "maxLength" && (
              <span>Max Length Exceed</span>
            )}
            {errors.email?.type === "minLength" && <span>Min Length 5</span>}
          </div>
          <button className="btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <img className="block2" src={najottalim} alt="img" />
    </div>
  );
};
