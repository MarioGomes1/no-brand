import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import TrendingProducts from "./pages/TrendingProducts";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductPage from "./pages/ProductPage";

function App() {
  //TODO Change the path to the corresponding pages
  //TODO Add the actual corresponding pages i.e men, women, kids etc
  //TODO delete old pages that are no longer needed i.e trending and maybe that's it...oh no dashboard...? idk

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />}>
              <Route path="/products/:category" element={<Product />} />
            </Route>
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/trending" element={<TrendingProducts />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
