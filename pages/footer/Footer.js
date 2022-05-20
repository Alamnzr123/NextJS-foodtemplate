import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Section = styled.footer`
  height: auto;
  background-color: var(--secondary-color);
  color: var(--color-2);
  padding-top: 200px;
  font-family: "Airbnb Cereal App Light";
  margin-top: 80px;
  position: relative;
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

      
          @media screen and (max-width: 576px) {
            font-size: 14px;
          }
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
