import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Section = styled.footer`
  background-color: var(--secondary-color);
  color: var(--color-2);
  padding-top: 200px;
  font-family: "Airbnb Cereal App Light";
  margin-top: 1800px;
  width: 100%;
  position: absolute;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 64px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: #707070;
  text-transform: capitalize;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const List = styled.div`
  margin-top: 150px;
  padding-left: 6vw;
`;

const Item = styled.a`
  display: inline-block;
  color: #707070;
  margin-right: 15px;
  font-size: 16px;
  margin-bottom: 25px;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: var(--color-5);
  float: right;

  @media screen and (max-width: 500px) {
    text-align: center;
    float: none;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <div className="mx-auto">
          <Title>Eat, Cook, Repeat</Title>
          <Description>Share your best Recipe by uploading here !</Description>
        </div>
        <List className="mx-auto">
          <Item>Product</Item>
          <Item>Company</Item>
          <Item>Learn More</Item>
          <Item>Get In Touch</Item>
          <Copyright>
            <span>&copy; Arkademy</span>
          </Copyright>
        </List>
      </Container>

      <style jsx>{`
        /* Global CSS */
        :root {
          --main-color: #ffffff;
          --main-color-2: #fff5ec;
          --secondary-color: #efc81a;
          --color-1: #ffffff;
          --color-2: #2e266f;
          --color-3: #3f3a3a;
          --color-4: #707070;
          --color-5: #000000;
          --shadow-black-100: 0 5px 15px rgba(0, 0, 0, 0.1);
          --shadow-black-300: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* Animation */
        @keyframes bounceTop_01 {
          0%,
          100% {
            transform: translateY(-30px);
          }
          50% {
            transform: translateY(0px);
          }
        }

        body {
          overflow-x: hidden;
          background-color: var(--main-color);
        }

        * {
          margin: 0;
          padding: 0;
          outline: none !important;
        }

        img {
          max-width: 100%;
          vertical-align: middle;
        }

        ul {
          list-style: none;
        }

        .full {
          height: 82vh;
        }

        iframe {
          border-radius: 7px;
          width: 85%;
          height: 380px;

          @media screen and (max-width: 576px) {
            height: 190px;
          }
        }

        /* Navbar */
        .navbar {
          background: transparent;
          padding: 20px 0;
          transition: all 0.5 ease;
          text-decoration: none;
        }

        .navbar.navbar-shrink {
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          background-color: var(--main-color);
          padding: 10px 0;
        }

        .navbar > .container {
          padding: 15px 0;
        }

        .navbar .navbar-brand {
          font-size: 20px;
          color: var(--color-2);
          font-weight: 500;
          font-family: "Airbnb Cereal App Medium";
          text-transform: capitalize;
        }

        .navbar .nav-item {
          margin-right: 40px;
        }

        .navbar .nav-item a {
          text-decoration: none;
        }

        .navbar .nav-item .nav-link {
          color: var(--color-2);
          text-transform: capitalize;
          font-family: "Airbnb Cereal App Medium";
          font-size: 16px;
          font-weight: 400;
          padding: 5px 0;
          position: relative;
        }

        .navbar .nav-item .nav-link::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 1px;
          background-color: var(--color-2);
          transition: all 0.5s ease;
          transform: scale(0);
        }

        .navbar .nav-item .nav-link.active::before,
        .navbar .nav-item .nav-link:hover::before {
          transform: scale(1);
        }

        .navbar .nav-inverse,
        .navbar .nav-auth {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .navbar .nav-inverse img,
        .navbar .nav-auth img {
          width: 40px;
          height: 40px;
          border-radius: 25%;
        }

        .navbar .nav-auth a {
          text-decoration: none;
          color: var(--color-1);
          font-family: "Airbnb Cereal App Light";
          font-size: 16px;
        }

        .navbar .nav-inverse a {
          text-decoration: none;
          color: var(--color-2);
          font-family: "Airbnb Cereal App Light";
          font-size: 16px;
        }

        .navbar .nav-auth button {
          background-color: var(--main-color);
          border-radius: 50%;
          border: none;
          color: var(--secondary-color);
          width: 40px;
          height: 40px;
          object-fit: cover;
        }

        .navbar .nav-inverse button {
          background-color: var(--secondary-color);
          border-radius: 50%;
          border: none;
          color: var(--main-color);
          width: 40px;
          height: 40px;
          object-fit: cover;
        }

        .navbar.navbar-shrink .nav-auth a {
          color: var(--color-2);
        }

        .navbar.navbar-shrink .nav-auth button {
          background-color: var(--secondary-color);
          color: var(--main-color);
        }

        .nav-tabs {
          border: none;
          display: flex;
          gap: 35px;

          @media screen and (max-width: 576px) {
            gap: 5px;
          }
        }

        .nav-tabs .nav-link {
          font-family: "Airbnb Cereal App Medium";
          color: #666666;
          border: 0;

          @media screen and (max-width: 576px) {
            font-size: 14px;
          }
        }

        .nav-tabs .nav-link:hover {
          cursor: pointer;
          border: 0;
        }

        .nav-tabs .nav-link.active {
          font-family: "Airbnb Cereal App Medium";
          color: #000000;
          border: 0;
          border-radius: 0;
        }

        .btn-view {
          background-color: var(--color-2);
          color: var(--color-1);
          padding: 5px;
          border-radius: 5px;
          margin-right: 10px;

          &:hover {
            background-color: #1e1851;
            color: var(--color-1);
            box-shadow: var(--shadow-black-100);
          }
        }

        .btn-edit {
          background-color: var(--main-color);
          color: var(--secondary-color);
          padding: 5px;
          border-radius: 5px;
          margin-right: 10px;

          &:hover {
            background-color: #eeeeee;
            color: var(--secondary-color);
            box-shadow: var(--shadow-black-100);
          }
        }

        .btn-delete {
          background-color: var(--secondary-color);
          color: var(--color-1);
          padding: 5px 7px;
          border-radius: 5px;
          margin-right: 10px;
          border: 0;

          &:hover {
            background-color: #cea905;
            color: var(--color-1);
            box-shadow: var(--shadow-black-100);
          }
        }

        /* Responsive */
        /* Navbar */
        @media screen and (max-width: 992px) {
          .navbar {
            margin-top: -5px;
            background-color: none;
          }

          .navbar-toggler {
            background-color: var(--main-color);
            box-shadow: var(--shadow-black-300);
            height: 34px;
            width: 44px;
            padding: 0;
            font-size: 17px;
            color: var(--color-2);
            float: right !important;
          }

          .navbar-nav {
            background-color: var(--main-color);
            /* box-shadow: var(--shadow-black-300); */
          }

          .navbar .nav-item {
            padding: 5px 5px;
          }

          .navbar .nav-item {
            background-color: var(--main-color);
          }

          .navbar .nav-auth a {
            color: var(--color-2);
          }

          .navbar.navbar-shrink .navbar-toggler,
          .navbar.navbar-shrink .navbar-nav {
            background-color: var(--main-color);
          }

          /* .nav-auth,
            .navbar-nav {
              background-color: var(--main-color);
              box-shadow: var(--shadow-black-300);
            }
        
            .navbar .nav-item {
              margin: 0;
              padding: 5px 15px;
            }
        
            .navbar.navbar-shrink .navbar-toggler,
            .navbar.navbar-shrink .navbar-nav {
                background-color: var(--main-color);
            } */
        }
      `}</style>
    </Section>
  );
};

export default Footer;
