import { useSelector,useDispatch } from "react-redux";
import { setIsLoggedIn } from "./rtk/features/protectedSlice";

//we use actions in components

function Blogs() {
  const {isLoggedIn} =useSelector((state)=>state.login)
  const dispatch=useDispatch()

  const logoutHandler=()=>{
    dispatch(setIsLoggedIn(false))
  }

  return (
    <div>
      <h1>BlogJot Blogs</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Blogs;
