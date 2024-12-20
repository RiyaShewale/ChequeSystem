import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  user: null,
  key: null,
  clientPublicKey: null,
  encryptedAesKey: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    falseAuth: (state) => {
      state.auth = false;
      state.user = null;
      state.key = null;
      state.clientPublicKey = null;
      state.encryptedAesKey = null;
    },
    trueAuth: (state, action) => {
      state.auth = true;
      state.user = action.payload.user;
    },
    setServerPublicKey: (state, action) => {
      state.key = action.payload.key;
    },
    setClientPublicKey: (state, action) => {
      state.clientPublicKey = action.payload.key;
    },
    setAesKey: (state, action) => {
      state.encryptedAesKey = action.payload.key;
    },
  },
});

// Exporting reducers
export const { falseAuth, trueAuth, setServerPublicKey, setClientPublicKey, setAesKey } = authSlice.actions;

// Connecting store with reducers
export default authSlice.reducer;