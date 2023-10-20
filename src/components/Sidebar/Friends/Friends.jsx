import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendsElements = props.friends.map( friend => <Friend id={friend.id} avatar={friend.avatar} name={friend.name} /> );

    return (
        <div className='color-white'>
            <h4 className='text-center'> Friends</h4>
            <div className={s.friends}>
                { friendsElements }
            </div>
        </div>
    );
}

export default Friends;