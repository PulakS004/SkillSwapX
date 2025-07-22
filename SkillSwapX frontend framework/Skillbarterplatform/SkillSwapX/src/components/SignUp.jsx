import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', email, password);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center p-6">
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Company Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-2 text-2xl font-bold">Swyft</span>
        </div>
        <nav className="space-x-6 text-lg">
          <Link to="/Home">Home</Link>
          <Link to="/Home">Services</Link>
          <Link to="/">Reviews</Link>
          <Link to="/">Contact</Link>
          <Link to="/signup" className="bg-pink-200 text-pink-600 px-4 py-2 rounded-full">Get Started</Link>
        </nav>
      </header>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
          <div className="w-1/2 p-8 hidden md:flex items-center justify-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/laLxw3OWak6GL7fBvC9MEtagkWI0MTl0QySOtzaCS5A.jpg"
              alt="Illustration"
              className="w-full h-auto"
              width="400"
              height="400"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-end">
              <Link to="/login" className="text-gray-600 border border-gray-300 rounded-full px-4 py-1">
                Log In
              </Link>
            </div>
            <h2 className="text-2xl font-bold mt-4">Create your account</h2>
            <p className="text-gray-500 mb-6">Enter your email and password to sign up</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </label>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </label>
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-green-500" />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-red-500">
                  Need Help?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-pink-600 bg-pink-200 py-2 rounded-lg hover:text-black-600"
              >
                Sign Up
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or sign up with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                <i className="fab fa-google text-red-500 mr-2"></i>
                Google
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                <i className="fab fa-facebook text-blue-500 mr-2"></i>
                Facebook
              </button>
            </div>
            <p className="text-center text-gray-500 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-pink-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
