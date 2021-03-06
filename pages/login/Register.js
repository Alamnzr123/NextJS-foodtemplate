import React, { useState } from "react";
import swal from "sweetalert";
import { toast } from "react-toastify";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    phone: "",
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
    } else if (
      form.name == "" ||
      form.email == "" ||
      form.password == "" ||
      form.phone == ""
    ) {
      alert("All field must be filled !");
    } else if (form.password1 !== form.password2) {
      alert("Password not match !, check your input again");
    } else {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password1,
        phone: form.phone,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          swal({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          }).then(() => {
            router.push("/login/Login");
          });
        })
        .catch((err) => {
          const error = err.response.data.errors;
          error.map((e) => {
            return toast.error(e, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
        });
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="row m-0 Auth_upper__6LgZK">
        <div className="col-md-6 Auth_bg__o9fLW_Register">
          <div className="mask_bg_register"></div>
          <div className="background_register_logo">
            <Image src="/logo.svg" alt="user icon" layout="fill" />
          </div>
        </div>
        <div className="col-md-6 px-0">
          <nav className="navbar NavAuth_wrapper__PcJEB">
            <div className="container undefined"></div>
          </nav>
          <div className="container SignIn_container__k8cC9">
            <form
              method="post"
              encType="multipart/form-data"
              onSubmit={(e) => onSubmit(e)}
              className="SignIn_form__ZAIHo"
            >
              <span>Let&apos;s Get Started !</span>
              <br />
              <p>Create new account to access all features</p>
              <div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => onChangeInput(e.target.value, "name")}
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="email">
                    Email address*
                  </label>
                  <input
                    className="form-control"
                    placeholder="Enter email address"
                    type="email"
                    onChange={(e) => onChangeInput(e.target.value, "email")}
                    name="email"
                    id="email"
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    placeholder="08xxxxxxxx"
                    type="number"
                    name="phone"
                    id="phone"
                    onChange={(e) => onChangeInput(e.target.value, "phone")}
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="password1">
                    Create New Password
                  </label>
                  <input
                    className="form-control"
                    placeholder="Create New Password"
                    type="password"
                    onChange={(e) => onChangeInput(e.target.value, "password1")}
                    name="password1"
                    id="password1"
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="password2">
                    New Password
                  </label>
                  <input
                    className="form-control"
                    placeholder="New password"
                    type="password"
                    name="password2"
                    onChange={(e) => onChangeInput(e.target.value, "password2")}
                    id="password2"
                    required=""
                  />
                </div>
                {/* <div className="InputAuth_box__SHTUc"><label className="form-label" for="image">image</label><input className="form-control" placeholder="image" type="file" name="image" onChange={onChangeimage} id="image" required=""/></div> */}

                <div className="InputAuth_box__SHTUc_checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    onChange={(e) => onChangeInput(e.target.checked, "terms")}
                  />
                  <label htmlFor="terms"> I aggree to terms & Conditions</label>
                  <br />
                </div>

                <button className="btn SignIn_btn_gold__YVLeP" type="submit">
                  Register Account
                </button>
                <div
                  style={{
                    left: "100px",
                    top: "24px",
                    position: "relative",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    href="/login/Login"
                    style={{ textDecoration: "none", color: "#EFC81A" }}
                  >
                    Log in Here
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
export default Register;
