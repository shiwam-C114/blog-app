import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Create from "./pages/Create";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewBlog from "./pages/ViewBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} >
          <Route path=":blogId" >
            <Route path="view" element={<ViewBlog />} />
            <Route path="edit" element={<EditBlog />} />
          </Route>
          <Route path="create" element={<Create />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
