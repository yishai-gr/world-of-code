import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import {
  Home,
  ArticlesPage,
  TutorialsPage,
  CoursesPage,
  ContentPage,
} from "./pages/";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/:category/:contentId" element={<ContentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
