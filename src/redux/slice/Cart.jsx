//Third party npm
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
 
 
};

export const itemsSlice = createSlice({
  name: "itemsValues",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const {items, category} = action.payload;
      const addCartItem = {
        id: state.cartItem.length + 1,
        category,
        itemsData: items
      }

      state.cartItem = [...state.cartItem, addCartItem]
      
    },
   
    
  },
});

// Export actions and reducer
export const { addCart  } =
  itemsSlice.actions;
export default itemsSlice.reducer;
