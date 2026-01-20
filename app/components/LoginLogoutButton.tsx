"use client"

import { Login, Logout } from "@/lib/auth"

export default function LoginLogoutButton({type}: {type: 'login' | 'logout'}) {
  return (
    <button onClick={() => type === 'login' ? Login() : Logout()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
      {type === 'login' ? 'Log In' : 'Log Out'}
    </button>
  );
}