import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Footer from "../footer/Footer3";
import Head from "next/head";
import Image from "next/image";

const EditRecipe = () => {
  const router = useRouter();
  const hiddenFileInput = useRef(null);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [fileImage, setFileImage] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");
  const { id } = useParams();

  // react-lifecycle
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/show/myrecipe`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setTitle(res.data.data[0].title);
          setImage(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/recipe/${res.data.data[0].image}`
          );
          setIngredients(res.data.data[0].ingredients);
          setVideo(res.data.data[0].video);
        })
        .catch((err) => {
          console.log(err);
        });
      // document.getElementById('customBtn').innerHTML = image;
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const urlImage = URL.createObjectURL(fileUploaded);
    console.log(fileUploaded);
    document.getElementById("customBtn").innerHTML = fileUploaded.name;
    setFileImage(fileUploaded);
    setImage(urlImage);
    // props.handleFile(fileUploaded);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);

    formData.append("title", title);
    formData.append("image", fileImage);
    formData.append("ingredients", ingredients);
    formData.append("video", video);
    formData.append("user_id", decoded.id);

    console.log(formData);

    axios
      .put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/edit/recipe/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        return router.push("/landingpage/Profile");
        // if(response.data.status !== "success") {
        //   alert("error axios")
        //   // alert(response.data.status+": "+response.data.message)
        // } else {

        // }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Head>
        <title>Edit Recipe</title>
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
              src={image || "/image-solid.svg"}
              alt="Gambar1"
              layout="fill"
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
          value={title}
          className="Rectangle330_add"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="Rectangle331_add"
          value={ingredients}
          placeholder="Ingredients"
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          value={video}
          className="Rectangle332_add"
          placeholder="Video"
          onChange={(e) => setVideo(e.target.value)}
          required
        ></input>
        <button type="submit" className="btnrectangle27">
          Post
        </button>
      </form>
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
    </div>
  );
};

export default EditRecipe;
