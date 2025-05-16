import React from 'react';
import { FaMicrosoft } from 'react-icons/fa';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/login';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Sign in to your account</h1>
        <p className="text-sm text-gray-500 mb-8">
          Use your Microsoft account to access the app.
        </p>
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
        >
          <FaMicrosoft size={20} />
          <span>Login with Microsoft</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
