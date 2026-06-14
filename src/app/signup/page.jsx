"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { router } from 'better-auth/api';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
        // toast.success("Signed in with Google!");
        // router.push("/");
    }


    const handleSignUp = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log("Form Data:", user);
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
        });
        console.log("Sign Up Response:", { data, error });
        if (data) {
            toast.success("Account created successfully!");
            redirect("/");
        } else if (error) {
            toast.error("Failed to create account");
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
                <Form onSubmit={handleSignUp} className="space-y-4">
                    {/* name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className="font-medium text-[oklch(44.6%_0.043_257.281)]">
                            Name
                        </Label>
                        <Input
                            placeholder="Enter your name"
                            className="rounded-xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label className="font-medium text-[oklch(44.6%_0.043_257.281)]">
                            Image URL
                        </Label>
                        <Input
                            placeholder="Enter your image URL"
                            className="rounded-xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="font-medium text-[oklch(44.6%_0.043_257.281)]">
                            Email
                        </Label>
                        <Input
                            placeholder="Enter your email address"
                            className="rounded-xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="font-medium text-[oklch(44.6%_0.043_257.281)]">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter your password"
                            className="rounded-xl"
                        />

                        <Description className="text-xs text-gray-500">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />
                    </TextField>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "oklch(44.6% 0.043 257.281)",
                            color: "white",
                        }}
                    >
                        Sign Up
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
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    className="w-full rounded-xl border-2 hover:bg-white"
                    style={{
                        borderColor: "oklch(44.6% 0.043 257.281 / 0.2)",
                    }}
                >
                    <FcGoogle size={20} />
                    Sign in with Google
                </Button>

                {/* Login Link */}
                <div className="flex justify-center items-center gap-1.5 mt-5">
                    <span className="text-sm text-gray-600">
                        Already have an account?
                    </span>

                    <Link href="/login">
                        <span
                            className="font-semibold transition-colors"
                            style={{
                                color: "oklch(44.6% 0.043 257.281)",
                            }}
                        >
                            Sign In
                        </span>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default SignUpPage;