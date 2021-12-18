import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Repos from "../pages/Repos";
import ReposView from "../pages/ReposView";
import { NotFound } from "./NotFound";

const Main = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos/:username" element={<Repos />} />
          <Route path="/project-details/:username/:reponame" element={<ReposView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Main;
