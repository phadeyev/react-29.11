import {handleActions} from 'redux-actions';
import {loadMessages, addMessage} from '../actions/messageActions';
import update from 'react-addons-update';
import {addChat, notifyChat} from "../actions/chatActions";

const defaultState = {
    chats: {}
};

export default handleActions({
    [loadMessages]: (state, {payload}) => {
        return {
            chats: {
            1: {
                name: "1",
                messages: []
            },
            2: {
                name: "2",
                messages: []
            },
            3: {
                name: "3",
                messages: []
            }
            },
            notifyChat: null,
        }
    },
    [addMessage]: (state, {payload: {chatId, message}}) => {
        return update(state, {
            chats: {
                    [chatId]: {messages: {$push: [message]}}
            }
        });
    },
    [addChat]: (state, {payload}) => {
        const chatIdInt = Object.keys(state.chats).length + 1;
        const chatId = chatIdInt.toString();
        return update(state, {
            chats: {
                $merge:{
                    [chatId]: {name: chatId, messages: []}
                }
            }
        });
    },
    [notifyChat]: (state, {payload: {chatId}}) => {
        return update(state, {
            notifyChat: {$set: [chatId]}
        }
        )
    }
}, defaultState);