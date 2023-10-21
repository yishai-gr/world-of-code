import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import {
  Home,
  ArticlesPage,
  TutorialsPage,
  CoursesPage,
  ContentPage,
} from "./pages/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="tutorials" element={<TutorialsPage />} />
      <Route path="courses" element={<CoursesPage />} />
      <Route path=":category/:contentId" element={<ContentPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
