import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ROLE_DEFAULT_ROUTE, STATIC_ROLE_BY_MOBILE } from "@/constants/panelConfig";

const normalizeMobile = (mobile = "") => mobile.replace(/\D/g, "").slice(-10);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ mobile, enteredOtp, generatedOtp }, { rejectWithValue }) => {
    const normalizedMobile = normalizeMobile(mobile);
    const role = STATIC_ROLE_BY_MOBILE[normalizedMobile];

    if (!role) {
      return rejectWithValue("This mobile number is not assigned to any panel.");
    }

    if (!generatedOtp || enteredOtp !== generatedOtp) {
      return rejectWithValue("Invalid OTP. Please verify and try again.");
    }

    const user = {
      id: normalizedMobile,
      mobile: normalizedMobile,
      role,
    };

    return {
      user,
      token: `mock-${role}-token`,
      redirectTo: ROLE_DEFAULT_ROUTE[role],
    };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

