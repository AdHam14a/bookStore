import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Authlayout from "./Modules/Shared/Authlayout";
import NotFound from "./Modules/Shared/NotFound";
import Login from "./Modules/AuthModules/Components/Login";
import Reset from "./Modules/AuthModules/Components/Reset";
import Change from "./Modules/AuthModules/Components/Change";
import Forget from "./Modules/AuthModules/Components/Forget";
import Register from "./Modules/AuthModules/Components/Register";
import Masterlayout from "./Modules/Shared/Masterlayout";
import Home from "./Modules/MasterModules/Components/Home";
import { ToastContainer } from "react-toastify";
import Books from "./Modules/MasterModules/Components/Books";
import Protected from "./Modules/Protected/Protected";
import Cart from "./Modules/MasterModules/Components/Cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const stripe = loadStripe(
    "pk_test_51QhxCwHoNTJAb3JhjPFfAJJ3KdbbJU7MwGJ74C93WF5h5rSTEPjzdKewevpJxvkdDShCJxRe74YuxjXdnsIao0Er00tDLJySdX"
  );
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Authlayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "reset", element: <Reset /> },
        { path: "change", element: <Change /> },
        { path: "forget", element: <Forget /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <Protected>
          <Masterlayout />
        </Protected>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "books", element: <Books /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <>
      <Elements stripe={stripe}>
        <RouterProvider router={routes} />
      </Elements>
      <ToastContainer />
    </>
  );
}

export default App;
