import { Routes, Route } from "react-router-dom";
import AllProductsPage from "../components/AllProductsPage";
import Home from "../components/Home";
import LoginPage from "../components/LoginPage";
import ProductDetailsPage from "../components/ProductDetailsPage";
import ShoppingCart from "../components/ShoppingCart";
import { WishlistProvider } from "../Context/WishListContext";
import WishListPage from "../components/WishListPage";

export default function Router(params) {
  return (
    <>
    <WishlistProvider>
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allproducts" element={<AllProductsPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<WishListPage/>} />
      </Routes>
    </WishlistProvider>

    </>
  );
}
