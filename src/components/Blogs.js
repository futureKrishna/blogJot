// we use actions in components
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./blogs.css";

function Blogs() {
  const [toggleState, setToggleState] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { allblogs } = useSelector((state) => state.blog);

  const details = sessionStorage.getItem("myObject");
  const userDetails = JSON.parse(details);

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <input
        placeholder="search here"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            All Blogs
          </button>
          {userDetails.type === "editor" ? (
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              My Blogs
            </button>
          ) : null}
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {allblogs
              .filter((blog) =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((blogs, index) => (
                <div key={index}>
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
            {userDetails.type === "editor" ? (
              <div>
                {allblogs
                  .filter(
                    (blog) =>
                      blog.user_id === 2 &&
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
            ) : null}
          </div>
          <div>
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
