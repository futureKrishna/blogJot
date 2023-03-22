import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs.js";
import Login from "./components/Login.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
