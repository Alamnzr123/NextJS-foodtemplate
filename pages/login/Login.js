import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    terms: "",
  });
  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.terms !== true) {
      alert("You must agree terms & conditions");
    } else if (form.email == "" || form.password == "") {
      alert("Email / Password must be filled !");
    } else {
      const body = {
        email: form.email,
        password: form.password,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, body)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          if (response.data.status !== "success") {
            alert(response.data.status + ": " + response.data.message);
          } else {
            alert(response.data.message);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id", response.data.data);
            return router.push("/landingpage/Home");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <div className="row m-0 Auth_upper__6LgZK">
        <div className="col-md-6 Auth_bg__o9fLW ">
          <div className="mask_bg"></div>
          <div className="background_login_logo">
            <Image src="/assets/logo.svg" alt="user icon" layout="fill" />
          </div>
        </div>
        <div className="col-md-6 px-0">
          <nav className="navbar NavAuth_wrapper__PcJEB">
            <div className="container undefined"></div>
          </nav>
          <div className="container SignIn_container__k8cC9">
            <form className="SignIn_form__ZAIHo" onSubmit={(e) => onSubmit(e)}>
              <span>Welcome</span>
              <br />
              <p>Log in into your existing account.</p>
              {/* <hr style={{}} /> */}
              <div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="form-control"
                    onChange={(e) => onChangeInput(e.target.value, "email")}
                    placeholder="examplexxx@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    onChange={(e) => onChangeInput(e.target.value, "password")}
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc_checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    name="terms"
                    onChange={(e) => onChangeInput(e.target.checked, "terms")}
                  />
                  <label htmlFor="terms" style={{ left: "100px" }}>
                    {" "}
                    I aggree to terms & conditions
                  </label>
                </div>

                <button className="btn SignIn_btn_gold__YVLeP" type="submit">
                  Log in
                </button>
                <Link
                  href="/login/Login"
                  style={{
                    position: "relative",
                    textDecoration: "none",
                    left: "300px",
                    top: "30px",
                    color: "black",
                  }}
                >
                  <div>Forgot Password ?</div>
                </Link>
                <div
                  style={{
                    left: "130px",
                    position: "relative",
                    top: "50px",
                  }}
                >
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/login/Register"
                    style={{ textDecoration: "none", color: "#EFC81A" }}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
