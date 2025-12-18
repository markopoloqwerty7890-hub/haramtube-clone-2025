import { createBrowserRouter } from "react-router";
import MainPage from "../../pages/MainPage/MainPage";
import WatchPage from "../../pages/watchpage/WatchPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/watch",
    Component: WatchPage,
  }
]);