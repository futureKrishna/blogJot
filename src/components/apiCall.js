import axios from "axios";

export const allPost = async () => {
  const resp = await axios.get(`https://gorest.co.in/public/v2/posts`, {
    headers: {
      Authorization:
        "Bearer 22e098f70d694940d7496ba457aff7a222fb1a1b1b4098ff9f38a4496f7b7b1a",
    },
  });
  const data = await resp.data;
  return data;
};
