import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    // Navigate to the dashboard page upon successful login
    setCurrentPage('dashboard');
  };

  const handleGoogleSignIn = () => {
    // Navigate to the dashboard page for Google sign-in
    setCurrentPage('dashboard');
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page
    setCurrentPage('signup');
  };

  const handleGoBack = () => {
    // Navigate back to the login page
    setCurrentPage('login');
  };

  // Component for the Login page
  const LoginPage = () => (
    <div className="flex flex-col md:flex-row min-h-screen font-inter">
      {/* Left Section - Login Form */}
      <div className="flex-1 bg-[#d3ede3] flex items-center justify-center p-8">
        <div className="flex flex-col items-center w-full max-w-sm">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 mb-10">
            {/* Brain Logo - SVG placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-[#598380] p-3 border-2 border-[#598380] rounded-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c2.614 0 4.98-.99 6.8-2.614" />
              <path d="M12 2v20" />
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              <path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
            <h1 className="text-5xl font-bold text-gray-800">
              Thera<span className="text-[#3b827e]">X</span>bot
            </h1>
          </div>

          {/* Form Inputs */}
          <div className="w-full space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 rounded-full text-lg font-semibold text-gray-800 placeholder-gray-500 bg-[#7ac2a7] bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition-all duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 rounded-full text-lg font-semibold text-gray-800 placeholder-gray-500 bg-[#7ac2a7] bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition-all duration-300"
            />
          
            {/* Forgot Password Link */}
            <div className="w-full text-right mt-2">
              <a href="#" className="text-[#598380] font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              className="mt-8 w-full px-6 py-4 rounded-full text-lg font-bold text-white bg-[#598380] hover:bg-opacity-90 transition-all duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          {/* Social Login */}
          <div
            className="flex items-center space-x-2 mt-8 text-gray-600 cursor-pointer"
            onClick={handleGoogleSignIn}
          >
            <span className="font-semibold">sign in with google</span>
            {/* Google Icon - Placeholder with emoji */}
            <div className="text-3xl text-gray-500 hover:text-gray-700 transition-colors duration-300">
              <span role="img" aria-label="Google logo">
                G
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Call to Action */}
      <div className="flex-1 bg-[#3b827e] flex flex-col items-center justify-center p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Don't have an Account?</h2>
        <button
          className="px-12 py-4 rounded-full text-xl font-bold text-[#3b827e] bg-white hover:bg-gray-200 transition-all duration-300"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );

  // Component for the Dashboard page
  const DashboardPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#d3ede3] font-inter">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to your Dashboard!</h1>
      <p className="text-lg text-gray-600 mb-8">You have successfully logged in.</p>
      <button
        className="px-6 py-3 rounded-full text-lg font-bold text-white bg-[#598380] hover:bg-opacity-90 transition-all duration-300"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );

  // Component for the Sign Up page
  const SignUpPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3b827e] font-inter text-white">
      <h1 className="text-4xl font-bold mb-6">Create Your Account</h1>
      <p className="text-lg mb-8">This is where the sign up form would go.</p>
      <button
        className="px-6 py-3 rounded-full text-lg font-bold text-[#3b827e] bg-white hover:bg-gray-200 transition-all duration-300"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );

  // Main render logic based on currentPage state
  switch (currentPage) {
    case 'dashboard':
      return <DashboardPage />;
    case 'signup':
      return <SignUpPage />;
    case 'login':
    default:
      return <LoginPage />;
  }
};

export default App;
