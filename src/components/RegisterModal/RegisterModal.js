import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import "../RegisterModal/RegisterModal.css";



function RegisterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Успешно зарегистрированы!');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='overblock'>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
        
        <h2 className="text-xl font-bold mb-4 text-center">Регистрация</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Введите почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Зарегистрироваться
          </button>
         <div className='button-cansel'>
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black mt-30"
              onClick={onClose}
            >
              <p>Отмена</p>
            </button>
         </div>
        </form>
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        {success && <p className="text-green-500 mt-2 text-sm">{success}</p>}
      </div>
    </div>
    </div>
  );
}

export default RegisterModal;
