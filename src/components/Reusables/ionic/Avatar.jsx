import React from 'react'
import { IonAvatar } from '@ionic/react'
import md5 from 'md5'

const Avatar = ({
    user,
    size = 200,
    slot = ''
}) => {
    let userImage = user ? user.photoURL : null;
    const emailMd5 = md5(user.email);
    const namePathComponent = encodeURIComponent(encodeURIComponent(user.username));
    // const colorPathComponent = encodeURIComponent(`color=${ff0000}`);
    let src = userImage
        ? userImage
        : (`https://www.gravatar.com/avatar/${emailMd5}&s=${size}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${namePathComponent}/${size}%3Frounded%3Dtrue%26bold%3Dtrue`);

    return (
        <IonAvatar style={{ width: size, height: size }} slot={slot}>
            <img src={src} alt="User Profile" />
        </IonAvatar>
    )
}

export default Avatar