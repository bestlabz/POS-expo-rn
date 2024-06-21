import { configureStore } from "@reduxjs/toolkit";
import Items from "./slice/Items";
import Cart from "./slice/Cart";
import ModalData from "./slice/ModalData";




const store = configureStore({
    reducer: {
       items: Items,
       cart: Cart,
       modal: ModalData
       
    }
});

export default store;
