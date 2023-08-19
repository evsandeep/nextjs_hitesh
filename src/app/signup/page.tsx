"use client";
import Link from "next/Link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })
    const onSignup = async() => {

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Signup </h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="p-2 border border-grary-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
                type="text" 
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
            />
        </div>
    )
}