import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs.js";
import Login from "./components/Login.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/blogs"
        element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        exact
        element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
