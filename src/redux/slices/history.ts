import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessageType } from '../../types';
import { editValueById, deleteItemByIndex, getIndexById } from '../../utils/utils';

const initialState: ChatMessageType[] = [];

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<ChatMessageType>) {
      return [...state, action.payload]
    },
    setDelivered(state, action: PayloadAction<ChatMessageType['message_id']>) {
      const newObj = editValueById(state, action.payload, 'delivered', true)
      state = newObj;
    },
    delItem(state, action: PayloadAction<ChatMessageType['message_id']>) {
      const newObj = deleteItemByIndex(state, getIndexById(state, action.payload))
      state = newObj;
    },
    setLike(state, action: PayloadAction<ChatMessageType['message_id']>) {
      const currentIndex = getIndexById(state, action.payload);
      const newObj = editValueById(state, action.payload, 'liked', !state[currentIndex].liked)
      state = newObj;
    },
  },
})

const { setItem, setDelivered, delItem, setLike } = historySlice.actions;

const historyReducer = historySlice.reducer;

export { setItem, setDelivered, delItem, setLike, historyReducer };