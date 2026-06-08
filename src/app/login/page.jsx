"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log("Form Data:", user);
        // Implement your login logic here, e.g., call your API to authenticate the user
        const {data, error} = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });
        if(data){
            toast.success("Logged in successfully!");
            router.push("/");
            
        } else if(error){
            toast.error("Failed to log in");
        }

    };
    return (
        <div className="max-w-7xl mx-auto px-6 py-24 flex items-center justify-center">
            <Card
                className="w-full max-w-md p-6 rounded-3xl shadow-xl border"
                style={{
                    backgroundColor: "oklch(92.9% 0.013 255.508)",
                    borderColor: "oklch(44.6% 0.043 257.281 / 0.15)",
                }}
            >
                <Form className="space-y-4" onSubmit={handleLogin}>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label className="font-medium text-[oklch(44.6%_0.043_257.281)]">
                            Email Address
                        </Label>

                        <Input
                            placeholder="Enter your email"
                            className="rounded-xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >
                        <Label className="font-medium text-[oklch(44.6%_0.043_257.281)]">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter your password"
                            className="rounded-xl"
                        />

                        <FieldError />
                    </TextField>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-sm font-medium hover:underline"
                            style={{
                                color: "oklch(44.6% 0.043 257.281)",
                            }}
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <Button
                        type="submit"
                        className="w-full rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "oklch(44.6% 0.043 257.281)",
                            color: "white",
                        }}
                    >
                        Sign In
                    </Button>
                </Form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <Separator className="flex-1" />
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                        Or Sign in with
                    </span>
                    <Separator className="flex-1" />
                </div>

                {/* Google Login */}
                <Button
                    variant="outline"
                    className="w-full rounded-xl border-2 hover:bg-white transition-all"
                    style={{
                        borderColor: "oklch(44.6% 0.043 257.281 / 0.2)",
                    }}
                >
                    <FcGoogle size={20} />
                    Sign in with Google
                </Button>

                {/* Register Link */}
                <div className="flex justify-center items-center gap-1.5 mt-5">
                    <span className="text-sm text-gray-600">
                        Do not have an account?
                    </span>

                    <Link href="/register">
                        <span
                            className="font-semibold hover:opacity-80 transition-all"
                            style={{
                                color: "oklch(44.6% 0.043 257.281)",
                            }}
                        >
                            Sign Up
                        </span>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;