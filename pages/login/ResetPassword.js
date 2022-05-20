import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="row m-0 Auth_upper__6LgZK">
        <div className="col-md-6 Auth_bg__o9fLW">
          <div className="mask_bg"></div>
          <div className="background_login_logo">
            <Image src="/logo.svg" alt="user icon" layout="fill" />
          </div>
        </div>
        <div className="col-md-6 px-0">
          <nav className="navbar NavAuth_wrapper__PcJEB">
            <div className="container undefined"></div>
          </nav>
          <div className="container SignIn_container__k8cC9">
            <form className="SignIn_form__ZAIHo">
              <div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="email">
                    Create New Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    required=""
                  />
                </div>
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" htmlFor="password">
                    New Password
                  </label>
                  <input
                    className="form-control"
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
                    id="checkbox"
                    name="checkbox"
                    value="checkbox"
                  />
                  <label htmlFor="checkbox">
                    {" "}
                    I aggree to terms & conditions
                  </label>
                </div>

                <Link href="/login/Login">
                  <button className="btn SignIn_btn_gold__YVLeP" type="submit">
                    Reset Password
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
