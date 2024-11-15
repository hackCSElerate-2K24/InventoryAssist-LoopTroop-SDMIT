import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {Link, useNavigate} from '@tanstack/react-router';
import { useState } from 'react';
import useAuthStore from '../store/authStore.ts';
import authService from "@/appwrite/auth.ts";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUser  = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    try {
      const user = await authService.login({ email, password });
      setUser(user);
      navigate({to: '/'})
      console.log("Login successful!", user);
    } catch (err) {
      setError("Invalid email or password.");
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-1/6" onSubmit={login}>
        <h1 className="text-3xl font-bold mb-8 text-primary">Login</h1>

        <div className="mb-4">
          <Label className="block text-gray-700 mb-2">Email</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-4">
          <div className="flex justify-center items-center mb-2">
            <Label className="text-gray-700">Password</Label>
            <Button variant="link" className="text-black ml-auto p-1 h-auto italic">
              <Link href="/forgot-password" className="text-black-600 p-0">
                forgot password?
              </Link>
            </Button>
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <Button type="submit" className="w-full text-primary-foreground mt-4">
          Login
        </Button>

        <p className="text-center text-sm text-gray-600 mt-4">
          New around here?
          <Button variant="link" className="text-black">
            <Link to="/register" className="text-black-600 italic">
              Sign up
            </Link>
          </Button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
