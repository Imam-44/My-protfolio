import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children: [
      {
        path: '',
        element: <><Hero/><About/><Skills/><Projects/><Contact/></>
      }

    ]
  },
]);

export default router