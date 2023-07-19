import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "../api/admin-api";

const initialState = {
  allproduct: [],
  isProduct: [],
  isLoading: false,
  error: null,
};

export const getProductAsync = createAsyncThunk(
  "admin/getProductAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getAllProduct();
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getProductIdAsync = createAsyncThunk(
  "admin/getProductIdAsync",
  async (id, thunkApi) => {
    try {
      const res = await adminService.getProductById(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createProductAsync = createAsyncThunk(
  "admin/createProductAsync",
  async (input, thunkApi) => {
    try {
      const res = await adminService.addProduct(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const updateProductAsync = createAsyncThunk(
  "admin/updateProductAsync",
  async (input, thunkApi) => {
    try {
      const res = await adminService.updateProduct(input);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "admin/deleteProductAsync",
  async (id, thunkApi) => {
    try {
      const res = await adminService.deleteProduct(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const adminSlice = createSlice({
  name: "productPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProductAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.allproduct = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductIdAsync.pending, (state) => {
        state.isLoading = false;
      })

      .addCase(getProductIdAsync.fulfilled, (state, action) => {
        state.isProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductIdAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default adminSlice.reducer;
