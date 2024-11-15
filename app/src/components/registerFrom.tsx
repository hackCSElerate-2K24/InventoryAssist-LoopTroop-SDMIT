import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRef, useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import useAuthStore from '../store/authStore.ts';
import authService from "@/appwrite/auth.ts";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [error, setError] = useState("");
    const setUser = useAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const user = await authService.register({ email, password, fullname });
            setUser(user); // Set the authenticated user in authStore
            navigate({ to: "/" }); // Redirect to home or welcome page
            console.log("Registration successful!", user);
        } catch (err) {
            setError("Registration failed. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <form className="w-1/6" onSubmit={register}>
                <h1 className="text-3xl font-bold mb-8 text-primary">Register</h1>

                <div className="mb-4">
                    <Label className="block text-gray-700 mb-2">Full Name</Label>
                    <Input value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </div>

                <div className="mb-4">
                    <Label className="block text-gray-700 mb-2">Email</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <Label className="block text-gray-700 mb-2">Password</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <Label className="block text-gray-700 mb-2">Confirm Password</Label>
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

                <Button type="submit" className="w-full text-primary-foreground mt-4">
                    Register
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Button variant="link" className="text-black">
                        <Link to="/login" className="text-black-600 italic">
                            Log in
                        </Link>
                    </Button>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
