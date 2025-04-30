import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../helpers/axios';



interface CartItem {
  product: string;
  quantity: number;
}

interface CartState {
  items:any
  status?: string;
  error?: string;
}

const initialState: CartState = {
  items:{},
  status:"failed",
  error:''
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (item: CartItem, { rejectWithValue }) => {
    try {
      const response = await api.post('/cart', item);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to add item to cart');
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/cart');
      console.log("response",response);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch cart items');
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (itemId: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/cart/${itemId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to remove item from cart');
    }
  }
);

export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async (item: CartItem, { rejectWithValue }) => {
    try {
      const response = await api.put(`/cart/${item.product}`, {quantity:item.quantity});
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to update item in cart');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<CartItem>) => {
        state.status = 'succeeded';
        state.items=action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.items =action.payload;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(updateCartItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartItem.fulfilled, (state, action: PayloadAction<CartItem>) => {
        state.status = 'succeeded';
        const updatedItem = action.payload;
        const index = state.items.cartItems.findIndex(
          (item:any) => item.product._id === updatedItem.product
        );
        if (index !== -1) {
          state.items.cartItems[index].quantity = updatedItem.quantity;
        }
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;

