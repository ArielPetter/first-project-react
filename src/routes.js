import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Users from "./pages/users";

function ProjectRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default ProjectRoutes;
