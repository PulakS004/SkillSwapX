import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // prevent default form submission
    // You can also add validation or API logic here
    navigate('/SkillCards');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
        <div className="w-1/2 p-8 hidden md:flex items-center justify-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/laLxw3OWak6GL7fBvC9MEtagkWI0MTl0QySOtzaCS5A.jpg"
            alt="Illustration of a woman meditating with butterflies and plants around her"
            className="w-full h-auto"
            width="400"
            height="400"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-end">
            <button className="text-gray-600 border border-gray-300 rounded-full px-4 py-1">
              Login
            </button>
          </div>
          <h2 className="text-2xl font-bold mt-4">Welcome back!</h2>
          <p className="text-gray-500 mb-6">Enter your email and password</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue="annyghosh3@gmail.com"
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
                  defaultValue="********"
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
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or login with</span>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
