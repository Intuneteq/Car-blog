import IsError from "../../Constant/IsError/IsError";
import IsLoading from "../../Constant/IsLoading/IsLoading";
import UseCustomHook from "../../Constant/UseCustomHook";
import './AdminBlogPage.scss';
import AdminBlogList from "../AdminBlogList/AdminBlogList";

const Adminblogpage = () => {

  const { data, isLoading, isError } = UseCustomHook(
    "https://car-blog-api.herokuapp.com/blog"
  );

  return (
    <div>
    {isLoading && <IsLoading />}
    {
      <div className="app__blogs">
        <h1 className="app__blogs-head head-text">Admin Car Review Blog</h1>
        <AdminBlogList BlogData={data} />
      </div>
    }
    {isError && <IsError />}
  </div>
  )
}

export default Adminblogpage;