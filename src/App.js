import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navbar from "./Component/NavBar/Navbar";
import "./app.scss";
import About from "./Pages/About/About";
import NewBlog from "./Pages/NewBlog/NewBlog";
import Admin from "./Pages/Admin/Admin";
import Home from "./Pages/Home/Home";
import BlogPages from "./BlogItems/BlogPages/BlogPages";
import Error404 from "./Constant/ErrorPage/Error404";
import Adminblogpage from "./BlogItems/AdminBlogPage/AdminBlogPage";
import UpdateBlog from "./BlogItems/upadateBlog/Updateblog";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ToastContainer />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Newblog" element={<NewBlog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminblog" element={<Adminblogpage />} />
          <Route path="/updateblog" element={<UpdateBlog />} />
          <Route path="/blogPage/:_id" element={<BlogPages />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
