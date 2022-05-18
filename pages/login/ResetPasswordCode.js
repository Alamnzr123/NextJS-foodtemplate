import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const ResetPasswordCode = () => {
  return (
    <div>
      <Head>
        <title>Reset Password Code</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <div>
        <div className="row m-0 Auth_upper__6LgZK">
          <div className="col-md-6 Auth_bg__o9fLW">
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
              <form className="SignIn_form__ZAIHo">
                <div className="fp">
                  <div className="InputAuth_box__SHTUc">
                    <label className="form-label" htmlFor="email">
                      Code 6 Digit
                    </label>
                    <input
                      className="form-control"
                      placeholder=""
                      type="email"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <Link href="/login/ResetPassword">
                    <button
                      className="btn SignIn_btn_gold__YVLeP"
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCode;
