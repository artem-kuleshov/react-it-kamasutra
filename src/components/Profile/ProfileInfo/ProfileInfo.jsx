import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.main_image_div}>
                <img src='https://i.pinimg.com/originals/f8/bf/57/f8bf5745f38068ce94058544c8aee189.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src='http://www.udec.ru/images/1802-001.jpg'/>
                </div>
                <div className={s.profile_info}>
                    <img src='http://www.udec.ru/images/1802-001.jpg'/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;