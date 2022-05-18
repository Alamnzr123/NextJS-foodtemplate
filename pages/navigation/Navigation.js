import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState(false);
  const location = useRouter();

  // useEffect(() => {
  //   isLogin();
  // }, []);

  const logout = () => {
    localStorage.clear();
    return <Link href="/landingpage/Login" />;
  };

  const mainMenu = () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    // const [theme, setTheme] = useState(
    //   typeof window !== "undefined" ? localStorage.theme : "light"
    // );

    if (token) {
      return (
        <>
          <NavItem>
            <NavLink
              tag={Link}
              href="/recipe/AddRecipe"
              active={location.pathname === "/recipe"}
            >
              add recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              href="/landingpage/Profile"
              active={location.pathname === "/profile"}
            >
              profile
            </NavLink>
          </NavItem>
        </>
      );
    }
  };

  const isLogin = () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      const decoded = jwt_decode(token);
      return (
        <div className={location.pathname === "/" ? "nav-auth" : "nav-inverse"}>
          <Image src="/assets/User icon.png" alt="user icon" layout="fill" />
          <Link href="/landingpage/Profile">{decoded.name}</Link>
          <button title="Logout" onClick={logout}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      );
    } else {
      return (
        <div className="nav-auth">
          <Image
            src="/assets/User icon.png"
            alt="User Icon"
            width="16"
            height="16"
          />
          <Link href="/login/Login">Login</Link>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <NavbarBrand href="/landingpage/Home" className="d-lg-none">
            Mama Recipe.
          </NavbarBrand>
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i className="fas fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  href="/landingpage/Home"
                  active={location.pathname === "/"}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  href="/view"
                  active={location.pathname === "/view"}
                >
                  view recipe
                </NavLink>
              </NavItem>
              {mainMenu()}
            </Nav>
            {isLogin()}
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
