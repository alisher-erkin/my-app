import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function LogoutButton() {
    const handleLogout = async () => {
        await signOut(auth);
        alert('Вы вышли из аккаунта');
    };

    return <button onClick={handleLogout}>Выйти</button>;
}

export default LogoutButton;