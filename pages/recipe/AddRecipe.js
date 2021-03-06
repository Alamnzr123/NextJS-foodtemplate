import { useState, useRef, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "../footer/Footer3";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const AddRecipe = () => {
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState("");

  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    video: "",
  });

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("customBtn").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
    // props.handleFile(fileUploaded);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { title, ingredients, video } = form;
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);

    formData.append("title", title);
    formData.append("image", image);
    formData.append("ingredients", ingredients);
    formData.append("video", video);
    formData.append("user_id", decoded.id);

    console.log(formData);

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/insert/recipe`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        return <Link href="/profile" />;
        // if(response.data.status !== "success") {
        //   alert("error axios")
        //   // alert(response.data.status+": "+response.data.message)
        // } else {

        // }
      })
      .catch((err) => {
        alert("error");
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return <Link href="/landingpage/Login" />;
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Add Recipe</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="Rectangle329">
          <div className="image_add">
            <Image
              src="/image-solid.svg"
              alt="Gambar1"
              width="64"
              height="64"
            />
          </div>
        </div>
        <h1 className="text_addimage" id="customBtn" onClick={handleClick}>
          Add Photo
        </h1>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <input
          type="text"
          className="Rectangle330_add"
          placeholder="Title"
          onChange={(e) => onChangeInput(e, "title")}
          required
        />
        <textarea
          className="Rectangle331_add"
          placeholder="Ingredients"
          onChange={(e) => onChangeInput(e, "ingredients")}
          required
        ></textarea>
        <input
          type="text"
          className="Rectangle332_add"
          placeholder="Video"
          onChange={(e) => onChangeInput(e, "video")}
          required
        ></input>
        <button type="submit" className="btnrectangle27">
          Post
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default AddRecipe;
