import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "../faetures/routers/route";
import Header from "../widgets/header";

const App = () => {
  return (
  <>
  <RouterProvider router={router} />
  </>
  )
};

export default App;
