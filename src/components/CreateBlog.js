import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllBlogs, setIsLoading } from "./rtk/blogSlice";
import { Modal } from "react-bootstrap";
import { allPost } from "./apiCall";
import "../styles/createBlog.css";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const details = localStorage.getItem("myObject");
  const { id } = JSON.parse(details);

  const dispatch = useDispatch();

  const createPost = async () => {
    dispatch(setIsLoading(true));
    const resp = await axios.post(
      `https://gorest.co.in/public/v2/posts`,
      {
        title,
        body,
        user_id: id,
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
      createPost();
      setTitle("");
      setBody("");
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="create-modal-title">New Blog</Modal.Title>
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
          <button className="create-publish-btn" onClick={() => handleSubmit()}>
            Publish
          </button>
        </Modal.Footer>
      </Modal>

      <button className="newblog-btn" onClick={() => setModalIsOpen(true)}>
        New Blog
      </button>
    </div>
  );
}

export default CreateBlog;
