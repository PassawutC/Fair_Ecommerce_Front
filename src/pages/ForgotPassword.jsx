import axios from "axios";
import React, { useState } from "react";

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // New state variable for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    try {
      const response = await axios.post('http://localhost:8080/auth/forgot-password', {
        username,
        email
      });
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false); // Set loading to false after the request is finished
    }
  };

  return (
    <div className="flex flex-col p-5 shadow-2xl rounded-lg justify-center items-center w-[600px] h-[400px] mt-10 bg-white">
      <h2 className="font-bold">Please enter your Email and Username.</h2>
      <form className="flex flex-col gap-5 pt-5" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 w-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn bg-red-500 mt-4 text-white hover:bg-red-400">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Submit'} {/* Display loading text when loading */}
        </button>
      </form>
      {message && <p className="pt-4">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
