import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SignIn";

import "./App.css";

const AppRoutes = () =>{
 let routes = useRoutes([
   {
     path: "/",
     element: <Home />,
   },
 ]);
 return routes;
}

const App = () => {
 

  return (
<BrowserRouter>
<AppRoutes/>
</BrowserRouter>
  );
};

export default App;