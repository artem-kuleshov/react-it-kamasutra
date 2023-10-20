import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <div className={s.posts}>
                <MyPosts posts={props.state.posts}
                         changeNewPostText={props.changeNewPostText}
                         newPostText={props.state.newPostText}
                         addPost={props.addPost} />
            </div>

        </div>
    );
}

export default Profile;