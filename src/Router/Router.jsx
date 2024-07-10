import { createBrowserRouter } from "react-router-dom";
import StartingPage from "../Pages/StartingPage";
import HomeLayout from "../Pages/HomeLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <StartingPage />,
  },
  { path: "home", element: <HomeLayout></HomeLayout> },
]);

export default router;
