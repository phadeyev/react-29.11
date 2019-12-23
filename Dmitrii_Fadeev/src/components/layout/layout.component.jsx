import React from 'react';
import {Header} from "../header/header.component";
import './layout.style.css';
import {ChatList} from "../chatlist/chatlist.component";
import {Chat} from "../chat/chat.component";

export class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {chats, chatId} = this.props;

        if (chatId === undefined || chats[chatId] === undefined) {
            chatId = 1;
        }
        return (
            <div className="layout">
                <Header  />
                <div className="chat-wrapper">
                    {chats ? <ChatList chats={chats} createNewChat={this.createNewChat} /> : null}
                    {chats[chatId] && <Chat sendNewMessage={this.props.onSendMessage} chat={chats[chatId]} chatId={chatId}/> }
                </div>
            </div>
        )
    }
}