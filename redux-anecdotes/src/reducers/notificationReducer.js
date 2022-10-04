import { createSlice } from "@reduxjs/toolkit";

const initialState = 'The first notification';

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const message = action.payload;
      return message;
    },
    hideNotification(state, action) {
      return '';
    }
  }
});

let prevTimeout = undefined;
export const showNotification = (message, timeout) => {
  return async dispatch => {
    if (prevTimeout) {
      clearTimeout(prevTimeout);
    }
    dispatch(setNotification(message));
    prevTimeout = setTimeout(() => {
      dispatch(hideNotification());
    }, timeout * 1000);
  };
};

export const { setNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;