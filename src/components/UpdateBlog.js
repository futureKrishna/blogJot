import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllBlogs, setIsLoading } from "./rtk/blogSlice";
import { Modal } from "react-bootstrap";
import { allPost } from "./apiCall";

function UpdateBlog({ postId, prevTitle, prevBody }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(prevTitle);
    setBody(prevBody);
  }, []);

  const updateBlog = async () => {
    dispatch(setIsLoading(true));
    const resp = await axios.patch(
      `https://gorest.co.in/public/v2/posts/${postId}`,
      {
        title,
        body,
      },
      {
        headers: {
          Authorization:
            "Bearer 22e098f70d694940d7496ba457aff7a222fb1a1b1b4098ff9f38a4496f7b7b1a",
        },
      }
    );
    if (resp.data) {
      const response = await allPost();
      dispatch(setAllBlogs(response));
      dispatch(setIsLoading(false));
    }
  };

  const handleSubmit = (event) => {
    if (title.length !== 0 && body.length !== 0) {
      updateBlog();
      setTitle("");
      setBody("");
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      <div className="update-main-div">
        <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="create-modal-title">
              Edit your blog
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="formWraper" onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  className="title-input"
                  placeholder="title"
                  required={true}
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>

              <label>
                Body:
                <textarea
                  className="body-textarea"
                  placeholder="body"
                  required={true}
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                />
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="create-cancel-btn"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="create-publish-btn"
              onClick={() => handleSubmit()}
            >
              Update
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <button className="add-btn" onClick={() => setModalIsOpen(true)}>
        <svg className="svg-btn"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </button>
    </div>
  );
}

export default UpdateBlog;
