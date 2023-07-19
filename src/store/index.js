import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slice/authSlice";
import productReducer from "../slice/adminSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    productPlan: productReducer,
  },
});
export default store;
