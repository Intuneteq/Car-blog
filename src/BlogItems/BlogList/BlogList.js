import React from "react";
import { Link } from "react-router-dom";

import "./BlogList.scss";
import Card from "../../Component/Card/Card";

const BlogList = ({ BlogData }) => {
  return (
    <div className="app__BlogList">
      {BlogData.map((item) => (
        <Card>
          <div key={item.id}>
            <h1 className="head-text">{item.title}</h1>
            <p className="p-text">
              {item.body.slice(0, 500)}...
              <Link className="p-text" to={`/blogPage/${item._id}`}>
                Read more..
              </Link>{" "}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
