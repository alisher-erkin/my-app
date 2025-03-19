import React, { useState } from 'react';
import RegisterModal from '../components/RegisterModal/RegisterModal';
import { Col } from 'react-bootstrap';


function Login() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
          <Col xs="auto">
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition"
              >
                Регистрация
              </button>

              <RegisterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </div>
            </Col>
        </>
    )
}
export default Login;