import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, changeNewMessageText, changeNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderDom = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} changeNewMessageText={changeNewMessageText} changeNewPostText={changeNewPostText} addPost={addPost}/>
        </React.StrictMode>
    );
};