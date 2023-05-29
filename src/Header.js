import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { signOut, auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const handleClick = () => {
        signOut(auth);
    };

    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' />
            </div>
            <div className='header_middle'>
                <SearchIcon />
                <input type='text' placeholder='Search mail' />
                <ArrowDropDownIcon className='header_inputCaret' />
            </div>
            <div className='header_right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar className='header_avatar' onClick={handleClick} src={user?.photoUrl} />
            </div>
        </div>
    );
}

export default Header;