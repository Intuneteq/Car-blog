import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import IsError from "../../Constant/IsError/IsError";
import IsLoading from "../../Constant/IsLoading/IsLoading";
import UseCustomHook from "../../Constant/UseCustomHook";
import "./BlogPages.scss";

const BlogPages = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading, isError } = UseCustomHook(`/blogPage/${_id}`);

  const handleDelete = () => {
    fetch(`https://car-blog-api.herokuapp.com/blogPage/${_id}`, {
      method: "DELETE",
    }).then(() => {
      toast.success("Blog Deleted");
      navigate("/");
    });
  };

  return (
    <div className="app__blogpage">
      {isLoading ? (
        <IsLoading />
      ) : (
        <div>
          <h1 className="head-text">{blog.title}</h1>
          <p className="in-text">{blog.body}</p>
          <h5 className="bold-text">Founder: {blog.founder}</h5>
          <div>
            <button onClick={handleDelete}>Delete Blog</button>
          </div>
        </div>
      )}
      {isError && <IsError />}
    </div>
  );
};

export default BlogPages;
