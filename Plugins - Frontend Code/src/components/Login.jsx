import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Player.css';

const Login = () => {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (action === 'Sign Up') {
      if (!name) {
        newErrors.name = 'Name is required';
      } else if (name.length < 3) {
        newErrors.name = 'Name must be at least 3 characters long';
      }
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (action === 'Sign Up') {
        register();
      } else {
        login();
      }
    }
  };

  const register = async() => {
    const user = { fullName: name, email, username, password };
    if (user.fullName && user.email && user.username && user.password) {
      try {
        const res = await axios.post("http://localhost:8080/user/register", user);
        alert(res.data.message);
      } catch (err) {
        console.error("Registration error:", err);
        alert("Registration failed. Please try again.");
      }
    } else {
      alert("Invalid input");
    }
  };

  
  const login = async() => {
    const user = { email, password };
    try {
      const res = await axios.post("http://localhost:8080/user/login", user);
      alert(res.data.message);
      const stat = res.status;
      if (stat === 200) {    
        const username = res.data.data.username;
        // const accessToken = res.headers['x-access-token'];
        // const refreshToken = res.headers['x-refresh-token'];
        localStorage.setItem('username', username);
        // localStorage.setItem('AccessToken', accessToken);
        // localStorage.setItem('RefreshToken', refreshToken);
        navigate('/DemoAfterLogin');
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-banner-image bg-cover h-[130vh] lg:h-[90vh] flex justify-center items-center">
      <div className="auth-container bg-gray-900 text-white py-20 px-10 rounded-bl-[40px] rounded-se-[40px] shadow-lg">
        <h1 className="auth-header text-yellow-500 text-center mb-6 transition-all">{action}</h1>
        <form className="w-full" id="authForm" onSubmit={handleSubmit}>
          {action === 'Sign Up' && (
            <>
              <div className="bg-gray-800 flex items-center gap-5 my-4 p-4 rounded transition-all auth-input">
                <IoPerson className="text-gray-400 text-xl" />
                <input
                  type="text"
                  name="fullName"
                  className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {errors.name && (
                <p className="text-red-100 bg-red-700 border border-red-600 rounded-lg p-3 mt-2 flex items-center gap-2 text-sm">
                  <span className="font-bold">⚠️</span>
                  {errors.name}
                </p>
              )}
            </>
          )}

          <div className="bg-gray-800 flex items-center gap-5 my-4 p-4 rounded auth-input">
            <MdEmail className="text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {errors.email && (
            <p className="text-red-100 bg-red-700 border border-red-600 rounded-lg p-3 mt-2 flex items-center gap-2 text-sm">
              <span className="font-bold">⚠️</span>
              {errors.email}
            </p>
          )}

          {action === 'Sign Up' && (
            <div className="bg-gray-800 flex items-center gap-5 my-4 p-4 rounded transition-all auth-input">
              <IoPerson className="text-gray-400 text-xl" />
              <input
                type="text"
                name="username"
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className="bg-gray-800 flex items-center gap-5 my-4 p-4 rounded auth-input">
            <RiLockPasswordFill className="text-gray-400 text-xl" />
            <input
              type="password"
              name="password"
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errors.password && (
            <p className="text-red-100 bg-red-700 border border-red-600 rounded-lg p-3 mt-2 flex items-center gap-2 text-sm">
              <span className="font-bold">⚠️</span>
              {errors.password}
            </p>
          )}

          <div className="text-center mb-4">
            {action === 'Sign Up' ? (
              <button
                type="submit"
                className="auth-button bg-yellow-500 hover:bg-yellow-600 text-xl text-white py-2 w-full rounded-3xl transition-all"
              >
                Sign Up
              </button>
            ) : (
              <>
                <p className="text-sm text-gray-400 mb-2">
                  Forgot Password? <span className="text-yellow-500 cursor-pointer">Click Here</span>
                </p>
                <button
                  type="submit"
                  className="auth-button bg-yellow-500 hover:bg-yellow-600 text-xl text-white py-2 w-full rounded-3xl transition-all"
                >
                  Login
                </button>
              </>
            )}
          </div>

          <div className="auth-buttons flex flex-col items-center gap-8 mt-10">
            <div className="flex justify-center gap-8 mt-1">
              <button
                className={`text-xl text-white py-2 w-36 rounded-3xl ${action === 'Sign Up' ? 'bg-blue-900' : 'bg-black-200'}`}
                onClick={() => setAction('Sign Up')}
              >
                Sign Up
              </button>
              <button
                className={`text-xl text-white py-2 w-36 rounded-3xl ${action === 'Login' ? 'bg-blue-900' : 'bg-black-200'}`}
                onClick={() => setAction('Login')}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
