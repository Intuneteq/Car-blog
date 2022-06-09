import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import Card from "../../Component/Card/Card";
import "./NewBlog.scss";

const NewBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    fetch("https://car-blog-api.herokuapp.com/newBlog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      toast.success("New Blog Added")
      setIsLoading(false);

      navigate("/");
    });
  };

  return (
    <div className="app__newBlog">
      <h1 className="head-text">Add new blog</h1>
      <Card>
        <form
          action="submit"
          onSubmit={submitHandler}
          className="app__newBlog-form"
        >
          <div className="control">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              required
              id="title"
              placeholder="Title"
              ref={titleInputRef}
            />
          </div>

          <div className="control">
            <label htmlFor="founder">Founder:</label>
            <input
              type="text"
              required
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

export default NewBlog;
