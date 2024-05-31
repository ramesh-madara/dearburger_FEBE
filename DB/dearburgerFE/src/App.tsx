import "./App.css";
import Home from "./pages/home-page/Home";
import Orders from "./pages/orders-page/Orders";
import Login from "./pages/login-page/Login";
import { Provider } from "react-redux";
import store from "./state/store/store";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>}>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/login">Login</Link>
        </RouterProvider>
      </div>
    </Provider>
  );
}

let router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <>
          <Home />
        </>
      );
    },
  },
  {
    path: "/orders",
    Component() {
      return (
        <>
          <Orders />
        </>
      );
    },
  },


  {
    path: "/login",
    Component() {
      return (
        <>
          <Login/>
        </>
      );
    },
  },



]);

export default App;
