// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Это тебе даст Firebase при создании приложения в консоли
const firebaseConfig = {
    apiKey: "AIzaSyCBmzD0acLP17UrgEFOiyfc7H470xERf3Y",
    authDomain: "sample-project-c2b0e.firebaseapp.com",
    projectId: "sample-project-c2b0e",
    storageBucket: "sample-project-c2b0e.firebasestorage.app",
    messagingSenderId: "630068783208",
    appId: "1:630068783208:web:a1b95dc72581f25692f3dd"
  };

// Инициализация приложения
const app = initializeApp(firebaseConfig);

// Экспортируем auth для работы с авторизацией
export const auth = getAuth(app);
