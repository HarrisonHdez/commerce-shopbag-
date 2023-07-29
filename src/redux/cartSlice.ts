import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from '../components/Products';

interface CartState {
  items: ProductData[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductData>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Agrega otros reducers según tus necesidades
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;