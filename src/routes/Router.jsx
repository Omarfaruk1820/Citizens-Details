import { createBrowserRouter } from "react-router";
import NotFound from "./../pages/NotFound";
import MainLayout from "./../layouts/MainLayout";
import Home from "./../pages/Home";
import AddCitizen from "./../pages/AddCitizen";
import UpdateCitizen from "./../pages/UpdateCitizen";
import Citizens from "../pages/Citizens";
import CitizenForm from "../components/citizen/CitizenForm";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "citizens", element: <Citizens></Citizens> },
      { path: "CitizenForm", element: <CitizenForm></CitizenForm> },
      { path: "add-citizen", element: <AddCitizen /> },
      { path: "update-citizen/:id", element: <UpdateCitizen /> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
