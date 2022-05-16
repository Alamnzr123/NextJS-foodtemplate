import React from "react";
import Navbar from "./Navigation";
import Head from "next/head";
import Image from "next/image";

const VideoRecipe = () => {
  return (
    <div>
      <Head>
        <title>Video Recipe</title>
        <link rel="icon" href="/Assets/logo.svg" />
      </Head>
      <Navbar />
      <section>
        <div className="Rectangle_detailvideo"></div>
        <div>
          <iframe
            className="Rectangle329_video_recipe"
            src="https://www.youtube.com/embed/81nKBMetvAI"
          ></iframe>
          <h1 className="text_detail_video">
            Beef Steak with Curry Sauce - [Step 4] <br />
            Cut the condiment and then mix it
          </h1>
          <h2 className="text_3month">3 month ago</h2>
        </div>

        <h1 className="text_next">Next</h1>
        <div>
          <Image
            className="Rectangle90"
            src="/assets/18ba457b82b3cae12e47df24ad8cf636.jpg"
          />
          <h1 className="text_step5">[Step 5]</h1>
          <h1 className="text_beef_steak">
            Beef Steak with Curry Sauce - [Step 5] <br />
            Saute condiments together until turn brown
          </h1>
          <h2 className="text_hana">HanaLohana - 3 month ago</h2>
        </div>
        <div>
          <Image
            className="Rectangle91"
            src="/assets/dba40d04b40f63ec9dfa861a18f1591a.jpg"
          />
          <h1 className="text_step6">[Step 6]</h1>
          <h1 className="text_beef_steak2">
            Beef Steak with Curry Sauce - [Step 6]
            <br /> Roast beef until it’s medium rare
          </h1>
          <h2 className="text_hana2">HanaLohana - 3 month ago</h2>
        </div>

        <div>
          <Image
            className="Rectangle330_videodetail"
            src="/assets/dba40d04b40f63ec9dfa861a18f1591a.jpg"
          />
          <h1 className="text_step7">[Step 7]</h1>
          <h1 className="text_beef_steak3">
            Beef Steak with Curry Sauce - [Step 7]
            <br /> Roast beef until it’s medium rare
          </h1>
          <h2 className="text_hana3">HanaLohana - 3 month ago</h2>
        </div>
      </section>
    </div>
  );
};

export default VideoRecipe;
