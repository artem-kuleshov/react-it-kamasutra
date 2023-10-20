import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                {props.message}
            </div>
            <div>

                <span> likes {props.likes_count}</span>
            </div>
        </div>
    );
}

export default Post;