import React from 'react';
import imgage from '../assets/404.gif'

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <div className="max-w-md mx-auto">
            <img className="w-full rounded-lg shadow-lg" src={imgage} alt="404 Error" />
        </div>
        <button 
            onClick={() => window.history.back()} 
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
            Go Back
        </button>
    </div>
);
};

export default Error;