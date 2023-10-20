import {renderDom} from "../render";

let state = {
    sidebar: {
        friends: [
            {id: 1, name: 'Sasha', avatar: 'https://avatars.mds.yandex.net/i?id=42be74234f0abd7ff549f4213b46b9dc_sr-5233195-images-thumbs&n=13'},
            {id: 2, name: 'Jessica', avatar: 'https://avatars.mds.yandex.net/i?id=c4ac747ef716b77543e79c3067930b45_sr-5247042-images-thumbs&n=13'},
            {id: 3, name: 'Bob', avatar: 'https://avatars.mds.yandex.net/i?id=10cf25d27c5ee38df7e26c970d5334b3_sr-4116714-images-thumbs&n=13'}
        ]
    },
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, message: "test 1", likes_count: 1},
            {id: 2, message: "test 2", likes_count: 10},
            {id: 3, message: "First post", likes_count: 0},
            {id: 4, message: "Second post", likes_count: 34}
        ],
    },
    dialogsPage: {
        newMessageText: '',
        dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Artem"},
            {id: 3, name: "Dasha"},
            {id: 4, name: "Test"},
            {id: 5, name: "Test 2"}
        ],
        messages: [
            {id: 1, message: "HI"},
            {id: 2, message: "Hi 123"},
            {id: 3, message: "Test message"},
            {id: 4, message: "Test message 123455"},
            {id: 5, message: "Test message 12345521"}
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes_count: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderDom(state);
};

export let changeNewPostText = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    renderDom(state);
}

export let changeNewMessageText = (messageText) => {
    state.dialogsPage.newMessageText = messageText;
    renderDom(state);
}

export default state;