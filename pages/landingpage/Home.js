import React from "react";
import Footer from "../footer/Footer2";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="Slider">
        <div className="Rectangle2"></div>
        <div className="LandingPage_gambar1"></div>
        <div className="Rectangle3">
          <i className="Vector"></i>
          <input
            type="search"
            className="text-searchrestaurant"
            placeholder="Search restaurant, food"
          />
        </div>
        <h1 className="DiscoverRecipe">
          Discover Recipe <br />& Delicious Food
        </h1>
        <section className="fooditem">
          <h1 className="textpopular">Popular For You !</h1>
          <div className="rectangle6"></div>
          <h1 className="texthealthy">
            Healthy Bone Broth Ramen (Quick & Easy)
          </h1>
          <div className="line_16"></div>
          <p className="textquick_easychicken">
            Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
            hurry? That’s right!
          </p>
          <div className="rectangle_28"></div>
          <Link href="/recipe/RecipeDetail">
            <div className="text_learnmore">Learn More</div>
          </Link>
          <div className="Rectangle309"></div>
          <div className="Rectangle313">
            <Image
              src=""
              src="/52207741d95649c4cb58a57ba663027f.jpg"
              alt="Gambar1"
              width="830px"
              height="830px"
              style={{ borderRadius: "15px" }}
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <h1 className="Newrecipe">New Recipe</h1>
          <div className="Rectangle6"></div>
          <div className="Rectangle2_recipe"></div>
          <div className="Rectangle313_2">
            <Image
              alt="Gambar2"
              style={{ borderRadius: "15px" }}
              objectFit="cover"
              src="/c2792cef25a0bfa97a2bd8c65b80f9c5.jpg"
              width="800px"
              height="800px"
            />
          </div>
          <h1 className="text_healthy2">
            Healthy Bone Broth Ramen (Quick & Easy)
          </h1>
          <div className="line16"></div>
          <p className="text_quickeasy2">
            Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
            hurry? That’s right!
          </p>
          <div className="rectangle28"></div>
          <Link href="/recipe/RecipeDetail">
            <div className="text_learn2">Learn More</div>
          </Link>
        </section>

        <section>
          <h1 className="text_popularrecipe">Popular Recipe</h1>
          <div className="Rectangle8"></div>
          <div className="Rectangle314_2">
            <Image
              src="/572da9a89bc5f8fe0da12c9a18c352e7.jpg"
              alt="Gambar3"
              style={{ borderRadius: "15px" }}
              width="500px"
              height="500px"
              objectFit="cover"
            />
          </div>
          <div className="chicken_kare">Chiken Kare</div>
          <div className="Rectangle315_2">
            <Image
              src="/cd160da3e1426c3f659218e145224ffc.jpg"
              alt="Gambar4"
              style={{ borderRadius: "15px" }}
              width="500px"
              height="500px"
              objectFit="cover"
            />
          </div>
          <div className="text_bombchicken">Bomb Chicken</div>
          <div className="Rectangle316_2">
            <Image
              src="/7c36ec9fa871caac4eb5b3658eea9aaa.jpg"
              alt="Gambar5"
              style={{ borderRadius: "15px" }}
              width="500px"
              height="500px"
              objectFit="cover"
            />
          </div>
          <div className="text_banana">
            Banana <br /> Smothie Pop
          </div>
          <div className="Rectangle317_2">
            <Image
              src="/19713936f65f2db089da584640f4b823.jpg"
              alt="Gambar6"
              style={{ borderRadius: "15px" }}
              width="500px"
              height="500px"
              objectFit="cover"
            />
          </div>
          <div className="text_coffe">
            Coffe Lava <br /> Cake
          </div>
          <div className="Rectangle318_2">
            <Image
              src="/ec253e0e662a4e3aa070cee5202021e3.jpg"
              alt="Gambar7"
              style={{ borderRadius: "15px" }}
              width="500px"
              height="500px"
              objectFit="cover"
            />
          </div>
          <div className="text_sugarsalmon">Sugar Salmon</div>
          <div className="Rectangle319_2">
            <Image
              src="/bb6555764d018e0687640abdfde17ba9.jpg"
              alt="Gambar8"
              style={{ borderRadius: "15px" }}
              width="500px"
              height="500px"
              objectFit="cover"
            />
          </div>
          <div className="text_indiansalad">Indian Salad</div>
        </section>
      </div>
      <Footer />

      <style global jsx>{`
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
            gap: 5px;
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
    </>
  );
};

export default Home;
