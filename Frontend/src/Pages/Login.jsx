import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast'
const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault()
    // Handle login logic here
    try {
        const res = await axios.post('https://ticketsupportsystem-rmo0.onrender.com/Auth/login', form);
        localStorage.setItem('token', res.data.token);
        toast.success('Login Successful');
        navigate('/DashBoard');
      } catch (e) {
          toast.error('Invalid credentials');
          console.log("Error while login",e)
      }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              value={form.email}
              onChange={(e) => setForm({...form,email:e.target.value})}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={form.password}
              onChange={(e) => setForm({...form,password:e.target.value})}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>

        <p className="text-sm text-center">
          Don't have an account? <a href="/Signup" className="link link-primary">Register</a>
        </p>
      </div>
    </div>
  )
}

export default Login