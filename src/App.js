import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import {changeNewMessageText} from "./redux/state";

function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar state={props.state.sidebar} />
                <div className='content'>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile state={props.state.profilePage}
                                                 changeNewPostText={props.changeNewPostText}
                                                 addPost={props.addPost}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs changeNewMessageText={props.changeNewMessageText} state={props.state.dialogsPage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/musics" element={<Musics/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;