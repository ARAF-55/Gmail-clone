import './RootLayout.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectMail } from './features/mailSlice';

function RootLayout() {
    const sendMessageIsOpen = useSelector(selectMail);

    return (
        <div className='root'>
            <Header />
            <div className='root_body'>
                <Sidebar />
                <Outlet />
            </div>
            {sendMessageIsOpen && <SendMail />}
        </div>
    );
}

export default RootLayout;