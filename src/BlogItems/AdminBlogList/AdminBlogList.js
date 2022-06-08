import React from "react";
import { Link } from "react-router-dom";

import Card from "../../Component/Card/Card";
import "./AdminBlogList.scss";

const AdminBlogList = ({ BlogData }) => {
  return (
    <div className="app__adminBlogList">
      {BlogData.map((item) => (
        <Card>
          <div key={item.id} className="app__adminBlogList-item">
            <h1>{item.title}</h1>
            <p className="p-text">
              {item.body}.{" "}
              <Link
                className="bold-text link-button"
                to={`/blogpage/${item._id}`}
              >
                Read more..
              </Link>{" "}
            </p>
            <Link className="link-button" to={"/updateblog"}>
              UPDATE BLOG
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AdminBlogList;
