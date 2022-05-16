import React from "react";
//import module dari react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ketiga file views
import Profile from "../Profile";
import Home from "../Home";
import AddRecipe from "../AddRecipe";
import RecipeDetail from "../RecipeDetail";
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";
import ResetPasswordCode from "../ResetPasswordCode";
import ResetPassword from "../ResetPassword";
import VideoRecipe from "../VideoRecipe";
import ChangeProfile from "../ChangeProfile";
import NotFound from "../NotFound";
import EditRecipe from "../EditRecipe";
import Coba from "../Coba";

const route = () => {
  return (
    <div>
      {/*selalu gunakan yang pertama  BrowserRouter, Routes dan Route */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}>
              Home
            </Route>
            <Route path="/register" element={<Register />}>
              Register
            </Route>
            <Route path="/forgotpass" element={<ForgotPassword />}>
              Forgot Password
            </Route>
            <Route path="/resetpass" element={<ResetPassword />}>
              Reset Password
            </Route>
            <Route path="/videorecipe" element={<VideoRecipe />}>
              Video Recipe
            </Route>
            <Route path="/resetpasscode" element={<ResetPasswordCode />}>
              Reset Password Code
            </Route>
            <Route path="/profile" element={<Profile />}>
              Profile
            </Route>
            <Route path="/changeprofile" element={<ChangeProfile />}>
              Change Profile
            </Route>
            <Route path="/login" element={<Login />}>
              Login
            </Route>
            <Route path="/addrecipe" element={<AddRecipe />}>
              Add Recipe
            </Route>
            <Route path="/editrecipe/:id" element={<EditRecipe />}>
              Edit Recipe
            </Route>
            <Route path="/recipedetail" element={<RecipeDetail />}>
              Recipe Detail
            </Route>
            <Route path="/coba" element={<Coba />}>
              Coba
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default route;
