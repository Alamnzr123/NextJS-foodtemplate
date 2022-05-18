import React from "react";
import Link from "next/link";
import Navbar from "../navigation/Navigation";
import Footer from "../footer/Footer4";
import Head from "next/head";
import Image from "next/image";

const RecipeDetail = () => {
  return (
    <div>
      <Head>
        <title>Recipe Detail</title>
        <link rel="icon" href="/Assets/logo.svg" />
      </Head>
      <header>
        <Navbar />
        <h1 className="text_loreamsandwich">Loream Sandwich</h1>
        <div className="Rectangle313_3">
          <Image
            src="/assets/4da51338c06dd21688b82eae3bc9dfa6.jpg"
            alt="Gambar1"
            layout="fill"
          />
        </div>
      </header>

      <section>
        <h1 className="text_ingredients">Ingredients</h1>
        <ol className="detail_txt_2">
          <li>- 2 eggs</li>
          <li>- 2 tbsp mayonnaise</li>
          <li>- 3 slices bread</li>
          <li>- a little butter</li>
          <li>- ⅓ carton of cress</li>
          <li>
            - 2-3 slices of tomato or a lettuce leaf and a slice of ham or
            cheese
          </li>
          <li>- crisps , to serve</li>
        </ol>
        <h1 className="text_videostep">Video Step</h1>
        <div className="Rectangle314_detail"></div>
        <Link href="/recipe/VideoRecipe">
          <div className="play_vector_main">
            <i className="vector_play2"></i>
          </div>
        </Link>
        <div className="Rectangle317_detail"></div>
        <Link href="/recipe/VideoRecipe">
          <div className="play_vector_main2">
            <i className="vector_play2"></i>
          </div>
        </Link>
        <div className="Rectangle318_detail"></div>
        <Link href="/recipe/VideoRecipe">
          <div className="play_vector_main3">
            <i className="vector_play3"></i>
          </div>
        </Link>
        <div className="Rectangle319_detail"></div>
        <Link href="/recipe/VideoRecipe">
          <div className="play_vector_main4">
            <i className="vector_play4"></i>
          </div>
        </Link>
        <textarea
          type="text"
          className="Rectangle331_detail"
          placeholder="Comment:"
        />
        <button className="Rectangle27_detail">Send</button>
        <h1 className="text_comment_detail">Comment</h1>
        <h2 className="text_ayudia">Ayudia</h2>
        <h2 className="text_nice_recipe">
          Nice recipe. simple and delicious, thankyou
        </h2>
        <div className="ellipse128_detail">
          <Image
            src="/assets/c08f710828e1d2aacf71af8c92583062.png"
            alt="Gambar2"
            layout="fill"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecipeDetail;