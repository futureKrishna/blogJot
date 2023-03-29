import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAllBlogs } from "./rtk/blogSlice";
import CreateBlog from "./CreateBlog";
import { allPost } from "./apiCall";
import { Spinner } from "react-bootstrap";
import UpdateBlog from "./UpdateBlog";
import "../styles/blogs.css";
import "../styles/blog1.css";

function Blogs() {
  const [toggleState, setToggleState] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const details = localStorage.getItem("myObject");
  const userDetails = JSON.parse(details);

  const dispatch = useDispatch();

  const { allBlogs, isLoading } = useSelector((state) => state.blog);

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const actualData = async () => {
      const data = await allPost();
      dispatch(setAllBlogs(data));
    };
    actualData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleDelete = async (id) => {
    const resp = await axios.delete(
      `https://gorest.co.in/public/v2/posts/${id}`,
      {
        headers: {
          Authorization:
            "Bearer 22e098f70d694940d7496ba457aff7a222fb1a1b1b4098ff9f38a4496f7b7b1a",
        },
      }
    );
    const data = await resp.data;

    const response = await allPost();
    dispatch(setAllBlogs(response));
  };

  return (
    <div>
      <div className="nav">
        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className="head-blog-div">
        <h1>Welcome {userDetails.name} !</h1>
        <div className="main_container">
          {userDetails.id === 508429 || userDetails.id === 508552 ? (
            <div className="container1">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  All Blogs
                </button>

                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  My Blogs
                </button>
              </div>

              {!isLoading ? (
                <div className="content-tabs">
                  <div className="search-create-div">
                    <input
                      className="blog-search-input"
                      placeholder="search here"
                      type="text"
                      value={searchTerm}
                      onChange={handleSearch}
                    />

                    <CreateBlog />
                  </div>
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    {allBlogs
                      ?.filter((blog) =>
                        blog.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((blogs, index) => (
                        <div className="blog-box" key={index}>
                          <h3>{blogs.title}</h3>
                          <div>{blogs.body}</div>
                        </div>
                      ))}
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <div className="myblogs-main-div">
                      {allBlogs
                        ?.filter(
                          (blog) =>
                            blog.user_id === userDetails.id &&
                            blog.title
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                        )
                        .map((blogs, index) => (
                          <div key={index} className="myblogs-div">
                            <div className="dont-know">
                              <h3>{blogs.title}</h3>
                              <div>{blogs.body}</div>
                            </div>
                            <button
                              onClick={() => handleDelete(blogs.id)}
                              className="update-btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash3-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                              </svg>
                            </button>
                            <UpdateBlog
                              postId={blogs.id}
                              prevTitle={blogs.title}
                              prevBody={blogs.body}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div></div>
                </div>
              ) : (
                <Spinner />
              )}
            </div>
          ) : (
            <div className="container1">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  All Blogs
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  {allBlogs
                    ?.filter((blog) =>
                      blog.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((blogs, index) => (
                      <div key={index}>
                        <h3>{blogs.title}</h3>
                        <div>{blogs.body}</div>
                      </div>
                    ))}
                </div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
