//Third party npm
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modaldata: null,
};

export const itemsSlice = createSlice({
  name: "itemsValues",
  initialState,
  reducers: {
    addModal: (state, action) => {
      const { items } = action.payload;
      console.log('items', items);

      state.modaldata = items;
    },
  },
});

// Export actions and reducer
export const { addModal } = itemsSlice.actions;
export default itemsSlice.reducer;
