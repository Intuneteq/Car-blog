import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../../Component/Card/Card";

import "./updateBlog.scss";

const UpdateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useParams();
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const founderInputRef = useRef();
  const bodyInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredfounder = founderInputRef.current.value;
    const enteredbody = bodyInputRef.current.value;

    const formData = {
      title: enteredTitle,
      founder: enteredfounder,
      body: enteredbody,
    };

    console.log("here", formData);
    setIsLoading(true);
    fetch(`https://car-blog-api.herokuapp.com/blogPage/${_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("me", resp);
        setIsLoading(false);
        navigate("/adminblog");
      });
    });
  };

  return (
    <div className="app__updateBlog">
      <h1 className="head-text">UPDATE BLOG</h1>
      <Card>
        <form
          action="submit"
          onSubmit={submitHandler}
          className="app__updateBlog-form"
        >
          <div className="control">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              ref={titleInputRef}
            />
          </div>

          <div className="control">
            <label htmlFor="founder">Founder:</label>
            <input
              type="text"
              id="founder"
              placeholder="founder"
              ref={founderInputRef}
            />
          </div>

          <div className="control">
            <label htmlFor="body">Body:</label>
            <textarea id="body" ref={bodyInputRef} />
          </div>

          <div className="actions">
            {!isLoading ? (
              <div>
                <button>Submit</button>
              </div>
            ) : (
              <div>
                <button>Adding blogs</button>
              </div>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateBlog;
