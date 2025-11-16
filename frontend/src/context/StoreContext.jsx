import { createContext, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";               // <-- HTTP, NOT HTTPS
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);     // <-- UI feedback

  /* ---------- ADD TO CART (works offline & online) ---------- */
  const addToCart = async (itemId) => {
    // 1. Update UI immediately
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    // 2. Sync with backend only when logged in
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
      } catch (err) {
        console.error("Add-to-cart API failed:", err);
        // optional: revert UI on failure
      }
    }
  };

  /* ---------- REMOVE FROM CART ---------- */
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (next[itemId] > 1) next[itemId]--;
      else delete next[itemId];
      return next;
    });

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
      } catch (err) {
        console.error("Remove-from-cart API failed:", err);
      }
    }
  };

  /* ---------- TOTAL ---------- */
  const getTotalCartAmount = () => {
    if (!food_list.length) return 0;
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const item = food_list.find((p) => p._id === id);
        if (item) total += item.price * cartItems[id];
      }
    }
    return total;
  };

  /* ---------- FETCH FOOD LIST ---------- */
  const fetchFoodList = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/food/list`);
      console.log("Food API response:", res.data);          // <-- DEBUG
      setFoodList(res.data.data || []);
    } catch (err) {
      console.error("Food list error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- LOAD CART FROM SERVER (only when logged in) ---------- */
  const loadCartData = async (token) => {
    try {
      const res = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token } }
      );
      setCartItems(res.data.cartData || {});
    } catch (err) {
      console.error("Load cart error:", err);
    }
  };

  /* ---------- INITIAL LOAD ---------- */
  useEffect(() => {
    async function init() {
      await fetchFoodList();                     // always
      const saved = localStorage.getItem("token");
      if (saved) {
        setToken(saved);
        await loadCartData(saved);
      }
    }
    init();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    loading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;