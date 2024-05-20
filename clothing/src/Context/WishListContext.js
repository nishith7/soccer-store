// WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishListCount, setWishListCount] = useState(0);

  const addToWishlist = () => {
    setWishListCount(wishListCount + 1);
  };

  return (
    <WishlistContext.Provider value={{ wishListCount, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
