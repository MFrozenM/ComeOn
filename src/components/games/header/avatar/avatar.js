import React, {useEffect, useState} from 'react';
import classes from './avatar.module.css'
import UserEvent from "./userEvent";
import {useAuth} from "../../../login/stores/authStore";
import Search from "../search/search";
import {importImageBasedOnUrl} from "../../../../utils/lazyImport";

const Avatar = () => {
    const userData = useAuth((state) => state.userData)
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        importImageBasedOnUrl(userData.avatar).then((value => {
            setAvatar(value)
        }))
    }, [userData.avatar])

    return (
        <div className={classes.container}>
            <div className={classes.user_info_wrapper}>
                <img className={classes.avatar} src={avatar} alt={"user avatar"}/>
                <UserEvent name={userData.name} event={userData.event}/>
            </div>
            <Search/>
        </div>
    );
};

export default Avatar;
