import './Login.css';
import { Button } from '@mui/material';
import { auth, signInWithPopup, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }));
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login_container'>
                <img
                    src='https://1000logos.net/wp-content/uploads/2018/05/Gmail-Logo-2010.png'
                    alt='gmail_image'
                />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;