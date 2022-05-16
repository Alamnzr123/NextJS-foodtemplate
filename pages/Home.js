import React from "react";
import Navbar from "./Navigation";
import Footer from "./footer/Footer2";
import Head from "next/head";
import Image from "next/image";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/Assets/logo.svg" />
      </Head>
      <div className="Slider">
        <div className="Rectangle2"></div>
        <Navbar />

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
          <Link to="/recipedetail">
            <div className="text_learnmore">Learn More</div>
          </Link>
          <div className="Rectangle309"></div>
          <div>
            <Image
              src="/Assets/52207741d95649c4cb58a57ba663027f.jpg"
              className="Rectangle313"
              alt="Gambar1"
            />
          </div>
        </section>

        <section>
          <h1 className="Newrecipe">New Recipe</h1>
          <div className="Rectangle6"></div>
          <div className="Rectangle2_recipe"></div>
          <div>
            <Image
              className="Rectangle313_2"
              alt="Gambar2"
              src="/Assets/c2792cef25a0bfa97a2bd8c65b80f9c5.jpg"
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
          <Link to="/recipedetail">
            <div className="text_learn2">Learn More</div>
          </Link>
        </section>

        <section>
          <h1 className="text_popularrecipe">Popular Recipe</h1>
          <div className="Rectangle8"></div>
          <div>
            <Image
              src="/Assets/572da9a89bc5f8fe0da12c9a18c352e7.jpg"
              className="Rectangle314_2"
              alt="Gambar3"
            />
          </div>
          <div className="chicken_kare">Chiken Kare</div>
          <div>
            <Image
              src="/Assets/cd160da3e1426c3f659218e145224ffc.jpg"
              className="Rectangle315_2"
              alt="Gambar4"
            />
          </div>
          <div className="text_bombchicken">Bomb Chicken</div>
          <div>
            <Image
              src="/Assets/7c36ec9fa871caac4eb5b3658eea9aaa.jpg"
              className="Rectangle316_2"
              alt="Gambar5"
            />
          </div>
          <div className="text_banana">
            Banana <br /> Smothie Pop
          </div>
          <div>
            <Image
              src="/Assets/19713936f65f2db089da584640f4b823.jpg"
              className="Rectangle317_2"
              alt="Gambar6"
            />
          </div>
          <div className="text_coffe">
            Coffe Lava <br /> Cake
          </div>
          <div>
            <Image
              src="/Assets/ec253e0e662a4e3aa070cee5202021e3.jpg"
              className="Rectangle318_2"
              alt="Gambar7"
            />
          </div>
          <div className="text_sugarsalmon">Sugar Salmon</div>
          <div>
            <Image
              src="/Assets/bb6555764d018e0687640abdfde17ba9.jpg"
              className="Rectangle319_2"
              alt="Gambar8"
            />
          </div>
          <div className="text_indiansalad">Indian Salad</div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
