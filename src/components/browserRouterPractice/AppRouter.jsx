import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./componentss/Home";
// import About from "./componentss/About";
import Navbar from "./componentss/Navbar";
import OrderSummary from "./componentss/OrderSummary";
import NoMatch from "./componentss/NoMatch";
import Products from "./componentss/Products";
import FeaturedProducts from "./componentss/FeaturedProducts";
import NewProducts from "./componentss/NewProducts";
import Users from "./componentss/Users";
import UserDetails from "./componentss/UserDetails";
import Admin from "./componentss/Admin";
import Profile from "./componentss/Profile";
import { AuthPrivider } from "./componentss/Auth";
import LogIn from "./componentss/LogIn";
import RequireAuth from "./componentss/RequireAuth";
const LazyAbout = React.lazy(() => import("./componentss/About"));

function AppRouter() {
  return (
    <AuthPrivider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequireAuth>
          <Profile />
          
          </RequireAuth>} />
        <Route path="login" element={<LogIn />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthPrivider>
  );
}

export default AppRouter;
