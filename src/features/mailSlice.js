import { createSlice } from "@reduxjs/toolkit";


const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        selectedMail: null,
        sendMessageIsOpen: false
    },
    reducers: {
        selectedMail(state, action) {
            state.selectedMail = action.payload
        },
        openSendMessage(state, action) {
            state.sendMessageIsOpen = true
        },
        closeSendMessage(state, action) {
            state.sendMessageIsOpen = false
        }
    }
});

export const mailReducer = mailSlice.reducer;
export const selectMail = state => state.mail.sendMessageIsOpen;
export const selectMessage = state => state.mail.selectedMail;
export const { openSendMessage, closeSendMessage, selectedMail } = mailSlice.actions;
