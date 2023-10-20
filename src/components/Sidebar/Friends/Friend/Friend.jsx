import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img className='mr-1' src={props.avatar}/>
            <label>{props.name}</label>
        </div>
    );
}

export default Friend;