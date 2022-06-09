import BlogList from "../BlogList/BlogList";
import IsError from "../../Constant/IsError/IsError";
import IsLoading from "../../Constant/IsLoading/IsLoading";
import UseCustomHook from "../../Constant/UseCustomHook";
import "./Blog.scss";

const Blog = () => {
  const { data, isLoading, isError } = UseCustomHook("https://car-blog-api.herokuapp.com/blog");

  console.log("data", data);

  return (
    <div>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className="app__blogs">
          <h1 className="app__blogs-head head-text">CAR REVIEW BLOG</h1>
          <BlogList BlogData={data} />
        </div>
      )}
      {isError && <IsError />}
    </div>
  );
};

export default Blog;
