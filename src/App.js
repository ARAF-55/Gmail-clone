import React from 'react';
import Mail from './Mail';
import EmailList from './EmailList';
import RootLayout from './RootLayout';
import {
  Route, RouterProvider,
  createBrowserRouter, createRoutesFromElements
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { onAuthStateChanged, auth } from './firebase';

const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={< EmailList />} />
      <Route path='mail' element={<Mail />} />
    </Route>
  )
);

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login />} />
  )
);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(login(
          {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
        ));
      }
      else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <RouterProvider router={user ? router1 : router2} />
  );
}

export default App;
