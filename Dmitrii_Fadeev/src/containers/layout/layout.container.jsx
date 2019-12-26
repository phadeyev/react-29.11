import React from 'react';
import {connect} from 'react-redux';
import {loadMessages, addMessage} from '../../actions/messageActions';
import {addChat} from "../../actions/chatActions";
import {bindActionCreators} from "redux";
import {Layout} from "../../components/layout/layout.component";
import {push} from 'connected-react-router';

class LayoutContainer extends React.Component {

    componentDidMount() {
        this.props.loadMessages();
    }

    handleSendMessage = (message) => {
        this.props.addMessage(this.props.chatId, message)
    };

    handlePushChat = (link) => {
        push(link)
    };

    render() {
        console.log("layout container", this.handlePushChat);
        return <Layout chats={this.props.chats} chatId={this.props.chatId} notifyChat={this.props.notifyChat} onSendMessage={this.handleSendMessage} onAddChat={this.props.addChat} push={this.handlePushChat}/>
    }
};

const mapStateToProps = (state, ownProps) => {
    const {chatId} = ownProps.match.params;
    return {
        chats: state.messages.chats,
        chatId: chatId,
        notifyChat: state.messages.notifyChat
    }
};

const mapDispatchToProps = (dispatch) =>
        bindActionCreators({loadMessages, addMessage, addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);