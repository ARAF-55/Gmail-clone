import './EmailList.css';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { CheckBox, FiberPin } from '@mui/icons-material';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { useEffect, useState } from 'react';
import { query, colRef, orderBy, onSnapshot } from './firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        const q = query(colRef, orderBy('timestamp'));
        const unSubCol = onSnapshot(q, (snapShot) => {
            setEmails(
                snapShot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                })
            )
        });
        return unSubCol;
    }, []);

    return (
        <div className='emailList'>
            <div className='emailList_settings'>
                <div className='emailList_settingsLeft'>
                    <IconButton>
                        <CheckBoxOutlineBlankOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailList_settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton >
                </div >
            </div >
            <div className='emailList_sections'>
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className='emailList_list'>

                {
                    emails.map(({ id, data: { message, subject, timestamp, to } }) => {
                        return (
                            <EmailRow
                                id={id}
                                key={id}
                                title={to}
                                subject={subject}
                                description={message}
                                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                            />
                        )
                    })
                }
            </div>
        </div >
    );
}

export default EmailList;