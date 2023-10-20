import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <Dialog id={d.id} name={d.name}/>);
    let messagesElements = props.state.messages.map( m =>  <Message message={m.message}/>);

    let messageElement = React.createRef();

    let sendMessage = () => {
        let message = messageElement.current.value;
        alert(message);
    };

    let changeNewMessageText = () => {
        props.changeNewMessageText(messageElement.current.value);
    }

    return (
       <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               { dialogsElements }
           </div>
           <div className={s.messages}>
               { messagesElements }
                <textarea onChange={changeNewMessageText} value={props.newMessageText} ref={messageElement}></textarea>
               <div>
                   <button onClick={sendMessage}>Send message</button>
               </div>
           </div>
       </div>
    );
}

export default Dialogs;