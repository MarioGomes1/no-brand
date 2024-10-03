import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import TrendingProducts from "./pages/TrendingProducts";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  //TODO Change the path to the corresponding pages
  //TODO Add the actual corresponding pages i.e men, women, kids etc
  //TODO delete old pages that are no longer needed i.e trending and maybe that's it...oh no dashboard...? idk
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/trending" element={<TrendingProducts />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
